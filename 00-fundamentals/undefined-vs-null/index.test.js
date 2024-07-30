const { fnTrue, fnFalse } = require("./index");

describe("Understanding null and undefined", () => {
	test("Should return true when comparing null and undefined", () => {
		x = null;
		y = undefined;
		expect(fnTrue(x, y)).toBe(true);
	});

	test("Should return true when comparing null and undefined", () => {
		x = null;
		y = undefined;
		expect(fnFalse(x, y)).toBe(false);
	});
});
