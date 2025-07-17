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

// -------------------------------secound person 

const handlesubmit = () => {
  if (!playertwoinput.value) {
    err.innerHTML = 'please enter your valueeee'

  } else if (playertwoinput.value < 0 || playertwoinput.value > 10) {
    err.innerHTML = ' 0 theke 10 '

  } else if (playroneinput.value == playertwoinput.value) {


    winnewr.style = 'display: block'
    h1.innerHTML = 'Winner Player 2'
    player2.style = 'display:none'
    h2.style = 'display:none'
    playernumber.style = 'display:none'
    main_Box.style = 'display:none'

  } else {
    chancenumber++
    chance.innerHTML = chancenumber
    console.log(chancenumber)

    if (chancenumber == 5) {
      player2.style = 'display: none'
      player3.style = 'display: block'
      h2.innerHTML = 'player 3'

    }

  }
}

// -------------------------------third person 


const handlePlayer3 = () => {
  if (!playerthreeinput.value) {
    err.innerHTML = 'Please enter your value';
  } else if (playerthreeinput.value < 0 || playerthreeinput.value > 10) {
    err.innerHTML = 'Enter a value under 10';
  } else if (playroneinput.value == playerthreeinput.value) {
    winnewr.style = 'display:block';
    h1.innerHTML = 'Winner Player 3';
    player3.style = 'display:none';
    h2.style = 'display:none';
    playernumber.style = 'display:none';
    main_Box.style = 'display:none';
  } else {
    chancenumbe2++; 
    chance2.innerHTML = chancenumbe2;

    if (chancenumbe2 == 5) {
      winnewr.style = 'display:block';
      h1.innerHTML = 'Winner Player 1';  // Player 3 ব্যর্থ হলে Player 1 জয়ী
      player3.style = 'display:none';
      h2.style = 'display:none';
      playernumber.style = 'display:none';
      main_Box.style = 'display:none';
    }
  }
};