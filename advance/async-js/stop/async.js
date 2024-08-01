const display = function(){
    console.log("Robot")
} 

// setTimeout(function(){
//     console.log("Robot")
//  },2000)

const changeText = function(){
    document.getElementById('head').innerHTML="You are hacked"
}
const changeMe=setTimeout(changeText,2000)
// clearTimeout(changeMe)  add this in an event

document.getElementById('stop').addEventListener('click',()=>{
    console.log('stop')
    clearTimeout(changeMe)
})
// setTimeout(display,2000)