const fn = require("./index")

describe("The input number will be verify and return true if the number is a palindrome or false if is not.", () => {

    test("the number 131 will return true", () => {
        expect(fn(131)).toBe(true)
    })

    test("the number 123 will return false", () => {
        expect(fn(123)).toBe(false)
    })

    test("the number 13731 will return true", () => {
        expect(fn(13731)).toBe(true)
    })
})