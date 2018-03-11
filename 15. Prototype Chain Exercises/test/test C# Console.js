let expect = require('chai').expect
const Console = require('../05. C# Console')

describe('Console tests', function () {
    it('should return string', function () {
        expect(Console.writeLine('test')).to.be.equal('test')
    })
    it('should return obj', function () {
        let obj = { name: 'Pesho'}
        expect(Console.writeLine(obj)).to.be.equal(JSON.stringify(obj))
    })
    it('should return string', function () {
        expect(Console.writeLine('{0}, {1}, {2}', 1, 2, 3)).to.be.equal('1, 2, 3')
    })
    it('should return TypeError', function () {
        expect(() => {Console.writeLine([], 1, 2)}).to.throw(TypeError)
    })
    it('should return RangeError', function () {
        expect(() => {Console.writeLine('{0}', 1, 2)}).to.throw(RangeError)
    })
    it('should return RangeError', function () {
        expect(() => {Console.writeLine('{10}', 1, 2, 4)}).to.throw(RangeError)
    })
})