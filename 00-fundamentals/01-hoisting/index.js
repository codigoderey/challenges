// What will be the output of the following code?
// console.log(a);
// a = 1;
// a will be hoisted to the top of the code, but it will be undefined. So, the output will be undefined.

// What will be the output of the following code?
// console.log(b);
// var b = 1;
// b will be hoisted to the top of the code, but it will be undefined. So, the output will be undefined.

// What will be the output of the following code?
// var c;
// c = 1;
// console.log(c);
// c will be hoisted to the top of the code, but it will not be undefined because is assigned a value in the next line. So, the output will be 1.

// tasks: write a function that will return a value from a defined variable, you can use either var, let or const:
// function below do not rename the function
function fn() {
	let d = 1;
	return d;
}

module.exports = { fn };
