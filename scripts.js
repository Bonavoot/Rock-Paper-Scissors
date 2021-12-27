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
// function countScore() {

// 	if (yourScore > computerScore) {
// 		console.log("You win!");
// 	} else if (computerScore > yourScore) {
// 		console.log("You lose!");
// 	} else {
// 		console.log("Draw!");
// 	}
// }

// plays game 5 times
/*function game() {
	for (let i = 0; i < rounds; i++) {
		playRound(computerPlay(), "");
	}

} */

// game logic 
function playRound(computerSelection, playerSelection) {



	if (computerSelection == playerSelection) {
		yourScore++
		computerScore++;
		results.textContent = `Draw! ${computerSelection} ties with ${playerSelection}!`;

	}
	else if (computerSelection == "rock" && playerSelection == "scissors" || computerSelection == "paper" && playerSelection == "rock" || computerSelection == "scissors" && playerSelection == "paper") {
		computerScore++;
		results.textContent = `Computer wins! ${computerSelection} beats ${playerSelection}!`;
	}
	else if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper") {
		yourScore++;
		results.textContent = `You win! ${playerSelection} beats ${computerSelection}!`;
	}
	else {
		results.textContent = "Error!";
	}

}


const container = document.querySelector('body');
const buttons = document.querySelectorAll('button');

const rock = document.createElement('button');
rock.classList.add("rock");
rock.textContent = "ROCK";
container.appendChild(rock);

const paper = document.createElement('button');
paper.classList.add("paper");
paper.textContent = "PAPER";
container.appendChild(paper);

const scissors = document.createElement('button');
scissors.classList.add("scissors");
scissors.textContent = "SCISSORS";
container.appendChild(scissors);

rock.addEventListener('click', () => playRound(computerPlay(), "rock"));
paper.addEventListener('click', () => playRound(computerPlay(), "paper"));
scissors.addEventListener('click', () => playRound(computerPlay(), "scissors"));

const results = document.createElement('div');
container.appendChild(results);






// plays game
//game();
//countScore();

