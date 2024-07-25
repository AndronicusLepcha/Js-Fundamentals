console.log("2">2);
console.log("3">2);


console.log(null>0);
console.log(null == 0);
console.log(null < 0);

console.log(undefined>0);
console.log(undefined == 0);
console.log(undefined < 0);


console.log(null>0);
console.log(null === 0);
console.log(null < 0);

/*  SYMBOL */
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);
console.log(typeof id);

 // Non-Primitive data 

 const heroes = ["Andro","Krish","CR7"]
 console.log(heroes);

 let myObj ={
    name: 'Andro',
    age:21
 }

const fun = function(){
    console.log("Hello Worlds");
 }

 console.table([id,typeof myObj,typeof heroes, typeof fun])