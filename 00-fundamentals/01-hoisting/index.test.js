const { fn } = require("./index");

describe("Understanding hoisting", () => {
	test("Should return 1", () => {
		expect(fn()).toBe(1);
	});
});
