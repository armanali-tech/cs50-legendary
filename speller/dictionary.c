#include "dictionary.h"
#include <ctype.h>
#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <strings.h>

// Implements a dictionary's functionality

// Represents a node in a hash table
typedef struct node
{
    char word[LENGTH + 1];
    struct node *next;
} node;

// Number of buckets in hash table
enum { N = 1000000 };

// Hash table
node *table[N];

// Hashed values
unsigned int hash_val;

// Counter for number of words in hash table
unsigned int word_count;

// Returns true if word is in dictionary else false
bool check(const char *word)
{
    // Call hash function to hash words and get their value
    hash_val = hash(word);
    // Get access to the linked list
    node *cursor = table[hash_val];

    while (cursor != NULL)
    { // Check if words matches in the list
        if (strcasecmp(word, cursor->word) == 0)
        {
            return true;
        }
        // Move cursor to the next node
        cursor = cursor->next;
    }
    return false;
}

// Hashes word to a number
unsigned int hash(const char *word)
{
    if (word == NULL)
    {
        return 1;
    }

    // Hash function written by Dan Bernstein
    // http://www.cse.yorku.ca/~oz/hash.html
    unsigned long hash = 5381;

    int c;
    while ((c = toupper(*word++)))
    {
        hash = ((hash << 5) + hash) + c; /* hash * 33 + c */
    }
    return hash % N;
}

// Loads dictionary into memory, returning true if successful else false
bool load(const char *dictionary)
{
    char word[LENGTH];

    FILE *file = fopen(dictionary, "r");
    if (file == NULL)
    {
        return false;
    }

    while (fscanf(file, "%s", word) != EOF)
    {
        node *n = malloc(sizeof(node));

        if (n != NULL)
        {
            strcpy(n->word, word);
            hash_val = hash(word);
            n->next = table[hash_val];
            table[hash_val] = n;

            word_count++;
        }
    }
    fclose(file);
    return true;
}

// Returns number of words in dictionary if loaded else 0 if not yet loaded
unsigned int size(void)
{
    // Check if word_count is greater than zero
    if (word_count > 0)
    {
        return word_count;
    }
    return 0;
}

// Unloads dictionary from memory, returning true if successful else false
bool unload(void)
{
    node *ptr = NULL;

    for (int i = 0; i < N; i++)
    {
        ptr = table[i];

        while (ptr != NULL)
        {
            node *tmp = ptr;
            ptr = ptr->next;
            free(tmp);
        }
    }
    return true;
}
