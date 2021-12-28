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

function winner() {

	if (yourScore == 5) {
		winnerDeclaration.textContent = "You Win!";

	}
	else if (computerScore == 5) {
		winnerDeclaration.textContent = "You lose!";
	}

}

// game logic 
function playRound(computerSelection, playerSelection) {



	if (computerSelection == playerSelection) {


		results.textContent = `Draw! ${computerSelection} ties with ${playerSelection}!`;

	}
	else if (computerSelection == "rock" && playerSelection == "scissors" || computerSelection == "paper" && playerSelection == "rock" || computerSelection == "scissors" && playerSelection == "paper") {
		computerScore++;
		scoreKeeper.textContent = 'You: ' + yourScore + ' Computer: ' + computerScore;
		results.textContent = `Computer wins! ${computerSelection} beats ${playerSelection}!`;
	}
	else if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper") {
		yourScore++;
		scoreKeeper.textContent = 'You: ' + yourScore + ' Computer: ' + computerScore;
		results.textContent = `You win! ${playerSelection} beats ${computerSelection}!`;
	}
	else {
		scoreKeeper.textContent = 'You: ' + yourScore + ' Computer: ' + computerScore;
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

rock.addEventListener('click', () => {
	playRound(computerPlay(), "rock")
	winner();
});

paper.addEventListener('click', () => {
	playRound(computerPlay(), "paper")
	winner();
});


scissors.addEventListener('click', () => {
	playRound(computerPlay(), "scissors")
	winner();
});



const results = document.createElement('div');
container.appendChild(results);

const scoreKeeper = document.createElement('div');
container.appendChild(scoreKeeper);

const winnerDeclaration = document.createElement('div');
container.appendChild(winnerDeclaration)

// plays game
//game();
//countScore();

