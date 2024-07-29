// const email="andro@ai.com"
const email=[]


if (email){
    console.log("got the email")
} else{
    console.log("No Email found! ")
}

// falsy values  [false , 0, -0, BinInt On, "" , NaN , undefined ]

// truthy values ["0", 'false', "false"," ", [],{}, function(){}]

const myObj = {}

if (Object.keys(myObj).length === 0) {
    console.log("Empty Object ")
}
