// setInterval(function(){
//     console.log("Hi, robot")
//     console.log(Date.now())
// },1000)
let random=Math.floor(Math.random()*16)
const randomColor=function(){
    const hex= "0123456789ABCDEF"
    let color='#'
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color;
}

const printDate = function(){
    if(!interval){
        document.body.style.backgroundColor=randomColor()
    }
}

let interval = setInterval(printDate,1000)

document.getElementById('stop').addEventListener('click',()=>{
    clearInterval(interval)
    interval=null
})

document.getElementById('start').addEventListener('click',()=>{
    interval = setInterval(printDate,1000)
})

