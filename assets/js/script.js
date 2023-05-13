//Wait for the DOM to finish loading before running the game
//Get the button elements and add event listeners to them

document.addEventListener('DOMContentLoaded', function() {
    // Your code here will run after the DOM is fully loaded

    console.log('DOM is fully loaded');
});

/**
 * Rock function is triggered when user click on rock button that will change the image to rock image
 */
function rock() {
    var image = document.getElementById("full-img1");
    image.src = "assets/images/rock.JPG";
    image.alt = "Rock";
    playerChoice = "rock"
    computerTurn(playerChoice);
}

/**
 * Paper function is triggered when user click on rock button that will change the image to paper image
 */
function paper() {
    var image = document.getElementById("full-img1");
    image.src = "assets/images/paper.JPG";
    image.alt = "Paper";
    playerChoice = "paper"
    computerTurn(playerChoice)
}

/**
 * Scissors function is triggered when user click on rock button that will change the image to scissors image
 */
function scissors() {
    var image = document.getElementById("full-img1");
    image.src = "assets/images/scissors.JPG";
    image.alt = "Scissors";
    playerchoice = "scissors"
    computerTurn(playerChoice)
}

/**
 * computerTurn functions executes after player done selection
 */
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

/**
 * The main function that will decide which player wins and calculate the score
 */
function gamePlay(computerChoice, playerChoice) {
  let playerScore = parseInt(document.getElementById("player1").innerText);
  console.log(playerScore);
  let computerScore = parseInt(document.getElementById("computer").innerText);
  //document.getElementById("score").innerText = ++oldScore;
    if (playerChoice === computerChoice) {
        alert(`It's a tie!`);
        resetImage()
        //return "It's a tie!";
      } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
      ) {
        alert(`You win! ${playerChoice} beats ${computerChoice}.`);
        document.getElementById("player1").innerText = ++playerScore;
        resetImage()
        //return "You win! " + playerChoice + " beats " + computerChoice + ".";
      } else {
        alert (`You lose! ${computerChoice} beats ${playerChoice}.`);
        document.getElementById("computer").innerText = ++computerScore;
        resetImage()
        //return "You lose! " + computerChoice + " beats " + playerChoice + ".";
      }
}
/**
 * Reset the image function to reset the image back to the original image
 */
function resetImage() {
  var image1 = document.getElementById("full-img1");
  var image2 = document.getElementById("full-img2");
  image1.src = "assets/images/rps.JPG";
  image1.alt = "RPS";
  image2.src = "assets/images/rps.JPG";
  image1.alt = "RPS";
}