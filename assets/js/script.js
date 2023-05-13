//Wait for the DOM to finish loading before running the game
//Get the button elements and add event listeners to them

document.addEventListener('DOMContentLoaded', function() {
    // Your code here will run after the DOM is fully loaded

    console.log('DOM is fully loaded');
});

function rock() {
    var image = document.getElementById("full-img1");
    image.src = "assets/images/rock.JPG";
    image.alt = "Rock";
    playerChoice = "rock"
    computerTurn(playerChoice);
}

function paper() {
    var image = document.getElementById("full-img1");
    image.src = "assets/images/paper.JPG";
    image.alt = "Paper";
    playerChoice = "paper"
    computerTurn(playerChoice)
}

function scissors() {
    var image = document.getElementById("full-img1");
    image.src = "assets/images/scissors.JPG";
    image.alt = "Scissors";
    playerchoice = "scissors"
    computerTurn(playerChoice)
}

function computerTurn(playerChoice) {
    let num1 = Math.floor(Math.random() * 2);
    console.log(num1)
    let myArray = ['rock', 'paper', 'scissors'];
    let computerChoice = ''
    var image = document.getElementById("full-img2");
    if (myArray[num1] == 'rock') {
        image.src = "assets/images/rock.JPG";
        image.alt = "Rock";
        computerChoice = 'rock';
        gamePlay(computerChoice, playerChoice)
      } else if (myArray[num1] == 'paper') {
        image.src = "assets/images/paper.JPG";
        image.alt = "Paper";
        computerChoice = 'paper';
        gamePlay(computerChoice, playerChoice)
      } else {
        image.src = "assets/images/scissors.JPG";
        image.alt = "Scissors";
        computerChoice = 'scissors';
        gamePlay(computerChoice, playerChoice)
      }

}

function gamePlay(computerChoice, playerChoice) {
    if (playerChoice === computerChoice) {
        alert(`It's a tie!`);
        //return "It's a tie!";
      } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
      ) {
        alert(`You win! ${playerChoice} beats ${computerChoice}.`);
        //return "You win! " + playerChoice + " beats " + computerChoice + ".";
      } else {
        alert (`You lose! ${computerChoice} beats ${playerChoice}.`);
        //return "You lose! " + computerChoice + " beats " + playerChoice + ".";
      }
}