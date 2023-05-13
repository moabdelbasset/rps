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
    computerTurn();
}

function paper() {
    var image = document.getElementById("full-img1");
    image.src = "assets/images/paper.JPG";
    image.alt = "Paper";
}

function scissors() {
    var image = document.getElementById("full-img1");
    image.src = "assets/images/scissors.JPG";
    image.alt = "Scissors";
}

function computerTurn() {
    let num1 = Math.floor(Math.random() * 2);
    console.log(num1)
    let myArray = ['rock', 'paper', 'scissors'];
    var image = document.getElementById("full-img2");
    if (myArray[num1] == 'rock') {
        image.src = "assets/images/rock.JPG";
        image.alt = "Rock";
      } else if (myArray[num1] == 'paper') {
        image.src = "assets/images/paper.JPG";
        image.alt = "Paper";
      } else {
        image.src = "assets/images/scissors.JPG";
        image.alt = "Scissors";
      }

}