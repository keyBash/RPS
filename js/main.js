function getComputerChoice() {
  const newArray = ["rock", "paper", "scissors"];
  let computerSelection = newArray[Math.floor(Math.random() * 3)];
  return computerSelection;
}
let playerSelection = prompt("rock,paper,scissors?");
let computerSelection = getComputerChoice();
let score = 0;

function getResult() {
  if (playerSelection === computerSelection) {
    score = 0;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    score = 1;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    score = 1;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    score = 1;
  } else {
    score = -1;
  }
  return score;
}

function getWinner() {
  let lol = getResult();
  if (score == 0) {
    return console.log(`${playerSelection} vs ${computerSelection} its a tie!`);
  } else if (score == 1) {
    return console.log(`${playerSelection} vs ${computerSelection} You win`);
  } else score == -1;
  {
    return console.log(`${playerSelection} vs ${computerSelection} You loz`);
  }
}

getWinner();
