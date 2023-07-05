class Dog{
    constructor(breed, age, color){
        //initializing variables
        this.breed = breed;
        this.age = age;
        this.color = color;
    }
    //methods
    Eat(){
        return(this.breed + " is eating")
    }
    Sleep(){
        return(this.breed + " is sleeping")
    }
    Sit(){
        return(this.breed + " is sitting")
    }
    Run(){
        return(this.breed + " is running")
    }
}

//creating objects
const pet1 = new Dog("Pug", 3, "black")
const pet2 = new Dog("Boxer", 2, "white")
const pet3 = new Dog("Poodle", 1, "brown")

//one property and one method from pet1
console.log(pet1.breed)
console.log(pet1.Eat())
console.log("")
//one property and one method from pet2
console.log(pet2.age)
console.log(pet2.Run())
console.log("")
//one property and one method from pet3
console.log(pet3.color)
console.log(pet3.Sleep())

