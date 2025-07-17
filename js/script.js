let playroneinput = document.querySelector('.playrone')
let err = document.querySelector('.err')
let player1 = document.querySelector('.player1')
let player2 = document.querySelector('.player2')
let h2 = document.querySelector('h2')
let playertwoinput = document.querySelector('.playertwoinput')
let winnewr = document.querySelector('.winnewr')
let h1 = document.querySelector('h1')
let main_Box = document.querySelector('.main_Box')
let playernumber = document.querySelector('.playernumber')
let chance = document.querySelector('.chance')
let player3 = document.querySelector('.player3')
let playerthreeinput = document.querySelector('.playerthreeinput')
let chance2 = document.querySelector('.chance2')

let chancenumber = 0
let chancenumbe2 = 0

chance.innerHTML = chancenumber
chance2.innerHTML = chancenumber

// -------------------------------first person 

const handlebutton = () => {
  if (playroneinput.value == '') {
    err.innerHTML = 'please enter your value'

  } else if (playroneinput.value < 0 || playroneinput.value > 10) {
    err.innerHTML = '0 theke 10 er moddhe value din'

  } else {
    err.innerHTML = ''
    player1.style = 'display:none'
    player2.style = 'display: block'
    h2.innerHTML = 'player 2'
    console.log(playroneinput.value)
  }
}

