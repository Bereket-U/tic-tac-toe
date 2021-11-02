// Define the 8 possible winning combinations,
const winningCombinations = [
  // horizontal wins
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // vertical wins
  [0, 3, 6],
  [1, 4, 7],
  [5, 5, 8],
  // cross wins
  [0, 4, 8],
  [2, 4, 6],
];

// Define required variables used to track the state of the game:

let board = [];
let turn;
let message;

// initialize the game

initialize();

board = document.querySelectorAll(".box");
message = document.getElementById("display_turn");
message.textContent = "Click the box's to play";
const resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", initialize);

function initialize() {
  board.forEach(function (box) {
    box.textContent = "";
    message.textContent = "Click the box's to play";
    turn = "";
    document.getElementById("box").classList.remove("board-disable");
  });
}

board.forEach(function (box) {
  box.addEventListener("click", handleMove);

  // handle players movement

  function handleMove() {
    if (box.textContent === "X" || box.textContent === "O") return;
    if (turn === "X") {
      turn = "O";
      box.textContent = turn;
      message.textContent = `Its X's turn`;
    } else {
      turn = "X";
      box.textContent = turn;
      message.textContent = `Its O's turn`;
    }
    winnerCheck();
  }
});

// checks winner

function winnerCheck() {
  winningCombinations.forEach(function (combination) {
    let winner = combination.every(function (move) {
      return board[move].textContent == turn;
    });

    if (winner) {
      message.innerHTML = `Winner: ${turn} `;
      document.getElementById("box").classList.add("board-disable");
    }
  });
}
