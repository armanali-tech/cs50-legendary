import csv
import sys


def main():
    # Check for command-line usage
    if len(sys.argv) != 3:
        print("Usage: python dna.py database.csv sequence.txt")
        sys.exit(1)

    # Read database file into a variable
    with open(sys.argv[1], newline="") as csv_file:
        reader = csv.DictReader(csv_file)
        # Store the database in a variable
        database = list(reader)

    # Read DNA sequence file into a variable
    with open(sys.argv[2]) as sequence_file:
        sequence = sequence_file.read()

    # Find longest match of each STR in DNA sequence
    # Assuming STRs are stored as keys in the first row of the database
    str_keys = database[0].keys()
    str_counts = {
        key: longest_match(sequence, key) for key in str_keys if key != "name"
    }

    # Check database for matching profiles
    for person in database:
        # Compare STR counts for each person in the database
        if all(int(person[key]) == str_counts[key] for key in str_counts.keys()):
            print(person["name"])
            return

    # If no match is found
    print("No match.")

    return


def longest_match(sequence, subsequence):
    """Returns length of longest run of subsequence in sequence."""

    # Initialize variables
    longest_run = 0
    subsequence_length = len(subsequence)
    sequence_length = len(sequence)

    # Check each character in sequence for most consecutive runs of subsequence
    for i in range(sequence_length):
        # Initialize count of consecutive runs
        count = 0

        # Check for a subsequence match in a "substring" (a subset of characters) within sequence
        # If a match, move substring to next potential match in sequence
        # Continue moving substring and checking for matches until out of consecutive matches
        while True:
            # Adjust substring start and end
            start = i + count * subsequence_length
            end = start + subsequence_length

            # If there is a match in the substring
            if sequence[start:end] == subsequence:
                count += 1

            # If there is no match in the substring
            else:
                break

        # Update most consecutive matches found
        longest_run = max(longest_run, count)

    # After checking for runs at each character in sequence, return longest run found
    return longest_run


main()
