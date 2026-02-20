# 👾 Guess My Number

> A retro-inspired interactive game, build with JavaScript and Tailwind CSS.

!["Guess My Number" Demo](/public/guess-my-number-gameplay.gif)

## 🔗 Links

- **🔴 Live Demo:** [https://guess-my-number-project-teal.vercel.app]
- **📂 Repository:** [https://github.com/StefanIacob14/guess-my-number]

# 🧐 Overview

**Guess My Number** is a browser-based game of intuition, where the player must guess the correct secret number. Because I have wanted to make this game a little bit more engaging, I re-engineered the project to focus on **ACCESSIBILITY** and **MODERN DEVELOPMENT TOOLING** (Vite), so I have implemented the **HighScore** feature. And because I have wanted to create a seamless local multiplayer environment for this project, where players aren't fighting over the mouse, I have implemented the **DUAL-INPUT CONTROLS (Keyboard & Mouse)**.

## 🛠️ Tech Stack

- **Build Tool:** [Vite](https://vitejs.dev/) - Chosen for its lightning-fast HMR (Hot Module Replacement) and optimized build process;
- **Core:** [Vanilla JavaScript (ES6+)](https://javascript.info/) - No framework, just pure logic and DOM Manipulation;
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) - Used for rapid, utility-first styling approach, to create a clean and modern UI;
- **Markup:** [HTML5]

## ✨ Key Features

- **👥 Dual Control Support:** This game can be played by 2 players now, using Keyboard Keys.
- **🥇 "HighScore" Feature:** "Guess My Number" shows the HighScore that previous player managed to receive, increasing the competitiveness of the game.
- **🏆 Victory State:** A dedicated winning screen that triggers visual cues.
- **⚡ Instant Reset:** The game state can be re-initialized immediately, without reloading the page.

## 🧠 Technical Challenge & Solutions

**Resetting the Game:**

- _The Problem:_ Implement the "Again!" button to reset the state of the game.
- _The Solution:_ To implement the **DRY (Don't Repeat Yourself) Principle**, I have used the **"window.location.reload()"** method to automatically reload the page when a player press the button, without pressing the "CTRL + R" combination and reset the display message of the input field.

**"HighScore" Feature:**

- _The Problem:_ Implement the "HighScore" feature, in order to increase the competitiveness of the game.
- _The Solution:_ I have used the **"local.Storage"** method to save the player's score in the browser, just before the second player starts to play.

## 🚀 Getting Started Locally

Since the project uses **Vite**, the setup is slightly different than a standard HTML file:

1. **Clone the repository:**
   `git clone [https://github.com/StefanIacob14/guess-my-number]`
2. **Navigate to the folder:**
   `cd guess-my-number`
3. **Install dependencies:**
   `npm install`
4. **Run the Development Server:**
   `npm run dev`

## 🔮 Future Improvements

- **Rule Modal:** Adding a modal window where players can read the game rules.
- **Mobile Responsiveness Improvement:** Improve the mobile version, for a better playing experience.

## 👤 Contact

**Stefan-Bogdan IACOB** - [LinkedIn](https://www.linkedin.com/in/stefan-bogdan-iacob/) - 📧 Email: biacob973@gmail.com
