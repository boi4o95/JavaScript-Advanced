function ArgumentInfo() {
    let count = {}
    let sortedCount = []

    for (let i = 0; i < arguments.length; i++) {
        let arg = arguments[i]
        let argType = typeof (arg)
        console.log(argType + ': ' + arg)

        if (!count[argType]) {
            count[argType] = 1
        } else {
            count[argType]++
        }
    }

    for (let element in count) {
        sortedCount.push([element, count[element]])
    }

    sortedCount.sort((a,b) => b[1] - a[1])

    for (let i = 0; i < sortedCount.length; i++) {
        console.log(sortedCount[i][0] + ' = ' + sortedCount[i][1])
    }
}