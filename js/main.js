let score = 0;
let countHuman = 0;
let countAI = 0;

const newArray = ["rock", "paper", "scissors"];
let userChoise;
let computerSelection;
let result;
const computerChoiceDisplay = document.getElementById("computer-choice");
const playerChoiceDisplay = document.getElementById("player-choice");
const resultDisplay = document.getElementById("result");
const possibleChoises = document.querySelectorAll("button");
const scoreOf5 = document.getElementById("score");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");

const getComputerChoice = () => {
  let randomSelection = newArray[Math.floor(Math.random() * 3)];
  computerSelection = randomSelection;
  computerChoiceDisplay.innerHTML = computerSelection;
};

possibleChoises.forEach((possibleChoises) =>
  possibleChoises.addEventListener("click", (e) => {
    userChoise = e.target.id;
    playerChoiceDisplay.innerHTML = userChoise;
    getComputerChoice();
    getResult();
    setScore();
    isWinner();
  })
);

const setScore = () => {
  if (result === "You win") {
    playerScore.innerHTML = countHuman;
  }
  if (result == "👽 woin😈") {
    computerScore.innerHTML = countAI;
  }
};

const isWinner = () => {
  if (countHuman > 4 || countAI > 4) {
    const winner = document.createElement("h1");
    winner.innerHTML = result;
    const boardGame = document.getElementById("board");
    boardGame.append(winner);
    gameEnd();
  }
};

function gameEnd() {
  possibleChoises.forEach((choice) => {
    choice.disabled = true;
  });
}

const getResult = () => {
  if (userChoise === computerSelection) {
    result = "its a draw";
  } else if (userChoise === "rock" && computerSelection === "scissors") {
    (result = "You win"), countHuman++;
  } else if (userChoise === "paper" && computerSelection === "rock") {
    (result = "You win"), countHuman++;
  } else if (userChoise === "scissors" && computerSelection === "paper") {
    (result = "You win"), countHuman++;
  } else {
    (result = "👽 woin😈"), countAI++;
  }
  resultDisplay.innerHTML = result;
};
