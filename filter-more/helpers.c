#include "helpers.h"
#include <math.h>

// Convert image to grayscale
void grayscale(int height, int width, RGBTRIPLE image[height][width])
{
    for (int i = 0; i < height; i++)
    {
        for (int j = 0; j < width; j++)
        {
            RGBTRIPLE pixel = image[i][j];

            // Calculate the average with floating-point division and round the result
            int avg = (int) round((pixel.rgbtRed + pixel.rgbtGreen + pixel.rgbtBlue) / 3.0);

            image[i][j].rgbtRed = image[i][j].rgbtGreen = image[i][j].rgbtBlue = avg;
        }
    }
}

// Reflect image horizontally
void reflect(int height, int width, RGBTRIPLE image[height][width])
{
    for (int i = 0; i < height; i++)
    {
        for (int j = 0; j < width / 2; j++)
        {
            RGBTRIPLE temp = image[i][j];
            image[i][j] = image[i][width - 1 - j];
            image[i][width - 1 - j] = temp;
        }
    }
}
// Blur image
void blur(int height, int width, RGBTRIPLE image[height][width])
{
    // Create a temporary copy of the image to avoid altering the original while blurring
    RGBTRIPLE temp[height][width];

    for (int i = 0; i < height; i++)
    {
        for (int j = 0; j < width; j++)
        {
            int totalRed = 0;
            int totalGreen = 0;
            int totalBlue = 0;

            // Count valid neighbors
            int validNeighbors = 0;

            // Iterate through the 3x3 neighborhood of the pixel
            for (int x = -1; x <= 1; x++)
            {
                for (int y = -1; y <= 1; y++)
                {
                    int neighborX = i + x;
                    int neighborY = j + y;

                    // Check if the neighbor is within the image bounds
                    if (neighborX >= 0 && neighborX < height && neighborY >= 0 && neighborY < width)
                    {
                        totalRed += image[neighborX][neighborY].rgbtRed;
                        totalGreen += image[neighborX][neighborY].rgbtGreen;
                        totalBlue += image[neighborX][neighborY].rgbtBlue;
                        validNeighbors++;
                    }
                }
            }

            // Calculate the average color values with floating-point division
            temp[i][j].rgbtRed = (int) round((float) totalRed / validNeighbors);
            temp[i][j].rgbtGreen = (int) round((float) totalGreen / validNeighbors);
            temp[i][j].rgbtBlue = (int) round((float) totalBlue / validNeighbors);
        }
    }

    // Copy the blurred image back to the original image
    for (int i = 0; i < height; i++)
    {
        for (int j = 0; j < width; j++)
        {
            image[i][j] = temp[i][j];
        }
    }
}

// Detect edges
void edges(int height, int width, RGBTRIPLE image[height][width])
{
    RGBTRIPLE temp[height][width];

    // Define the Sobel kernels for gradient calculation
    int Gx[3][3] = {{-1, 0, 1}, {-2, 0, 2}, {-1, 0, 1}};
    int Gy[3][3] = {{-1, -2, -1}, {0, 0, 0}, {1, 2, 1}};

    // Iterate through the image to calculate the gradients
    for (int i = 0; i < height; i++)
    {
        for (int j = 0; j < width; j++)
        {
            int redX = 0, greenX = 0, blueX = 0;
            int redY = 0, greenY = 0, blueY = 0;

            // Apply the Sobel operator in the x and y directions
            for (int x = -1; x <= 1; x++)
            {
                for (int y = -1; y <= 1; y++)
                {
                    int neighborX = i + x;
                    int neighborY = j + y;

                    // Check if the neighbor is within the image bounds
                    if (neighborX >= 0 && neighborX < height && neighborY >= 0 && neighborY < width)
                    {
                        redX += image[neighborX][neighborY].rgbtRed * Gx[x + 1][y + 1];
                        greenX += image[neighborX][neighborY].rgbtGreen * Gx[x + 1][y + 1];
                        blueX += image[neighborX][neighborY].rgbtBlue * Gx[x + 1][y + 1];

                        redY += image[neighborX][neighborY].rgbtRed * Gy[x + 1][y + 1];
                        greenY += image[neighborX][neighborY].rgbtGreen * Gy[x + 1][y + 1];
                        blueY += image[neighborX][neighborY].rgbtBlue * Gy[x + 1][y + 1];
                    }
                }
            }

            // Calculate the gradient magnitude
            int redGradient = round(sqrt((redX * redX) + (redY * redY)));
            int greenGradient = round(sqrt((greenX * greenX) + (greenY * greenY)));
            int blueGradient = round(sqrt((blueX * blueX) + (blueY * blueY)));

            // Ensure the values are capped between 0 and 255
            redGradient = (redGradient > 255) ? 255 : (redGradient < 0) ? 0 : redGradient;
            greenGradient = (greenGradient > 255) ? 255 : (greenGradient < 0) ? 0 : greenGradient;
            blueGradient = (blueGradient > 255) ? 255 : (blueGradient < 0) ? 0 : blueGradient;

            // Store the gradient as the new pixel value
            temp[i][j].rgbtRed = (BYTE) redGradient;
            temp[i][j].rgbtGreen = (BYTE) greenGradient;
            temp[i][j].rgbtBlue = (BYTE) blueGradient;
        }
    }

    // Copy the edge-detected image back to the original image
    for (int i = 0; i < height; i++)
    {
        for (int j = 0; j < width; j++)
        {
            image[i][j] = temp[i][j];
        }
    }
}
