
// this is the showcase of how the things work for the class inheritence and the super function to call he constructor of the another clas 
function setUserName(username){
    this.username=username
}

function createUser(username,email,id){
    // setUserName(username)   // this will not call the fucntion 
    setUserName.call(this,username)   // this will call the fucntion  and if we pass the "this" then you will get the data in your this instance only
    this.email=email
    this.id=id
}
const newUser = new createUser("andro","andronicus.leocha@keysight.com",123)

console.log(newUser)