// we initialize a variable without a value, it will be undefined
let x;
console.log(x);
console.log(typeof x);

// we can also assign null to a variable which means is an empty value, but it is an object
x = null;
console.log(x);
console.log(typeof x);

// tasks: write two functions:
// 1. a function that compare null and undefine and return true
// 2. a function that compare null and undefine and return false

function fnTrue(x, y) {
	return x == y;
}

function fnFalse(x, y) {
	return x === y;
}

// null and undefined will return true if compared with ==, but false if compared with ===. This is because == will compare the value, but === will compare the value and the type.

module.exports = { fnTrue, fnFalse };
