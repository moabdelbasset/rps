//Wait for the DOM to finish loading before running the game
//Get the button elements and add event listeners to them

document.addEventListener('DOMContentLoaded', function () {
  // Your code here will run after the DOM is fully loaded
  // Naming the Rock, Paper, Scissors button
  let myArray = ['Rock', 'Paper', 'Scissors'];
  let gameBtns = document.getElementsByClassName('gameBtns');
  for (let i = 0; i < gameBtns.length; i++) {
    gameBtns[i].innerHTML = myArray[i];
  }
});

/**
* loadNewPage function will be triggered when a user click on New game button to start a new game
*/
function loadNewPage() {
  window.location.href = "game.html";
}

//Get rock button
let rockBtn = document.getElementById("rockBtn");
/*
If rock button exists add event listener
*/
if (rockBtn) {
  rockBtn.addEventListener("click", rock);
}


//Get paper button
let paperBtn = document.getElementById("paperBtn");
/*
If rock button exists add event listener
*/
if (paperBtn) {
  paperBtn.addEventListener("click", paper);
}

//Get Scissors button
let scissorsBtn = document.getElementById("scissorsBtn");
/*
If rock button exists add event listener
*/
if (scissorsBtn) {
  scissorsBtn.addEventListener("click", scissors);
}


/**
* Rock function is triggered when user click on rock button that will change the image to rock image
*/
function rock() {
  var image = document.getElementById("full-img1");
  image.src = "assets/images/rock.JPG";
  image.alt = "Rock";
  playerChoice = "rock";
  computerTurn(playerChoice);
}

/**
* Paper function is triggered when user click on rock button that will change the image to paper image
*/
function paper() {
  let image = document.getElementById("full-img1");
  image.src = "assets/images/paper.JPG";
  image.alt = "Paper";
  let playerChoice = "paper";
  computerTurn(playerChoice);
}

/**
* Scissors function is triggered when user click on rock button that will change the image to scissors image
*/
function scissors() {
  let image = document.getElementById("full-img1");
  image.src = "assets/images/scissors.JPG";
  image.alt = "Scissors";
  let playerChoice = "scissors";
  computerTurn(playerChoice);
}

/**
* computerTurn functions executes after player done selection
*/
function computerTurn(playerChoice) {
  var num1 = Math.floor(Math.random() * 2);
  var myArray = ['rock', 'paper', 'scissors'];
  var computerChoice = '';
  var image = document.getElementById("full-img2");
  if (myArray[num1] == 'rock') {
    image.src = "assets/images/rock.JPG";
    image.alt = "Rock";
    let computerChoice = 'rock';
    gamePlay(computerChoice, playerChoice);
  } else if (myArray[num1] == 'paper') {
    image.src = "assets/images/paper.JPG";
    image.alt = "Paper";
    let computerChoice = 'paper';
    gamePlay(computerChoice, playerChoice);
  } else {
    image.src = "assets/images/scissors.JPG";
    image.alt = "Scissors";
    let computerChoice = 'scissors';
    gamePlay(computerChoice, playerChoice);
  }

}

/**
* The main function that will decide which player wins and calculate the score
*/
function gamePlay(computerChoice, playerChoice) {
  let playerScore = parseInt(document.getElementById("player1").innerText);
  let computerScore = parseInt(document.getElementById("computer").innerText);
  if (playerChoice === computerChoice) {
    document.getElementById("score-text").innerHTML = "It's a tie!";
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    document.getElementById("score-text").innerHTML = `You win! ${playerChoice} beats ${computerChoice}.`;
    document.getElementById("player1").innerText = ++playerScore;
  } else {
    document.getElementById("score-text").innerHTML = `You lose! ${computerChoice} beats ${playerChoice}.`;
    document.getElementById("computer").innerText = ++computerScore;
  }
}
/**
* Reset the image function to reset the image back to the original image
*/
function resetImage() {
  let image1 = document.getElementById("full-img1");
  let image2 = document.getElementById("full-img2");
  image1.src = "assets/images/rps.JPG";
  image1.alt = "RPS";
  image2.src = "assets/images/rps.JPG";
  image1.alt = "RPS";
  document.getElementById("computer").innerText = 0;
  document.getElementById("player1").innerText = 0;
  document.getElementById("score-text").innerHTML = "";
}