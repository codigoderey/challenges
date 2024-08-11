// what will be the output of this code?
// function a() {
// 	let x = 1;
// }
// function b() {
// 	console.log(x);
// }
// a(); // it will do nothing because there is no output in the function
// b(); // it will throw an error because x is not defined because is out of scope

// What will be the output of the following code?
// var j = 1;
// function c() {
// 	j = 10;
// }
// function d() {
// 	console.log(j);
// }
// c(); // it will assign the value of 10 to j
// d(); // it will print 10 because the value of j was changed in the function c and is within the scope of the function d because it is a global variable

// What will be the output of the following code?
// let i = 1;
// function e() {
// 	let i = 10;
// 	console.log(i);
// }
// function f() {
// 	console.log(i);
// }
// e(); // it will print 10 because i is defined in the function e
// f(); // it will print 1 because i is a global scope variable

// using const won't work because we are changing the value of the variable

function createCounter() {
	// function scope using let
	let counter = 0;
	return {
		increment() {
			counter++;
			return counter;
		},
		getValue() {
			return counter;
		}
	};
}

module.exports = createCounter;
