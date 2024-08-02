// When the get and set was not intoduced this below was the way how it set or get the data

function User(uname,mail,id){
    this._uname=uname,
    this._mail=mail,
    this._id=id

    Object.defineProperty(this,'uname',{
        get : function(){
            return this._uname
        },
        set : function(mail){
            this.mail=mail
        }
    })

    // only the username has been set not the email and id
}

const u = new User("Robot","robot@ai.com",3443)
console.log(u.uname)