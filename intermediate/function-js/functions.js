function helloRobot(){
    console.log("Hello Robot!")
}
helloRobot()

function addTwo(n1,n2){
    console.log(n1+n2)
    return n1+n2
}
const result=addTwo(1,2)
console.log(result)

function loggedIn(username){
    return `${username} just logged In.` 
}

console.log(loggedIn("Andronicus"))

// Rest Operator

function getPrices(...cost){  // ... rest parameter
    return cost
}

console.log(getPrices(12,34,56,77))


/* Objects as an Argument */ 
const myObject={
    name:"Andro",
    age:21
}

function handleObject(obj){
    return `My name is ${obj.name}. I am ${obj.age} years old.`
}

console.log(handleObject(myObject))

/* Arrays as an Argument */ 
const myArray=[1,2,3,4,5]
function handleArray(array){
    return array[1]
}
console.log(handleArray(myArray))
console.log(handleArray([1,90,34]))