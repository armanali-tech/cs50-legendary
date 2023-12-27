from cs50 import get_string


def main():
    text = get_string("Text: ")
    index = calculate_index(text)
    grade = get_grade(index)
    print(grade)


def calculate_index(text):
    letters = sum(c.isalpha() for c in text)
    words = text.count(" ") + 1
    sentences = text.count(".") + text.count("!") + text.count("?")

    L = (letters / words) * 100
    S = (sentences / words) * 100

    index = round(0.0588 * L - 0.296 * S - 15.8)
    return index


def get_grade(index):
    if index < 1:
        return "Before Grade 1"
    elif index >= 16:
        return "Grade 16+"
    else:
        return f"Grade {index}"


if __name__ == "__main__":
    main()
