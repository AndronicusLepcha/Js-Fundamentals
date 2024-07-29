// for of loop 
const arr=[2,33,44,56,43,7]

for (const iterator of arr) {
    console.log(iterator)
}

// Map in js

const myMap=new Map()
myMap.set('IN',"India")
myMap.set('SPN',"Spain")

console.log(myMap)

for (const [key,val] of myMap) {
    console.log(`key ${key} -> ${val}`)
}

//for each loops

const subjects=["CPP","Math","Science"]
// array.forEach(element => {
//     console.log(element)
// });


// const subjects=["CPP","Math","Science"]
subjects.forEach((item,index,arr) => {
    console.log(item,index,arr)
});