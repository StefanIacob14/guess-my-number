"use strict";

// Functions & Variables
// Functions
const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

const guessField = function (value) {
  document.querySelector(`.guess`).value = value;
};

const scoreNumber = function (score) {
  document.querySelector(`.score`).textContent = score;
};

const highscoreNumber = function (highscore) {
  document.querySelector(`.highscore`).textContent = highscore;
};

// Variables
let score = 20;

let highscore = Number(localStorage.getItem(`highscore`));
document.querySelector(`.highscore`).textContent = highscore;

// Random Secret Number
const secretNumber = Math.trunc(Math.random() * 20 + 1);

// CHECK Button (+scenarios)
document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);

  // Guess is CORRECT
  if (guess === secretNumber) {
    document.querySelector(`.number`).textContent = secretNumber;
    document.querySelector(`body`).classList.add(`bg-green-500`);
    document.querySelector(`.number`).classList.add(`w-[16rem]`);
    document.querySelector(`.number`).classList.add(`animate-bounce`);
    displayMessage(`🎉 Correct Number!`);

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
      guessField("");
      scoreNumber(0);
      localStorage.removeItem(`highscore`);
      highscore = 0;
      highscoreNumber(0);
    }
  }
  // No input
  if (!guess) {
    displayMessage(`⛔ No Number!`);
    guessField("");
  }
});

// AGAIN Button
document.querySelector(`.again`).addEventListener(`click`, function () {
  window.location.reload();
  guessField("");
});
