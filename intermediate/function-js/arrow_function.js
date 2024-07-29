const website={
    name:"Androncus",
    price:999,
    showMessage: function(){
        console.log(`${this.name} , Welcome back!`)
    }
}

website.showMessage()
website.name="Robot"
website.showMessage()

// this cannot be used inside a function.
// function anonymous(){
//     const user="Robot"
//     console.log(this.user)
// }

// const myfun = function (){
//     const user="Robot"
//     console.log(this.user)
// }

const myfun = () => {    // Arrow function 
    const user="Robot"
    console.log(this.user)
}

// arrow function with implicit return 
// const add = (num1,num2) => num1+num2

const add = (num1,num2) => ({username:"Robot"}) // Parenthesis is important when you are returning the object

console.log(add(2,4))