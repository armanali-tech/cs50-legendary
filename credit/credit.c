#include <cs50.h>
#include <stdio.h>

// Functions Declaration
long getCreditNumber(void);
long checksum(long creditNumber);
void finalcheck(long checkSum, long creditNumber);

int main(void)
{
    long creditNumber = getCreditNumber();
    long checkSum = checksum(creditNumber);
    finalcheck(checkSum, creditNumber);
}

// Prompt user to enter the credit card number
long getCreditNumber(void)
{
    long creditNum;
    do
    {
        creditNum = get_long("Number: ");
    }
    while (creditNum <= 0);
    return creditNum;
}

// Checksum by Luhm algorithm
long checksum(long creditNumber)
{
    long sum = 0;
    long lastDigit;
    long creditCardNumber = creditNumber;

    // Luhm's algorithm Case 1
    while (creditCardNumber > 0)
    {
        lastDigit = creditCardNumber % 10;
        sum = sum + lastDigit;
        creditCardNumber = creditCardNumber / 100;
    }

    creditCardNumber = creditNumber / 10;
    long twoTimes;

    // Luhm's algorithm Case 2
    while (creditCardNumber > 0)
    {
        lastDigit = creditCardNumber % 10;
        twoTimes = 2 * lastDigit;
        sum = sum + (twoTimes % 10) + (twoTimes / 10);
        creditCardNumber = creditCardNumber / 100;
    }
    sum = sum % 10;

    // Check last digit of sum is 0 or not
    if (sum == 0)
    {
        return 1;
    }
    else
    {
        return 0;
    }
}

// Check whether the card is Visa, Amex, Mastercard or Invalid
void finalcheck(long checkSum, long creditNumber)
{
    long validCard = creditNumber;
    int length = 0;
    long divisor = 10;
    int firstDigit;
    int firstTwoDigit;

    if (checkSum == 1)
    {
        // Check length of credit card number
        while (validCard > 0)
        {
            validCard = validCard / 10;
            length++;
        }

        // Check first two digits of credit card number
        validCard = creditNumber;
        for (int i = 0; i < (length - 2); i++)
        {
            divisor = divisor * 10;
        }

        firstDigit = validCard / divisor;
        firstTwoDigit = validCard / (divisor / 10);

        // check whether card is AMEX
        if (length == 15 && (firstTwoDigit == 34 || firstTwoDigit == 37))
        {
            printf("AMEX\n");
        }
        // check whether card is MASTERCARD
        else if (length == 16 && ((firstTwoDigit > 50) && (firstTwoDigit < 56)))
        {
            printf("MASTERCARD\n");
        }
        // check whether card id VISA
        else if ((length == 13 || length == 16) && firstDigit == 4)
        {
            printf("VISA\n");
        }
        else
        {
            printf("INVALID\n");
        }
    }
    else
    {
        printf("INVALID\n");
    }
}