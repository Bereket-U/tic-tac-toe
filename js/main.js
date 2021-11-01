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
let winner;
let message;
let xes = [];
let oes = [];

// Store the 9 elements that represent the squares on the page.

const squares = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];

// initialize the game

initialize();

function initialize() {
  // console.log(turn);
  board = document.querySelectorAll(".box");
  // console.log(board);

  message = document.getElementById("display_turn");
  message.textContent = "Click the box's to play";

  const resetBtn = document.getElementById("reset");
  // console.log(resetBtn);

  resetBtn.addEventListener("click", reset);
}

// handle players movement

handleMove();

function handleMove() {
  board.forEach(function (box) {
    // console.log(box);
    box.addEventListener("click", function (move) {
      if (box.textContent === "X" || box.textContent === "O") return;
      if (turn === "X") {
        turn = "O";
        box.textContent = turn;
        message.textContent = `Its X's turn`;
        oes.push(parseInt(move.target.id));
      } else {
        turn = "X";
        box.textContent = turn;
        message.textContent = `Its O's turn`;
        xes.push(parseInt(move.target.id));
      }
      winnerCheck(xes);
      winnerCheck(oes);
    });
  });
}

// check winning combination

winnerCheck();

function winnerCheck(idx) {
  // console.log(winningCombinations);
  winningCombinations.forEach(function (comb) {
    // console.log(xes);
    // console.log(oes);
  });
}

// reset the board

function reset() {
  board.forEach(function (box) {
    box.textContent = "";
    message.textContent = "Click the box's to play";
    turn = "";
  });
}
