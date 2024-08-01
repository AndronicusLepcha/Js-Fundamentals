
let randomNum = parseInt((Math.random() * 10 ).toFixed(0))
console.log(randomNum)

const submit=document.getElementById('guess-number-submit-btn')
const guessVal=document.getElementById('user-entered-guess-number')
const prevGuess=document.querySelector('.previous-guesses')
const remguess=document.querySelector('.guess-remaining')
const showMessage = document.querySelector('.message-to-user')
const startOver = document.querySelector('.guess-result')
const p = document.querySelector('p span.end-start')

let noOfGuess=1
let playGame=true
if(playGame){
    submit.addEventListener('click',(event)=>{
        event.preventDefault()  // this is necessary to prevent or it will not hold the data as form submits the data
        const guess = parseInt(guessVal.value)
        validGuess(guess)
    })
}
// valid guess no
function validGuess(guess){
    if(isNaN(guess)){
        window.alert("Please enter a valid number")
    }else if(guess <= 0){
        window.alert("Please enter a guess number greater than 0")
    }else if(guess >= 11){
            window.alert("Please enter a guess number less than 11")
    }else{
        checkGuess(guess)
        if(noOfGuess > 3){
            displayGuess(guess)
            displayMessage(`Game Over: Random number = ${randomNum}`)
            endGame()
        }else{
            displayGuess(guess)
         } 
    }
}

function checkGuess(guess){
    if(guess == randomNum){
        displayMessage("You won the game")
        endGame()
    }else if(guess < randomNum){
        console.log("Number is too low ")
        displayMessage("Number is too low!")
    }else if(guess > randomNum){
        console.log("Number is too high ")
        displayMessage("Number is too high!")
    }
}
function displayGuess(guess){
    guessVal.value='' 
    prevGuess.innerHTML += `${guess} `
    noOfGuess = noOfGuess + 1 ;
    remguess.innerHTML=`${5-noOfGuess}`
}

function displayMessage(message){
    showMessage.innerHTML=`${message}`
}
function endGame(){
    submit.disabled =true
    guessVal.value=''
    guessVal.setAttribute('disabled','')
    p.classList.add('button') 
    p.innerHTML=`<h3 id="new-game">Start New Game</h3>`
    startOver.appendChild(p)
    playGame=false
    startGame()
}

function startGame(){
    const newGame=document.getElementById('new-game')
    newGame.addEventListener('click',(event)=>{
        submit.disabled = false
        guessVal.value=''
        prevGuess.innerHTML=''
        showMessage.innerHTML=''
        noOfGuess=1
        remguess.innerHTML=`${5-noOfGuess}`
        guessVal.removeAttribute('disabled','')
        startOver.removeChild(p)
        randomNum = parseInt((Math.random() * 10 + 1).toFixed(0))
        console.log(randomNum)
        playGame=true  

    })
    
}

