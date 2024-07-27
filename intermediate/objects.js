// object singelton and object literals

// object literals 

const mysym = Symbol("MyKey1")
const myObj = {
    name:"Andronicus",
    [mysym]:"MyKey1",
    surName:"Lepha",
    age:21
}

// Accessing the data
myObj.age=90
console.table([myObj.name,myObj["name"],myObj[mysym],myObj.age])
// Object.freeze(myObj)

myObj.age=68
console.table([myObj.name,myObj["name"],myObj[mysym],myObj.age])

console.log(myObj)

// Adding function in the objects

myObj.greeting=function(){
    console.log(`hello, ${this.name}`)
}

console.log(myObj.greeting())


// Singleton Objects 

const sObject=new Object()  // singleton object


const objectExample={}  // simpleobject

sObject.age=21
sObject.name="Andro"
console.log(sObject)

// Combining Objects
const o1={
    id:1,
    name:"andro"
}

const o2={
    rollno:2,
    firstname:"Samir"
}

const combinedObject=Object.assign({},o1,o2)
console.log(combinedObject)

// Data Retrieval from Objects
const hacker={
    id:"123",
    name:"Andro",
    type:"Ethical"
}


/*  Object De-Structure */
// hacker.id || hacker[id]

console.table([hacker.id,hacker["id"]]) // Or you can use the below method

const {name}=hacker

console.table(name)