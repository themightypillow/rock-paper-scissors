function computerPlay() {
  let random = Math.floor(Math.random() * 3);
  return ["rock", "paper", "scissors"][random];
}

function playRound(playerSelection, computerSelection = computerPlay()) {
  let playerMove = playerSelection.toLowerCase();
  if(playerMove === computerSelection) {
    return "You Tie!";
  }
  else if(playerMove === "rock") {
    if(computerSelection === "scissors") {
      return "You Win! Rock beats Scissors";
    }
    else {
      return "You Lose! Paper beats Rock";
    }
  }
  else if(playerMove === "paper") {
    if(computerSelection === "rock") {
      return "You Win! Paper beats Rock";
    }
    else {
      return "You Lose! Scissors beats Paper";
    }
  }
  else if(playerMove === "scissors") {
    if(computerSelection === "paper") {
      return "You Win! Scissors beats Paper";
    }
    else {
      return "You Lose! Rock beats Scissors";
    }
  }
  else {
    return "You Lose! You did not input a valid move";
  }
}

// function game() {
//   let score = [0, 0];
//   for(let i = 0; i < 5; i++) {
//     let result = playRound(prompt(`Round ${i + 1} : Enter Your Move`), computerPlay());
//     switch(result[4]) {
//       case "W":
//         score[0]++;
//         break;
//       case "L":
//         score[1]++;
//         break;
//     }
//     console.log(`Round ${i + 1}: ${result}`);
//   }
//   console.log(`Final Score! You: ${score[0]}, Computer ${score[1]}`);
//   console.log(score[0] > score[1] ? "You beat the Computer!" : "You lost to the Computer!");
// }

// game();