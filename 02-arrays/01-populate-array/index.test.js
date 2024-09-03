const populateArray = require("./index.js")

describe("Populate an array from 1 to 100", () => {
    test("populateArray function is defined", () => {
        expect(populateArray).toBeDefined();
    });

    test("populateArray function returns an array", () => {
        expect(populateArray(100)).toBeInstanceOf(Array);
    });

    test("populateArray function returns an array of length 100", () => {
        expect(populateArray(100)).toHaveLength(100);
    });

    test("populateArray function returns an array with numbers from 1 to 100", () => {
        expect(populateArray(100)).toEqual(
            Array.from({ length: 100 }, (v, i) => i + 1)
        );
    });
});