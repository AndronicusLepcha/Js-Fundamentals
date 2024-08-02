class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`User is ${this.username}`)
    }

    static createId(){   // static does not give access to the object of this class
        return `123`
    }
}

const user=new User("Root")
// const id=user.createId()
// console.log(id)


class people extends User{
    constructor(username,mail){
        super(username)
        this.mai=mail
    }
}

const tribal = new people("Afican","africal@fg.com")
console.log(tribal)
tribal.logMe()
console.log(tribal.createId())