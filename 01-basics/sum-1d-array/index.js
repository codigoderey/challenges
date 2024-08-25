// CHALLENGE: Sum of 1D Array

// INSTRUCTIONS: Given an array of numbers, the function will return the sum of all the numbers in the array index by index.

/**
 * @param {number[]}
 * @return {number[]}
**/


function fn(arrNums){

    var result = []
    
    arrNums.reduce((acc, curr, index) => {
        result[index] = acc + curr
        return result[index]
    }, 0)
    
    return result;

}

fn([1, 2, 3, 4, 5])

module.exports = fn