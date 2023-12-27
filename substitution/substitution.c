#include <cs50.h>
#include <ctype.h>
#include <stdio.h>
#include <string.h>

int main(int argc, string argv[])
{
    // Check for correct number of command-line arguments
    if (argc != 2)
    {
        printf("Usage: ./substitution key\n");
        return 1;
    }

    int keyLength = strlen(argv[1]);

    // Check if key length is valid
    if (keyLength != 26)
    {
        printf("Key must be exactly 26 characters\n");
        return 1;
    }

    // Validate key characters and check for duplicates
    for (int i = 0; i < keyLength; i++)
    {
        if (!isalpha(argv[1][i]))
        {
            printf("Key must contain only alphabetic characters\n");
            return 1;
        }
        for (int j = i + 1; j < keyLength; j++)
        {
            if (argv[1][i] == argv[1][j])
            {
                printf("Key must not contain repeated alphabetic characters\n");
                return 1;
            }
        }
    }

    // Get plaintext input from the user
    string plaintext = get_string("plaintext: ");
    printf("ciphertext: ");

    int length = strlen(plaintext);

    // Encrypt the plaintext using the given key
    for (int i = 0; i < length; i++)
    {
        if (isupper(plaintext[i]))
        {
            printf("%c", toupper(argv[1][plaintext[i] - 'A']));
        }
        else if (islower(plaintext[i]))
        {
            printf("%c", tolower(argv[1][plaintext[i] - 'a']));
        }
        else
        {
            printf("%c", plaintext[i]);
        }
    }

    printf("\n");
}
