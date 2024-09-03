// CHALLENGE: Populate an array from 1 to 100

// INSTRUCTIONS: Given an empty array, write a for loop that will print all the numbers from 1 to 100 in the array.

// Solution 1
// function populateArray(num){
//     let arr = []

//     for(let i = 1; i <= num; i++){
//         arr.push(i)
//     }

//     return arr
// }

// Solution 2
function populateArray(num){
    let arr = []

    for(let i = 0; i < num; i++){
        arr[i] = i + 1
    }

    return arr
}

console.log(populateArray(100)) // print 1 to 100


module.exports = populateArray;