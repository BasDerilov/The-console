"use strict";

const x = parseInt(prompt("Choose range minimum"));
const y = parseInt(prompt("Choose range maximum"));

let highscore = 0;
let score = y - x;
let guess = 0;

let randomNum = Math.trunc(Math.random() * (y - x) + x) + 1;

const lowerRange = document.getElementById("x");
const upperRange = document.getElementById("y");
const messageBox = document.querySelector(".message");
const checkBtn = document.querySelector(".check");
const body = document.querySelector("body");
const secretNumber = document.querySelector(".number");
const highscoreElement = document.querySelector(".highscore");
const againBtn = document.querySelector(".again");
const scoreElement = document.querySelector(".score");

lowerRange.textContent = x;
upperRange.textContent = y;
scoreElement.textContent = score;

const handleCheck = function () {
  guess = Number(document.querySelector(".guess").value);

  if (guess === randomNum) {
    messageBox.textContent = "You Won!";
    checkBtn.removeEventListener("click", handleCheck);
    body.style.backgroundColor = "#60b347";
    secretNumber.textContent = randomNum;
    highscore = score > highscore ? score : highscore;
    highscoreElement.textContent = highscore;
    secretNumber.style.width = "30rem";
  } else if (guess < randomNum) {
    messageBox.textContent = "📈 Higher";
    score -= 1;
  } else if (guess > randomNum) {
    messageBox.textContent = "📉 Lower";
    score -= 1;
  }

  if (score === 0) {
    messageBox.textContent = "GAME OVER!";
    body.style.backgroundColor = "#ff0800";
    checkBtn.removeEventListener("click", handleCheck);
  }
  scoreElement.textContent = score;
};

const handleRestart = function () {
  checkBtn.addEventListener("click", handleCheck);
  body.style.backgroundColor = "#222";
  secretNumber.style.width = "15rem";
  secretNumber.textContent = "?";
  messageBox.textContent = "Start guessing...";

  const x = parseInt(prompt("Choose range minimum"));
  const y = parseInt(prompt("Choose range maximum"));

  randomNum = Math.trunc(Math.random() * (y - x) + x) + 1;

  score = y;

  scoreElement.textContent = score;
};

againBtn.addEventListener("click", handleRestart);

document.querySelector(".check").addEventListener("click", handleCheck);
