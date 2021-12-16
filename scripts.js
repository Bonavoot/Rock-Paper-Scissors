let yourScore = 0;
let computerScore = 0;
let rounds = 5;

// randomly generates computer choice
function computerPlay() {
    let options = ["rock", "paper", "scissors"];
    let randomOption = options[Math.floor(Math.random() * options.length)];

    return randomOption;

}

// states who wins after 5 rounds
function countScore() {

    if (yourScore > computerScore) {
        console.log("You win!");
    } else if (computerScore > yourScore) {
        console.log("You lose!");
    } else {
        console.log("Draw!");
    }
}

// plays game 5 times
function game() {
    for (let i = 0; i < rounds; i++) {
        playRound(computerPlay(), "");
    }

}

// game logic 
function playRound(computerSelection, playerSelection) {

    let playerChoice = prompt("Choose Rock, Paper or Scissors", playerSelection.toLowerCase());

    if (computerSelection == playerChoice) {
        yourScore++
        computerScore++;
        console.log(`Draw! ${computerSelection} ties with ${playerChoice}!`);

    }
    else if (computerSelection == "rock" && playerChoice == "scissors" || computerSelection == "paper" && playerChoice == "rock" || computerSelection == "scissors" && playerChoice == "paper") {
        computerScore++;
        console.log(`Computer wins! ${computerSelection} beats ${playerChoice}!`);
    }
    else if (playerChoice == "rock" && computerSelection == "scissors" || playerChoice == "paper" && computerSelection == "rock" || playerChoice == "scissors" && computerSelection == "paper") {
        yourScore++;
        console.log(`You win! ${playerChoice} beats ${computerSelection}!`);
    }
    else {
        console.log("Error!");
    }

}

// plays game
game();
countScore();

