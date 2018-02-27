function solution() {
    let numA, numB, result
    return {
        init: function (selectorA, selectorB, resultSelector) {
            numA = $(selectorA)
            numB = $(selectorB)
            result = $(resultSelector)
        },
        add: function (){
            result.val(Number(numA.val()) + Number(numB.val()))
        },
        subtract: function () {
            result.val(Number(numA.val()) - Number(numB.val()))
        }
    }
}


let obj = solution()
function sum() {
    obj.init('#num1', '#num2', '#result')
    obj.add()
}
function sub() {
    obj.init('#num1', '#num2', '#result')
    obj.subtract()
}