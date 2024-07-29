// Imediately Invoked Function Expressions (IIFE)
// 1. To reduce the polution of the global scope we use the IIFE

(function getConnect(){
    console.log("Connected")
})();

( ()=> (console.log(" Connection 2 "))  )();

// paramtere passing 
( (name)=> (console.log(` Connection 2 : ${name}`))  )("AWS-Robot-DB")


