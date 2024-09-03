// CHALLENGE: What the following code will result into

// INSTRUCTIONS: As we learnt in the lecture, arrays are objects that are mapped with decoded strings as keys, although they are not visible in the console. What will the following code will throw?

let arr = [1, 2, 3, 4, 5]
console.log(arr['0'])
// a) 1 *Correct*
// b) 2
// c) 3
// d) 4
// e) 5

// Since arrays are objects, they are mapped with decoded strings as keys. So, arr['0'] will return 1. It is the same as doing arr[0] which will also return 1.

module.exports = arr;