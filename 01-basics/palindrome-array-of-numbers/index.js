// CHALLENGE: Palindrome Numbers

// INSTRUCTIONS: Given an array of integer numbers, the function will return a boolean that will determine if the given array is a palindromes.

/**
 * @param {number[]} nums
 * @return {boolean}
 */

const fn = (nums) => {
    let newNums = []
    nums.reverse()
    for(let i = 0; i < nums.length; i++){

        newNums.push(nums[i])
    }
    nums.reverse()
    if (JSON.stringify(newNums) === JSON.stringify(nums)) {
        return true;
    } else {
        return false;
    }
}

fn([1,2,3])

module.exports = fn