const fn = require('./index.js');

test('converts a sentence into an array of words', () => {
    expect(fn("The quick brown fox jumps over the lazy dog.")).toEqual(["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog."]);
});