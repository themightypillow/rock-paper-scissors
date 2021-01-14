const game = {
  playerScore: 0,
  cpuScore: 0,
  round: 1,
  result: ""
};

function computerPlay() {
  let random = Math.floor(Math.random() * 3);
  return ["rock", "paper", "scissors"][random];
}

function playRound(playerSelection, computerSelection = computerPlay()) {
  if(game.round > 5) return; // game is over

  if(playerSelection === computerSelection) {
    game.result = "You Tie!";
  }
  else if(playerSelection === "rock") {
    if(computerSelection === "scissors") {
      game.result = "You Win! Rock beats Scissors";
      game.playerScore++;
    }
    else {
      game.result = "You Lose! Paper beats Rock";
      game.cpuScore++;
    }
  }
  else if(playerSelection === "paper") {
    if(computerSelection === "rock") {
      game.result = "You Win! Paper beats Rock";
      game.playerScore++;
    }
    else {
      game.result = "You Lose! Scissors beats Paper";
      game.cpuScore++;
    }
  }
  else if(playerSelection === "scissors") {
    if(computerSelection === "paper") {
      game.result = "You Win! Scissors beats Paper";
      game.playerScore++;
    }
    else {
      game.result = "You Lose! Rock beats Scissors";
      game.cpuScore++;
    }
  }
  else {
    game.result = "You Lose! You did not input a valid move";
  }
  showRoundResults();
  game.round++;
}

const movesBtns = document.querySelectorAll(".move");
const roundDiv = document.querySelector("#round");
const playerScoreLabel = document.querySelector("#player-score");
const cpuScoreLabel = document.querySelector("#cpu-score");

function showRoundResults() {
  roundDiv.textContent = `Round ${game.round}: ${game.result}`;
  playerScoreLabel.textContent = game.playerScore;
  cpuScoreLabel.textContent = game.cpuScore;
  if(game.round >= 5) endGame();
}

function endGame() {
  const player = playerScoreLabel.parentElement;
  const cpu = cpuScoreLabel.parentElement;

  const winner = document.createElement("p");
  winner.style.fontSize = "25px";
  winner.style.fontWeight = "bold";

  if(game.playerScore > game.cpuScore) {
    player.style.color = "green";
    player.style.fontWeight = "bold";
    winner.textContent = "You Win!";
  }
  else if(game.playerScore < game.cpuScore) {
    cpu.style.color = "green";
    cpu.style.fontWeight = "bold";
    winner.textContent = "Computer Wins!";
  }
  else {
    player.style.color = "gold";
    player.style.fontWeight = "bold";
    cpu.style.color = "gold";
    cpu.style.fontWeight = "bold";
    winner.textContent = "It's a Tie!";
  }
  player.parentElement.appendChild(winner);
}

movesBtns.forEach((move) => {
  move.addEventListener("click", (e) => playRound(e.target.id));
});

