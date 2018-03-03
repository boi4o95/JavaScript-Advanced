class Rectangle {
    constructor(width, height, color) {
        this.width = width
        this.height = height
        this.color = color
    }

    calcArea() {
        return this.width * this.height

    }
}

let redRec = new Rectangle(10, 5, 'red')
console.log(redRec.calcArea())