// const list=[12,45,67,88,98,45]
// const newList = list.map((nums)=>nums+10)
// console.log(newList)

// chaining of funcitons 

const list=[12,45,67,88,98,45]
const newList = list
                .map((nums)=>nums+10)
                .map((nums)=>nums-10)
                .filter((item)=> item > 40)
console.log(newList)


// reduce function 

const addList=[1,2,3]

// const sum = addList.reduce(function(acc,currval){
//     return acc+currval
// },0)
// console.log(sum)

const sum = addList.reduce( (acc,currval) =>  acc+currval , 0)
console.log(sum)