// const clock=document.getElementsByClassName("clock")
const clock=document.querySelector(".clock")
console.log(clock)

setInterval(() => {
    let date = new Date()
    // console.log(date.toLocaleTimeString())
    clock.innerHTML=`<h3>${date.toLocaleTimeString()}</h3>`
}, 1000);

setInterval()