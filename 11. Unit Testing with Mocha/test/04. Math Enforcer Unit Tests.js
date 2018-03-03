let expect = require("chai").expect
let mathEnforcer = require('../04. Math Enforcer').mathEnforcer

describe("mathEnforcer test", function () {
    describe("addFive", function () {
        it('should return undefined on addFive("2")', () => {
            expect(mathEnforcer.addFive("2")).to.equal(undefined)
        })
        it('should return 10 on addFive(5)', () => {
            expect(mathEnforcer.addFive(5)).to.equal(10)
        })
        it('should return 5 on addFive(0)', () => {
            expect(mathEnforcer.addFive(0)).to.equal(5)
        })
        it('should return 3 on addFive(-2)', () => {
            expect(mathEnforcer.addFive(-2)).to.equal(3)
        })
        it('should return 7.5 on addFive(2.5)', () => {
            expect(mathEnforcer.addFive(2.5)).to.equal(2.5 + 5)
        })

        it('should return 2.5 on addFive(-2.5)', () => {
            expect(mathEnforcer.addFive(-2.5)).to.equal(-2.5 + 5)
        })
    })
    describe ("subtractTen", function () {
        it('should return undefined on subtractTen("23")', () => {
            expect(mathEnforcer.subtractTen("23")).to.equal(undefined)
        })
        it('should return -10 on subtractTen(0)', () => {
            expect(mathEnforcer.subtractTen(0)).to.equal(-10)
        })
        it('should return 46 on subtractTen(56)', () => {
            expect(mathEnforcer.subtractTen(56)).to.equal(46)
        })
        it('should return 26.5 on subtractTen(36.5)', () => {
            expect(mathEnforcer.subtractTen(36.5)).to.equal(26.5)
        })
        it('should return -30.5 on subtractTen(-20.5)', () => {
            expect(mathEnforcer.subtractTen(-20.5)).to.equal(-30.5)
        })
     })
    describe('sum', function () {
        it('should return undefined on sum("2", 2)', () => {
            expect(mathEnforcer.sum("2", 2)).to.equal(undefined)
        })
        it('should return undefined on sum(2, "2")', () => {
            expect(mathEnforcer.sum(2, "2")).to.equal(undefined)
        })
        it('should return undefined on sum("2", "2")', () => {
            expect(mathEnforcer.sum("2", "2")).to.equal(undefined)
        })
        it('should return 5 on sum(2, 3)', () => {
            expect(mathEnforcer.sum(2, 3)).to.equal(5);
        })
        it('should return -4 on sum(-1, -3)', () => {
            expect(mathEnforcer.sum(-1, -3)).to.equal(-4)
        })
        it('should return 4 on sum(0.5, 3.5)', () => {
            expect(mathEnforcer.sum(0.5, 3.5)).to.equal(4)
        })
        it('should return 2 on sum(-1.5, 3.5)', () => {
            expect(mathEnforcer.sum(-1.5, 3.5)).to.equal(2)
        })
        it('should return 0 on sum(0, 0)', () => {
            expect(mathEnforcer.sum(0, 0)).to.equal(0)
        })
    })
})
