const decrementCount = require("./index");

describe("Understanding hoisting", () => {
	test("Should return 1", () => {
		let decrement = decrementCount(10);
		expect(decrement.decrememt()).toBe(9);
		expect(decrement.decrememt()).toBe(8);
		expect(decrement.getValue()).toBe(8);
	});
});
