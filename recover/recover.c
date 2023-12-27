#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[])
{
    if (argc != 2)
    {
        fprintf(stderr, "Usage: %s rawfile\n", argv[0]);
        return 1;
    }

    // Open the input file
    FILE *rawfile = fopen(argv[1], "r");
    if (rawfile == NULL)
    {
        fprintf(stderr, "Could not open %s.\n", argv[1]);
        return 2;
    }

    // Initialize variables for tracking the JPEG files
    int jpg_count = 0;
    FILE *jpg = NULL;
    unsigned char buffer[512];

    while (fread(buffer, 512, 1, rawfile) == 1)
    {
        // Check for the start of a new JPEG file
        if (buffer[0] == 0xff && buffer[1] == 0xd8 && buffer[2] == 0xff && (buffer[3] & 0xf0) == 0xe0)
        {
            // If we're already writing to a file, close it
            if (jpg != NULL)
            {
                fclose(jpg);
            }

            char filename[8];
            sprintf(filename, "%03i.jpg", jpg_count);
            jpg = fopen(filename, "w");
            jpg_count++;
        }

        // If we're writing to a file, write the current block
        if (jpg != NULL)
        {
            fwrite(buffer, 512, 1, jpg);
        }
    }

    // Close any remaining files
    if (jpg != NULL)
    {
        fclose(jpg);
    }

    // Close the input file
    fclose(rawfile);

    return 0;
}
