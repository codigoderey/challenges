// CHALLENGE: Sum of 1D Array

// INSTRUCTIONS: Given an array of numbers, the function will return the sum of all the numbers in the array index by index.

/**
 * @param {number[]}
 * @return {number[]}
**/

// solution #1 using reduce
// function fn(arrNums){

//     var result = []
    
//     arrNums.reduce((acc, curr, index) => {
//         result[index] = acc + curr
//         return result[index]
//     }, 0)
    
//     return result;

// }

// solution #2 using for loop
function fn(arrNums){
    let result = []
    result[0] = arrNums[0]

    for(i = 1; i < arrNums.length; i++){
        result[i] = arrNums[i] + result[i - 1]
    }

    console.log(result)
    return result
}

fn([1, 2, 3, 4, 5])

module.exports = fn