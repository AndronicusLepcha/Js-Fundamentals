// The copy of an array in JS is shallow copy : it shares same references : if you change the data in the copy array the same will be reflected in the main array 
let array=[1,2,3,4,5]
let nameArray=["Andro","Lepcha"]
const myArray = new Array(1,2,3,4,5)

console.table([array,nameArray,myArray])

array.push(90)
// array.pop() 
array.unshift(1222)
array.shift() // deletes the first index data

let check = array.includes(9090)
let index = array.indexOf(5)
console.log(index)
console.log(check)
console.log(array)

// slice and splice 

const dummyArray= [0,1,2,3,4,5]
const newArray1=dummyArray.slice(0,3)
console.log(newArray1)

const newArray2=dummyArray.splice(0,3)

console.table([newArray1, newArray2])
console.log(dummyArray)

// slice return the array from start index to end index -1 
// splice deltes the array from start to end index -1 and return the deleted array || the old array list will be deleted from the range provided.


// Array concatination 
// concat is used as a function to combine two arrays and it returns a new combined array 

const goat=['CR7','Pele','Neymay']
const elite=['Messi','Pessi']

const footballers=goat.concat(elite)
console.log(footballers);

// You can also Spread operator
const newfoorballers=[...goat,...elite]
console.log(newfoorballers);

const exArray=[1,2,3,[3,4,5,6,[7,6,4]],33]

const newgoodArray=exArray.flat(Infinity)
console.log(newgoodArray)


// You can use Array.form to create an array of the Value that you pass
const newArray3=Array.from("Androncius")
console.log(newArray3)

// Array.of() || Array.isArray()