const myObj={
    name:"Robot",
    course:"B_tech",
    semester:"3rd"
}

for (const key in myObj) {   // for in use the key
    // console.log(myObj[key])
}

// Array of objects 
const arrObjects =[{name:"robot",age:21},{name:"Rohan",age:90}]
arrObjects.forEach((item)=>{
    console.log(item.name)
})