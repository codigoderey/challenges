const fn = require("./index");

describe("The input array will be verify and return true if the array is a palindrome of numbers or false if is not.", () => {
	test("an array [1,2,3] will return false", () => {
		expect(fn([1, 2, 3])).toBe(false);
	});

	test("an array [1,2,3,2,1] will return true", () => {
		expect(fn([1, 2, 3, 2, 1])).toBe(true);
	});

	test("an array [1,2,5,2,1] will return true", () => {
		expect(fn([1, 2, 5, 2, 1])).toBe(true);
	});
});
