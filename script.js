// Declare Game Stats
let player1Score = 0;
let player2Score = 0;
let player1Turn = true;

const player1ScoreBoard = document.getElementById("player1Scoreboard");
const player2ScoreBoard = document.getElementById("player2Scoreboard");
const player1Dice = document.getElementById("player1Dice");
const player2Dice = document.getElementById("player2Dice");
const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");
const winner = document.getElementById("message");
const rollBtn2 = document.getElementById("rollBtn2");

// Game Logic
rollBtn.addEventListener("click", function () {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  // Taking Turns
  // if (player1Turn) {
  player1Score += randomNumber;
  player1ScoreBoard.textContent = player1Score;
  player1Dice.textContent = randomNumber;
  player1Dice.classList.remove("active");
  player2Dice.classList.add("active");
  message.textContent = "Player 218's turn";
  if (player1Score >= 20) {
    message.textContent = "Player 456 has won! 🎉";
    reset();
  }
});

rollBtn2.addEventListener("click", function () {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  player2Score += randomNumber;
  player2ScoreBoard.textContent = player2Score;
  player2Dice.textContent = randomNumber;
  player2Dice.classList.remove("active");
  player1Dice.classList.add("active");
  message.textContent = "Player 456's turn ";
  if (player2Score >= 20) {
    message.textContent = "Player 218 has won! 🎉";
    reset();
  }
});

function reset() {
  rollBtn.style.display = "none";
  rollBtn2.style.display = "none";
  resetBtn.style.display = "block";
}
// Winner Logic
// if (player1Score >= 20) {
//   message.textContent = "Player 456 has won! 🥳";
// } else if (player2Score >= 20) {
//   message.textContent = "Player 218 has won! 🎉";
// }

player1Turn = !player1Turn;
