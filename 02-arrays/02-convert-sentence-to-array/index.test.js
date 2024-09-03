const fn = require('./index.js');

describe("Convert a sentence into an array of words", () => {
    test("It should return an array of words in the sentence", () => {
        expect(fn("The quick brown fox jumps over the lazy dog.")).toEqual(["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog."]);
    });

    test("It should return an array of words in the sentence", () => {
        expect(fn("Nice work learning arrays.")).toEqual(["Nice", "work", "learning", "arrays."]);
    });
});