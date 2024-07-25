// Stack (Primitive ) and Heap (Non - primitive )
// If it is Primitive then you get the copy of the data.
let name="Robot"
let anotherName = name
anotherName = "Coder Robot"
console.table([anotherName,name]);

let details={
    email:'user@gamil.com',
    upi:'yabl.axis'
}

// If its heap then you will get the reference of the object.
let userTwo = details
userTwo.email="dummy@gmail.com"

console.table([details,userTwo])