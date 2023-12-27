#include <cs50.h>
#include <ctype.h>
#include <stdio.h>
#include <string.h>

int find_charnum(string word);

int main(void)
{
    // Get input words from both players
    string word1 = get_string("Name 1: ");
    string word2 = get_string("Name 2: ");

    // Score both words
    int score1 = find_charnum(word1);
    int score2 = find_charnum(word2);

    // TODO: Print the winner
}

int find_charnum(string word)
{
    // TODO: Compute and return score for string
    int length = strlen(word);

    printf("Character numbers of name %s are: ", word);

    for (int i = 0; i < length; i++)
    {
        printf("%i ", word[i]);
    }

    printf("\n");

    return 0;
}
