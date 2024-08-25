const fn = require("./index")

describe("The sum of a 1D array.", () => {

    test("Array [1,2,3,4,5]", () => {
        expect(fn([1,2,3,4,5])).toEqual([1,3,6,10,15])
    })

    test("Empty array", () => {
        expect(fn([])).toEqual([]);
    });

    test("Array with negative numbers [-1, -2, -3, -4, -5]", () => {
        expect(fn([-1, -2, -3, -4, -5])).toEqual([-1, -3, -6, -10, -15]);
    });
})