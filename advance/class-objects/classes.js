class User{
    constructor(username,email,id){
        this.username=username,
        this.email=email,
        this.id=id
    }
    encryptFunction(){
        return `${this.id}abcxlja`
    }
}

const user = new User("andro","andro@fb.com",123)
console.log(user.encryptFunction())