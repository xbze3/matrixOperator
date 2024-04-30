let matrixArray = [
    [1, -1, 1],
    [1, 2, 3],
    [1, 4, -9]
]

function printMatrix(matrix)
{
    console.log("");
    console.log("Matrix");
    for(let i = 0; i < matrix.length; i++)
    {
        console.log(matrix[i]);
    }
}

function findMinors(matrix)
{
    console.log("");
    console.log("Minors");
    for(let a = 0; a < matrix.length; a++)
    {
        for(let b = 0; b < matrix[0].length; b++)
        {
            

            for(let i = 0; i < matrix.length; i++)
            {
                for(let j = 0; j < matrix[0].length; j++)
                {
                    if(i != a && j != b)
                    {
                        console.log(matrix[i][j]);
                    }
                }
            }

            console.log("");
            
        }
    }
}

printMatrix(matrixArray);
findMinors(matrixArray);