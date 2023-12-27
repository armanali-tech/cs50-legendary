from cs50 import get_string


def main():
    try:
        number = get_string("Enter credit card number: ")
    except ValueError:
        print("Enter a valid number!")
        exit()

    card_digits = [int(digit) for digit in str(number)]
    length = len(card_digits)

    if length < 13 or length > 16:
        print("INVALID")
        exit()

    total_sum = 0

    for i, digit in enumerate(reversed(card_digits)):
        if i % 2 == 1:
            doubled_digit = digit * 2
            total_sum += doubled_digit // 10 + doubled_digit % 10
        else:
            total_sum += digit

    if total_sum % 10 != 0:
        print("INVALID")
        exit()

    first_two_digits = int(str(number)[:2])

    if length == 15 and (first_two_digits == 34 or first_two_digits == 37):
        print("AMEX")
    elif length == 16 and 51 <= first_two_digits <= 55:
        print("MASTERCARD")
    elif length in (13, 16) and str(number)[0] == "4":
        print("VISA")
    else:
        print("INVALID")


if __name__ == "__main__":
    main()
