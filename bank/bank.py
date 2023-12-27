def main():
    # Ask user for input
    greeting = input("Greeting : ").replace(" ", "").lower()

    if greeting.find("hello") != -1:
        print('$0')
    elif greeting[0] == "h":
        print('$20')
    else :
        print('$100')

if __name__ == "__main__":
    main()
