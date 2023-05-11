let arr =  ['rock','paper','scissor']




function playRound(playerSelection, computerSelection) {
    // your code here!
  
  }
  function computerSelection(arr){
        let rndArr = Math.floor(Math.random()*arr.length)
        return arr[rndArr]
}


console.log(computerSelection(arr))
 
  const playerSelection = "rock";
/*   const computerSelection = getComputerChoice(); */
  console.log(playRound(playerSelection, computerSelection(arr)));





