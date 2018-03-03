let expect = require("chai").expect
let lookupChar = require('../03. Char Lookup')

describe("look up Char test", function() {
    it("should return undefined for 10", function() {
        expect(lookupChar(10)).to.be.undefined
    })
    it("should return undefined for {}", function() {
        expect(lookupChar({})).to.be.undefined
    })
    it("should return Incorrect index for pesho, 10", function() {
        expect(lookupChar('pesho',10)).to.be.equal('Incorrect index')
    })
    it("should return Incorrect index for car, -1", function() {
        expect(lookupChar('car', -1)).to.be.equal('Incorrect index')
    })
    it("should return undefined for cat, 2.5", function() {
        expect(lookupChar('cat', 2.5)).to.be.undefined
    })
    it("should return s for gosho, 2", function() {
        expect(lookupChar('gosho', 2)).to.be.equal('s')
    })
    it("should return G for gosho, 2", function() {
        expect(lookupChar('Gosho', 0)).to.be.equal('G')
    })
    it("should return undefined for '', 2", function() {
        expect(lookupChar({}, 2)).to.be.undefined
    })
})