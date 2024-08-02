let name="Andronicus";   // string
// console.log(name.truelength)

const myfun=function(){
    console.log("this is my fucntion")
}


/*  all the datatype will have the functionalaties of Object, as due to the prototype properties every datatype will automatically got through the Object  */

Object.prototype.forAll = function(){
    console.log("this function is for all ")
}


console.log(myfun.forAll())
console.log(name.forAll())

// Inheritence 

const teacher={
    makeVideo : true,
}

const teacherAssistant={
    isaval : true,
}

const taSupport={
    isFulltime : true,
    __proto__:teacherAssistant
}

teacherAssistant.__proto__=teacher    // prototypal inheritence [outdated]

// new approch 
Object.setPrototypeOf(taSupport,teacher)

let newString = "andknfa   "

String.prototype.truelength=function(){
    console.log(this)
    console.log(this.name)
    console.log(`True lenght is ${this.trim().length}`)
}

console.log(newString.truelength())
console.log("andrina   ".truelength());

