#include <cs50.h>
#include <stdio.h>

int calculate(int startSize, int endSize);

int main(void)
{
    // TODO: Prompt for start size
    int startSize;
    do
    {
        startSize = get_int("Enter starting population size (>9): ");
    }
    while (startSize < 9);
    // TODO: Prompt for end size
    int endSize;
    do
    {
        endSize = get_int("Enter ending population size (>9): ");
    }
    while (endSize < startSize);
    // TODO: Calculate number of years until we reach threshold
    // To calculate the number of years required
    int years = calculate(startSize, endSize);

    // TODO: Print number of years
    printf("Years: %d\n", years);

    return 0;
}

int calculate(int startSize, int endSize)
{
    int years = 0;

    // To keep simulating population growth until it reaches the end size
    while (startSize < endSize)
    {
        int newLlamas = startSize / 3 - startSize / 4;
        startSize += newLlamas;
        years++;
    }

    return years;
}