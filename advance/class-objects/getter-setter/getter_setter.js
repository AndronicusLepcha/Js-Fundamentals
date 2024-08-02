class User{
    constructor(username,email){
        this.username-username
        this.email=email
    }
    get username(){    // this is getter so u also need to have setter
        return this._username
    }
    set email(username){
        this._username=username
    }
    get email(){    // this is getter so u also need to have setter
        return this._email
    }
    set email(email){
        this._email=email
    }
}

const newUser = new User("Robot","robot@ai.com")
console.table([newUser.email,newUser.username])