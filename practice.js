//Exercise 1

// function Automobile(wheels){
//     this.wheels = wheels
//     this.setColor = (color) =>{
//         this.color = color
//     }
//     this.getColor = () => {
//         return this.color
//     }
// }

// function Motorcycle(make,model,year){
//     this.make = make
//     this.model = model
//     this.year = year
// }

// Motorcycle.prototype = new Automobile(2)

// function Sedan(make,model,year){
//     this.make = make
//     this.model = model
//     this.year = year
//     this.door = 4 
// }


// Sedan.prototype = new Automobile(4)

// function Camry(){
    
// }

// Camry.prototype = new Sedan("Toyota", "Camry", 2002)

// var toyota = new Camry()//new instance

// console.log(toyota.wheels)
// console.log(toyota.door)

// toyota.year = 2010

// console.log(toyota.year)

class Automobile{
    constructor(wheels){
        this.wheels = wheels
    }
    setColor(color){
        this.color = color
    }
    getColor(){
        return this.color
    }
}

class Motorcycle extends Automobile{
    constructor(make,model,year){
        super(2)
        this.make = make
    this.model = model
    this.year = year
    this.door = 4 
    }
}

