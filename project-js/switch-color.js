const button=document.querySelectorAll('.button')
const body=document.querySelector('body')
console.log(body)
button.forEach((button)=>{
    console.log(button)
    button.addEventListener('click',(event) => {
        console.log(event)
        console.log(event.target)
        if(event.target.id){
            body.style.backgroundColor = event.target.id;
        }
        // if(event.target.id === "blue"){
        //     body.style.backgroundColor = event.target.id;
        // }
        // if(event.target.id === "yellow"){
        //     body.style.backgroundColor = event.target.id;
        // }
        // if(event.target.id === "green"){
        //     body.style.backgroundColor = event.target.id;
        // }
    })
})