let expect = require("chai").expect
let isOddOrEven = require('../02.Even or Odd')

describe("Even or Odd test", function() {
    it("should return undefined for 10", function() {
        expect(isOddOrEven(10)).to.be.undefined
    })
    it("should return odd for pesho", function() {
        expect(isOddOrEven("pesho")).to.be.equal("odd");
    })
    it("should return even for roar", function() {
        expect(isOddOrEven("roar")).to.be.equal("even")
    })
    it("should return odd for cat", function() {
        expect(isOddOrEven("cat")).to.be.equal("odd")
    })
    it("should return even for is it even", function() {
        expect(isOddOrEven("is it even")).to.be.equal("even")
    })
    it("should return odd for alabala", function() {
        expect(isOddOrEven("alabala")).to.be.equal("odd")
    })
    it("should return undefined for {}", function() {
        expect(isOddOrEven({})).to.be.undefined
    })
})

