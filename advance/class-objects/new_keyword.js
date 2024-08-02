//  prototypal behaviour

/* 
function  ------- ----

String ---------------              Object ----- null   all this are an object [beacause of the prototypal behaviour]


Array ---------------

*/

function multiple(a,b){
    return a * b;
}

multiple(22,4)


function userDetails(username,score){
    this.username=username
    this.score=score
}

userDetails.prototype.increment = function(){   // injecting prototype properties
    this.score++
}

userDetails.prototype.printScore = function(){
    console.log(`score is ${this.score}`)
}


const robot=new userDetails("Robot",999)  // new will add the prototype to the function
const lisa=userDetails("Lisa",77)  // here it will not know the protoype properties

robot.increment()
robot.printScore()


// The new keyword initates the creation of the new JS object. 
// A Prototype is linked: And it is linked with the prototpye property of the constructor function this means it has access to the function that is defined on the constructor prototype 
// aLso the new is responsible to return the data back from where it has been called 