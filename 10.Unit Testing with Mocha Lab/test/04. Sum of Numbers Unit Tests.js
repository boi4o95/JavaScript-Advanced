let expect = require("chai").expect;
let sum = require('../04. Sum of Numbers')

describe("sum test", function() {
    it("should return 3 for [1, 2]", function() {
        expect(sum([1, 2])).to.be.equal(3);
    })
    it("should return 0 for []", function() {
        expect(sum([])).to.be.equal(0);
    })
    it("should return 1 for [1]", function() {
        expect(sum([1])).to.be.equal(1);
    })
    it("should return 3.15 for [-1, 3.15, 1]", function() {
        expect(sum([-1, 3.15, 1])).to.be.equal(3.15);
    })

})