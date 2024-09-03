const arr = require("./index.js")

describe("Behind the scenes of arrays", () => {
    test("arr is defined", () => {
        expect(arr).toBeDefined();
    });

    test("arr[0] returns 1", () => {
        expect(arr[0]).toBe(1);
    });
});