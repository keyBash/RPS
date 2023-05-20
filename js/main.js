/* let playerSelection = prompt("rock,paper,scissors?"); */
/* let computerSelection = getComputerChoice(); */
let score = 0;
let countHuman = 0;
let countAI = 0;

/* function playGame() {
  let play = getWinner();
  console.log(`👽${countAI} vs 😀 ${countHuman}`);
  if ((score = 1)) {
    ++countHuman;
  } else {
    ++countAI;
  }
} */
const newArray = ["rock", "paper", "scissors"];
let userChoise;
let computerSelection;
let result;
const computerChoiceDisplay = document.getElementById("computer-choice");
const playerChoiceDisplay = document.getElementById("player-choice");
const resultDisplay = document.getElementById("result");
const possibleChoises = document.querySelectorAll("button");
const scoreOf5 = document.getElementById("score");

const getComputerChoice = () => {
  let randomSelection = newArray[Math.floor(Math.random() * 3)];
  computerSelection = randomSelection;
  computerChoiceDisplay.innerHTML = computerSelection;
};

possibleChoises.forEach((possibleChoises) =>
  possibleChoises.addEventListener("click", (e) => {
    userChoise = e.target.id;
    playerChoiceDisplay.innerHTML = userChoise;
    getComputerChoice()
    getResult();
  })
);

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

/* function getWinner(computerSelection) {
  let lol = getResult();
  if (score == 0) {
    return console.log(`${userChoise} vs ${computerSelection} its a tie!`);
  } else if (score == 1) {
    return console.log(`${userChoise} vs ${computerSelection} You win`);
  } else score == -1;
  {
    return console.log(`${userChoise} vs ${computerSelection} You loz`);
  }
}
 */