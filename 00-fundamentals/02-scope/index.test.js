const createCounter = require("./index");

describe("Understanding block scope", () => {
	test("Should return 1", () => {
		const counter = createCounter();
		expect(counter.increment()).toBe(1);
		expect(counter.getValue()).toBe(1);
	});
});
