function add(num) {
    let sum = (x) =>{
        return add(num + x)
    }

    sum.valueOf = () =>{
        return num
    }

    return sum
}

console.log(add(2)(4)(5).valueOf())