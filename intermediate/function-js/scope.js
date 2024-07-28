let a=100
if(true){
    let a=90
    const b=90
    var data=999
    console.log("inner scope a  value: ",a)
}
console.log(data) // var does not follow scope 
console.log("global scope a  value: ",a)

function one(){
    username="Robot"
    
    function two(){
        email="robot@gmail.com"
        console.log(`Hello ${username}`) //inner function can access the outer function data 
    }
    // two() // Outer or Parent function cannot access the inner function data until the function is executed first before accessing
    // console.log(email)  
    two()
}
one()