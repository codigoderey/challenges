const fn = require("./index");

describe("Sum two array challenge", () => {
    // test case #1
    test("an array [1,2,3] with a target of 3 should return an array of [0,1]", () => {
        expect(fn([1,2,3], 3)).toEqual([0,1]);
    });

    // test case #2
    test("an array [2,4,6] with a target of 6 should return an array of [0,1]", () => {
        expect(fn([2,4,6], 6)).toEqual([0,1]);
    });

    // test case #2
    test("an array [3,3] with a target of 6 should return an array of [0,1]", () => {
        expect(fn([3,3], 6)).toEqual([0,1]);
    });
})
