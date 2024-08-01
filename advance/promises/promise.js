const promiseOne = new Promise(function(resolve,reject){
    // Do an asyn task
    setTimeout(function(){
        console.log("Async task is completed !")
        resolve()
    },1000)
})

// promiseOne.then((data)=>{
//     console.log(data)
// })
promiseOne.then(function(){
    console.log("Promise Consumed")
})
promiseOne.catch()


// Promise in same part rather than in two diffrent part

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async2  Running ")
        resolve()
    },1000)
}).then(function(){
    console.log("Promise Completed")
})


// promise three

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("Async 3 running !")
        resolve("{'id':123 , 'age':21}")
    },1000)
})

promiseThree.then((data)=>{
    console.log(data)
})


const promiseFour = new Promise((resolve,reject)=>{
    error=false
    setTimeout(()=>{
        if(!error){
            resolve({id:'123' , password:'12djh9'})
        }else{
            reject('Error: Something went Wrong ')
        }
    },1000)
})

promiseFour
.then((user)=>{
    console.log(user)
    return user.password
})
.then((userPassword)=>{
    console.log(userPassword)
})
.catch((e)=>{
    console.log("Error:",e)
})
.finally(()=> console.log("Promise is either Resolved or Rejected"))


const promiseFive = new Promise((resolve,reject)=>{
    error=true
    setTimeout(()=>{
        if(!error){
            resolve({id:'js' , password:'12djh9'})
        }else{
            reject('Error: JS went wrong ')
        }
    },1000)
})

async function consumePromiseFive(){
    try{
        const reponse = await promiseFive
        console.log(reponse);
    }catch(error){
        console.log(error)
    }
}

consumePromiseFive()


// use async function to handle the promise

// async function getGitUserDetails(){
//     try {
//         const reponse=await fetch('https://api.github.com/users/AndronicusLepcha')
//         console.log(await reponse.json())
//     } catch (error) {
//         console.log("Unable to fetch git hub  user",error)
//     }
// }

// getGitUserDetails()

fetch('https://api.github.com/users/AndronicusLepcha')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})

