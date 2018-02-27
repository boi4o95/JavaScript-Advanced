function extensibleObject() {
    let obj = {
        extend: function (template) {
            for (var key in template) {
                if (template.hasOwnProperty(key)) {
                    let element = template[key]

                    if (typeof element === 'function') {
                        obj.__proto__[key] = element
                    } else {
                        obj[key] = element
                    }
                }
            }
        }
    }

    return obj
}



let myObj = extensibleObject()
let template = {
    extensionMethod: function () {
        console.log('Pesho')
    },
    extensionProperty: 'Penka'
}
myObj.extend(template)
console.log(myObj)
console.log(myObj.__proto__)