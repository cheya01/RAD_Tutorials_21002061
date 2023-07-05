//defining class Rectangle
class Rectangle{
    constructor(width, height){
        this.width = width
        this.height = height
    }
    getArea(){
        return(this.width * this.height)
    }
}

//creating objects
const rec1 = new Rectangle(25, 8)
const rec2 = new Rectangle(50, 12)

console.log("Area of the rectangle 1 is "+ rec1.getArea())
console.log("Area of the rectangle 2 is "+ rec2.getArea())