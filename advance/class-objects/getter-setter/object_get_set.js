const user={
    _email:"andro@ai.com",
    _id:3424,

    get email(){
        return this._email
    },
    set email(email){
        this._email=email
    }
}

// Use of factry function to create an object 

const u = Object.create(user)
console.log(u.email)