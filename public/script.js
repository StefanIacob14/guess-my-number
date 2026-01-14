"use strict";

// Variables & Functions
// Variables
const againBtn = document.querySelector(`.again`);
const checkBtn = document.querySelector(`.check`);
const guessField = document.querySelector(`.guess`);
const scoreMsg = document.querySelector(`.score`);
const highscoreMsg = document.querySelector(`.highscore`);
const messageElem = document.querySelector(`.message`);
const numberElem = document.querySelector(`.number`);

let score = 20;

let highscore = Number(localStorage.getItem(`highscore`));
highscoreMsg.textContent = highscore;

// Functions
const displayMessage = function (message) {
  messageElem.textContent = message;
};

const guessDisplay = function (value) {
  guessField.value = value;
};

const scoreNumber = function (score) {
  scoreMsg.textContent = score;
};

const highscoreNumber = function (highscore) {
  highscoreMsg.textContent = highscore;
};

const reloadPage = function () {
  window.location.reload();
  guessDisplay("");
};

const noInput = function () {
  displayMessage(`⛔ No Number!`);
  guessDisplay("");
};

// Random Secret Number
const secretNumber = Math.trunc(Math.random() * 20 + 1);

// CHECK Button (+scenarios)
checkBtn.addEventListener(`click`, function () {
  const guess = Number(guessField.value);

  // Guess is CORRECT
  if (guess === secretNumber) {
    document.querySelector(`body`).classList.add(`bg-green-500`);
    displayMessage(`🎉 Correct Number!`);
    numberElem.textContent = secretNumber;
    numberElem.classList.add(`w-[16rem]`);
    numberElem.classList.add(`animate-bounce`);

    // HIGHSCORE
    if (score > highscore) {
      highscore = score;
      highscoreNumber(highscore);
      localStorage.setItem(`highscore`, highscore);
    }
  }

  // Guess is INCORRECT
  if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? `📈 Too High!` : `📉 Too Low!`);
      score = score - 1;
      scoreNumber(score);
    } else {
      displayMessage(`💥 You lost the game!`);
      guessDisplay("");
      scoreNumber(0);
      localStorage.removeItem(`highscore`);
      highscore = 0;
      highscoreNumber(0);
    }
  }
  // No input
  if (!guess) {
    noInput();
  }
});

// AGAIN Button
againBtn.addEventListener(`click`, reloadPage);
