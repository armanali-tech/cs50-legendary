import os

from cs50 import SQL
from flask import Flask, flash, redirect, render_template, request, session
from flask_session import Session
from werkzeug.security import check_password_hash, generate_password_hash

from helpers import apology, login_required, lookup, usd

# Configure application
app = Flask(__name__)

# Custom filter
app.jinja_env.filters["usd"] = usd

# Configure session to use filesystem (instead of signed cookies)
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

# Configure CS50 Library to use SQLite database
db = SQL("sqlite:///finance.db")


@app.after_request
def after_request(response):
    """Ensure responses aren't cached"""
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Expires"] = 0
    response.headers["Pragma"] = "no-cache"
    return response


@app.route("/")
@login_required
def index():
    """Show portfolio of stocks"""

    # Get the user's ID from the session
    user_id = session["user_id"]

    # Query the database to get user's cash balance
    user_info = db.execute("SELECT cash FROM users WHERE id = ?", user_id)
    cash_balance = user_info[0]["cash"]

    # Query the database to get user's stock holdings
    stocks = db.execute(
        """
        SELECT symbol, SUM(shares) as total_shares
        FROM purchases
        WHERE user_id = ?
        GROUP BY symbol
        HAVING total_shares > 0
    """,
        user_id,
    )

    # Create a list to store information about each stock
    stocks_info = []

    # Iterate through the user's stocks
    for stock in stocks:
        symbol = stock["symbol"]
        total_shares = stock["total_shares"]

        # Use lookup to get current stock information
        stock_info = lookup(symbol)

        # Calculate the total value of the holding
        total_value = total_shares * stock_info["price"]

        # Append stock information to the list
        stocks_info.append(
            {
                "symbol": symbol,
                "name": stock_info["name"],
                "shares": total_shares,
                "price": stock_info["price"],
                "total_value": total_value,
            }
        )

    # Calculate the grand total (stocks' total value plus cash)
    grand_total = cash_balance + sum(stock["total_value"] for stock in stocks_info)

    # Render the index template with the user's portfolio information
    return render_template(
        "index.html",
        stocks=stocks_info,
        cash_balance=cash_balance,
        grand_total=grand_total,
    )


@app.route("/buy", methods=["GET", "POST"])
@login_required
def buy():
    """Buy shares of stock"""
    if request.method == "POST":
        # Ensure symbol was submitted
        symbol = request.form.get("symbol")
        if not symbol:
            return apology("must provide stock symbol", 400)

        # Use the lookup function to get stock information
        stock_info = lookup(symbol)

        # Check if the stock symbol is valid
        if not stock_info:
            return apology("invalid stock symbol", 400)

        # Ensure shares were submitted and are a positive integer
        try:
            shares = int(request.form.get("shares"))
            if shares <= 0:
                raise ValueError("must provide a positive integer for shares")
        except ValueError:
            return apology("must provide a positive integer for shares", 400)

        # Get the current user's cash balance
        user_id = session["user_id"]
        user_info = db.execute("SELECT cash FROM users WHERE id = ?", user_id)
        cash_balance = user_info[0]["cash"]

        # Calculate the total cost of the shares
        total_cost = shares * stock_info["price"]

        # Check if the user can afford the shares
        if cash_balance < total_cost:
            return apology("insufficient funds", 400)

        # Update the user's cash balance
        new_balance = cash_balance - total_cost
        db.execute("UPDATE users SET cash = ? WHERE id = ?", new_balance, user_id)

        # Record the purchase in a new table (e.g., purchases)
        db.execute(
            "INSERT INTO purchases (user_id, symbol, shares, price, timestamp) VALUES (?, ?, ?, ?, CURRENT_TIMESTAMP)",
            user_id,
            symbol,
            shares,
            stock_info["price"],
        )

        flash("Bought!")

        # Redirect the user to the home page
        return redirect("/")

    else:
        # Render the buy form
        return render_template("buy.html")


@app.route("/history")
@login_required
def history():
    """Show history of transactions"""
    # Get the user's ID from the session
    user_id = session["user_id"]

    # Query the database to get the user's transaction history
    transactions = db.execute(
        """
        SELECT symbol, shares, price, timestamp, CASE WHEN shares > 0 THEN 'BUY' ELSE 'SELL' END as action
        FROM purchases
        WHERE user_id = ?
        ORDER BY timestamp DESC
    """,
        user_id,
    )

    # Render the history template with the user's transaction history
    return render_template("history.html", transactions=transactions)


@app.route("/login", methods=["GET", "POST"])
def login():
    """Log user in"""

    # Forget any user_id
    session.clear()

    # User reached route via POST (as by submitting a form via POST)
    if request.method == "POST":
        # Ensure username was submitted
        if not request.form.get("username"):
            return apology("must provide username", 400)

        # Ensure password was submitted
        elif not request.form.get("password"):
            return apology("must provide password", 400)

        # Query database for username
        rows = db.execute(
            "SELECT * FROM users WHERE username = ?", request.form.get("username")
        )

        # Ensure username exists and password is correct
        if len(rows) != 1 or not check_password_hash(
            rows[0]["hash"], request.form.get("password")
        ):
            return apology("invalid username and/or password", 400)

        # Remember which user has logged in
        session["user_id"] = rows[0]["id"]

        # Redirect user to home page
        return redirect("/")

    # User reached route via GET (as by clicking a link or via redirect)
    else:
        return render_template("login.html")


@app.route("/logout")
def logout():
    """Log user out"""

    # Forget any user_id
    session.clear()

    # Redirect user to login form
    return redirect("/")


@app.route("/quote", methods=["GET", "POST"])
@login_required
def quote():
    """Get stock quote."""
    if request.method == "POST":
        # Ensure symbol was submitted
        symbol = request.form.get("symbol")
        if not symbol:
            return apology("must provide stock symbol", 400)

        # Use the lookup function to get stock information
        stock_info = lookup(symbol)

        # Check if the stock symbol is valid
        if not stock_info:
            return apology("invalid stock symbol", 400)

        # Render the quoted template with stock information
        return render_template("quoted.html", stock=stock_info)

    else:
        # Render the quote form
        return render_template("quote.html")


@app.route("/register", methods=["GET", "POST"])
def register():
    """Register user"""
    if request.method == "POST":
        # Ensure username was submitted
        username = request.form.get("username")
        if not username:
            return apology("must provide username", 400)

        # Ensure password was submitted
        password = request.form.get("password")
        confirmation = request.form.get("confirmation")
        if not password or not confirmation:
            return apology("must provide password and confirmation", 400)

        # Ensure password and confirmation match
        if password != confirmation:
            return apology("passwords do not match", 400)

        # Hash the password
        hashed_password = generate_password_hash(password)

        # Insert the new user into the database
        try:
            db.execute(
                "INSERT INTO users (username, hash) VALUES (?, ?)",
                username,
                hashed_password,
            )
        except:
            # Check if the username is already taken
            return apology("username already exists", 400)

        # Log the user in automatically after registration
        user_id = db.execute("SELECT id FROM users WHERE username = ?", username)[0][
            "id"
        ]
        session["user_id"] = user_id

        # Redirect to the home page or any other desired page after registration
        return redirect("/")

    else:
        # Render the registration form
        return render_template("register.html")


@app.route("/sell", methods=["GET", "POST"])
@login_required
def sell():
    """Sell shares of stock"""
    if request.method == "POST":
        # Get the user's ID from the session
        user_id = session["user_id"]

        # Ensure stock symbol was selected
        symbol = request.form.get("symbol")
        if not symbol:
            return apology("must select a stock", 400)

        # Ensure shares were submitted and are a positive integer
        try:
            shares = int(request.form.get("shares"))
            if shares <= 0:
                raise ValueError("must provide a positive integer for shares")
        except ValueError:
            return apology("must provide a positive integer for shares", 400)

        # Query the database to check if the user owns that many shares of the selected stock
        user_stock = db.execute(
            """
            SELECT symbol, SUM(shares) as total_shares
            FROM purchases
            WHERE user_id = ? AND symbol = ?
            GROUP BY symbol
            HAVING total_shares >= ?
        """,
            user_id,
            symbol,
            shares,
        )

        # Render an apology if the user does not own that many shares of the stock
        if not user_stock:
            return apology("you don't own enough shares of that stock", 400)

        # Use lookup to get the current stock information
        stock_info = lookup(symbol)

        # Calculate the total value of the sold shares
        total_value = shares * stock_info["price"]

        # Query to update the user's cash balance
        db.execute(
            "UPDATE users SET cash = cash + ? WHERE id = ?", total_value, user_id
        )

        # Query to update the user's stock holdings
        db.execute(
            "INSERT INTO purchases (user_id, symbol, shares, price, timestamp) VALUES (?, ?, ?, ?, CURRENT_TIMESTAMP)",
            user_id,
            symbol,
            -shares,
            stock_info["price"],
        )

        flash("Sold!")

        # Redirect the user to the home page
        return redirect("/")

    else:
        # Render the sell form with a dropdown menu of the user's stocks
        user_id = session["user_id"]
        user_stocks = db.execute(
            """
            SELECT symbol
            FROM purchases
            WHERE user_id = ?
            GROUP BY symbol
            HAVING SUM(shares) > 0
        """,
            user_id,
        )

        return render_template("sell.html", stocks=user_stocks)


@app.route("/password", methods=["GET", "POST"])
@login_required
def change_password():
    """Allow users to change their passwords"""

    if request.method == "POST":
        # Get the user's ID from the session
        user_id = session["user_id"]

        # Ensure old password was submitted
        old_password = request.form.get("old_password")
        if not old_password:
            return apology("must provide old password", 400)

        # Query the database for the user's current hashed password
        user_info = db.execute("SELECT hash FROM users WHERE id = ?", user_id)

        # Check if the old password is correct
        if not check_password_hash(user_info[0]["hash"], old_password):
            return apology("incorrect old password", 400)

        # Ensure new password was submitted
        new_password = request.form.get("new_password")
        if not new_password:
            return apology("must provide new password", 400)

        # Hash the new password and update it in the database
        hashed_password = generate_password_hash(new_password)
        db.execute("UPDATE users SET hash = ? WHERE id = ?", hashed_password, user_id)

        flash("Password changed successfully!")
        return redirect("/")

    else:
        # Render the change password form
        return render_template("password.html")


@app.route("/cash/add", methods=["GET", "POST"])
@login_required
def add_cash():
    """Allow users to add additional cash to their account"""

    if request.method == "POST":
        # Get the user's ID from the session
        user_id = session["user_id"]

        # Ensure cash amount was submitted and is a positive number
        try:
            cash_to_add = float(request.form.get("cash"))
            if cash_to_add <= 0:
                raise ValueError("must provide a positive number for cash")
        except ValueError:
            return apology("must provide a positive number for cash", 400)

        # Update the user's cash balance in the database
        db.execute(
            "UPDATE users SET cash = cash + ? WHERE id = ?", cash_to_add, user_id
        )

        flash("Cash added successfully!")
        return redirect("/")

    else:
        # Render the add cash form
        return render_template("cash.html")
