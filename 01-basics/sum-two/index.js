// CHALLENGE: Sum of Two Numbers

// INSTRUCTIONS: Given an array of integers, return indices of the two numbers such that they add up to a specific target.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const fn = (nums, target) => {
	let indexesArray = [];
	for (let i = 0; i < nums.length; i++) {
		for (let j = 0; j < nums.length; j++) {
			if (i != j && nums[i] + nums[j] === target) {
				indexesArray.push(i, j);
				return indexesArray;
			}
		}
	}

	return;
};

fn([1, 2, 3], 3);

module.exports = fn;
