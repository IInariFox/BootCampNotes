var getPlayerChoice = function() {
  var playerChoice = prompt("Choose rock, paper, or scissors");
  // if player choice is neither rock, paper, or scissors, ask again
  while (playerChoice !== 'rock' && playerChoice !== 'paper' && playerChoice !== 'scissors') {
    // if player cancels the prompt, we stop the while loop
    if (playerChoice === null) {
      break;
    }
    playerChoice = prompt("Invalid input! Please choose rock, paper, or scissors");
  }
  return playerChoice;
}
var getComputerChoice = function () {
  // generate a random decimal number
  var randomNum = Math.random();
  // convert the random number into rock, paper, or scissors
  if ( randomNum < 0.3333 ) {
    return "rock";
  } else if ( randomNum > 0.3333 && randomNum < 0.6666 ) {
    return "scissors";
  } else {
    return "paper";
  }
}
var getWinner = function (playerChoice, computerChoice) {
  // depending on choice of player and computer, return winner as a string
  if (computerChoice === playerChoice) {
    return "draw";
  } else if (computerChoice === "paper") {
    if (playerChoice === "scissors") {
      return "player";
    } else if (playerChoice === "rock") {
      return "computer"
    }
  } else if (computerChoice === "rock") {
    if (playerChoice === "scissors") {
      return "computer";
    } else if (playerChoice === "paper") {
      return "player"
    }
  } else if (computerChoice === "scissors") {
    if (playerChoice === "rock") {
      return "player";
    } else if (playerChoice === "paper") {
      return "computer"
    }
  }
}
var singleGame = function() {
  // get player choice by calling getPlayerChoice function
  var playerChoice = getPlayerChoice();
  // if user cancels the prompt, end the game by returning
  if (playerChoice === null) {
    return;
  }
  
  var computerChoice = getComputerChoice();
  
  // get winner
  var winner = getWinner(playerChoice, computerChoice);
  var message = "You chose " + playerChoice + ": computer chose " + computerChoice;
  if (winner === "player") {
    alert(message + "\nYou won!");
  } else if (winner === "computer") {
    alert(message + "\nYou lost!");
  } else {
    alert(message + "\nDraw");
  }
  // return winner for use in bestOfThree mode
  return winner;
}
var bestOfThree = function() {
  // create variables to store count
  var playerWinCount = 0;
  var computerWinCount = 0;
  // keep running singleGame until one side wins 2 rounds
  while (playerWinCount < 2 && computerWinCount < 2) {
    var winner = singleGame();
    if (winner === 'player') {
      playerWinCount++;
    } else if (winner === 'computer') {
      computerWinCount++;
    }
    alert('Player score: ' + playerWinCount + ' - Computer Score: ' + computerWinCount);
  }
  var message = 'Player score: ' + playerWinCount + ' - Computer Score: ' + computerWinCount;
  if (playerWinCount === 2) {
    alert(message + "\nYou won!! Nice game.");
  } else {
    alert(message + "\nComputer won. Better luck next time.");
  }
}
// start the game by asking player to choose mode
var mode = prompt("please insert 1 for single mode\n 2 for best of 3 mode .");
if (mode === '1') {
  singleGame();
} else if (mode === '2') {
  bestOfThree();
}