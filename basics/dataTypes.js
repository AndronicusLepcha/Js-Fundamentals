"use strict"; // treat the code as newer version of JS


let name="Andro";       //String
let num=12;             // Number 
let isAdmin=true;       // Boolean

let temp=null        //object
let undef;
console.table([typeof(name),typeof(num),typeof(isAdmin),typeof(temp),typeof(undef)])


// Datatype conversion 

let data="44"
let valuInNumber=Number(data)
console.log(valuInNumber)

// Number Conversion
// "33" -> 33
// "33ana" -> NaN
// "name" -> NaN
// true -> 1 
// false -> 0
let t=true
let stringData=String(t)

console.log(stringData)

// "33" -> 33 
// true -> true