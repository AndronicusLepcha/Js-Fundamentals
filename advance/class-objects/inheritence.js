class Car{
    constructor(name,engine){
        this.name=name,
        this.engine=engine
    }
    showCarDetails(){
        console.log(`car name is ${this.name} and it has ${this.engine}`)
    }
}

class BMW extends Car{
    constructor(name,engine,color,wheels){
        super(name,engine)   // thos name and enigne are accessable by this super function
        this.color=color,
        this.wheels=wheels
    }
    showDetails(){
        console.table([this.name,this.engine,this.color,this.wheels])
    }
}

const myCar=new BMW("BlackHero","v8","balck",5)
myCar.showDetails()
myCar.showCarDetails()


console.log(myCar instanceof Car)
console.log(myCar instanceof BMW)