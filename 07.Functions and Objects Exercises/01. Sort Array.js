function sortArray(arr, sortMethod) {

    function ascending(a,b) {
        return a - b

    }
    function descending (a,b) {
        return b - a

    }

    let sortingStrategies = {
        'asc': ascending,
        'desc': descending
    }

    return arr.sort(sortingStrategies[sortMethod])
}


console.log(sortArray([14, 7, 17, 6, 8], 'asc'));

