
// we can stop the iterable property in an object
const desc=Object.getOwnPropertyDescriptor(Math,"PI")
console.log(desc)

/* 
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}

*/

console.log(Math.PI)
// overide
Math.PI = 900
console.log(Math.PI)

// still you will get the   3.141592653589793
//adding the property in Object [enumerable: false, configurable: false]

const obj = Object.create(null)    // one way to create an object OR

const hacker={
    type:'Red hat',
    location : '103.45.67',

    recentHack: function(){
        console.log("CBI India hacked !")
    }
}
console.log(hacker)
console.log(Object.getOwnPropertyDescriptor(hacker,"location"))

// define own property
Object.defineProperty(hacker,"location",{
    writable: true,
    enumerable:false // this will not allow to iterate the properties 
})

hacker.location='34.45.45566.554'
console.log(hacker)


for(let[key,value] of Object.entries(hacker)){   // iterating over the object
    if(typeof value !== 'function'){
        console.log(`${key} --> ${value}`)
    }
}