
// This is an object literal
const obj={
    username:"Robot",
    age:21,
    location:"192.45.56.32",

    getUserDetails: function(){
        console.log(`username is ${this.username} and age is ${this.age}`)
    }
}


obj.getUserDetails()


// constructor function  : it gives you a new instance of that object 

function User(username,loginCount,isLoggedIn){
    this.username=username,
    this.loginCount=loginCount,
    this.isLoggedIn=isLoggedIn

    // return this : implicitly this is defined 
}

// const userOne=User("Andro",23,true)

// const userTwo=User("Rovot",45,false)
// console.log(userOne)


// Now in if you print the userone than the data will be overriden 
// so to remove this conflict we are uisng new keyword 

const userOne=new User("Andro",23,true)

const userTwo=new User("Rovot",45,false)
console.log(userOne)
console.log(userTwo)