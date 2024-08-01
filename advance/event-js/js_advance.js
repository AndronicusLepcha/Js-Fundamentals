document.getElementById('nationality').addEventListener('click',(e)=>{
    alert("Indian")
})

//attachEvent()

// Event Propagation
// 1. Event Bubling  ==[False in the eventListener]
// 2. Event Capturing ==[True in the eventListener ]

// Things to lear in the event 
// type,timestrap,defaultPrevented
// target,toElement,srcElement,currentTarget
// clientX,clientY,screenX,screenY
// altkey,ctrlkey,shiftkey,keycode


// document.getElementById('u-list').addEventListener('click',(e)=>{
//     alert("clicked in the ulist")
// },true)

// document.getElementById('age').addEventListener('click',(e)=>{
//     alert("age clicked")
// },true)

// document.getElementById('u-list').addEventListener('click',(e)=>{
//     alert("clicked in the ulist")
// },false)

//Prevent default

// document.getElementById('age').addEventListener('click',(e)=>{
//     alert("age clicked")
//     e.stopPropagation()
// },false)

// document.getElementById('google').addEventListener('click',(e)=>{
//     alert("google clicked")
//     e.preventDefault()
// },false)


// remove all the list in one click

document.getElementById('u-list').addEventListener('click',(e)=>{
    // console.log(e.target)
    let toRemove=e.target
    toRemove.remove()
},false)
