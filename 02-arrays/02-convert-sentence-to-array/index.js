// CHALLENGE: Convert a sentence into an array of words

// INSTRUCTIONS: Write a function that takes a sentence as an argument and returns an array of words in the sentence. The sentence will always be a string and will have no punctuation. The words will be separated by a single space.

function fn(sentence){
    return sentence.split(' ')
}

console.log(fn("The quick brown fox jumps over the lazy dog.")) // ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog."]

module.exports = fn;