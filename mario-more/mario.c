#include <cs50.h>
#include <stdio.h>

// Function to print space
void space(int height)
{
    for (int k = height; k > 1; k--)
    {
        printf(" ");
    }
}

// Function to print hash
void hash(int row)
{
    for (int j = 0; j <= row; j++)
    {
        printf("#");
    }
}

// Function to print pyramid
void buildPyramid(int height)
{
    // Loop to add a new line
    for (int row = 0; row <= height - 1; row++)
    {
        space(height - row);
        hash(row);
        printf("  ");
        hash(row);
        printf("\n");
    }
}

int main(void)
{
    int height;

    // loop to get a value of height of the pyramid between 1 and 8
    do
    {
        height = get_int("Height: ");
    }
    while (height < 1 || height > 8);

    // Print the two pyramids
    buildPyramid(height);

    return 0;
}