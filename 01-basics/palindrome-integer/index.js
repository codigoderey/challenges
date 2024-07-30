// CHALLENGE: Palindrome Numbers

// INSTRUCTIONS: Given an array of integer numbers, the function will return a boolean that will determine if the given array is a palindromes.

/**
 * @param {number} x
 * @return {boolean}
 */

const fn = (x) => {
    let reversedNumberArray = []
    let inputNumberArray = x.toString().split("").reverse()

    for(let i = 0; i < inputNumberArray.length; i++){
        reversedNumberArray.push(inputNumberArray[i])
    }

    inputNumberArray.reverse()
    
    if(JSON.stringify(inputNumberArray) === JSON.stringify(reversedNumberArray)){
        return true
    } else {
        return false
    }
}

fn(123)

module.exports = fn