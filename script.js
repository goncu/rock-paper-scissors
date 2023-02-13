const introScreen = document.querySelector(`.intro-screen`);
const gameScreen = document.querySelector(`.game-screen`);
const startButton = document.querySelector(`.btn-start`);
const roundResult = document.querySelector(`.round-result`);
const roundResultText = document.querySelector(`.round-result-text`);
const finalResult = document.querySelector(`.final-result`);
const endScreen = document.querySelector(`.end-screen`);
const okButton = document.querySelector(`.btn-ok`);
const playAgain = document.querySelector(`.btn-again`);
const player0Scoreel = document.querySelector(`.player0-score`);
const player1Scoreel = document.querySelector(`.player1-score`);
let player0Score = 0;
let player1Score = 0;
let player0Choice, player1Choice;
let roundPlayed = false; // This line is in order to make buttons non-functional after a round is played.
// Below code block is for the function of start button and initializing the game.
startButton.addEventListener(`click`, () => {
  introScreen.classList.add(`hidden`);
  gameScreen.classList.remove(`hidden`);
});
// Below code block is for game logic. For loop is for applying it to all 3 buttons.
// 0 = rock, 1 = paper, 2 = scissors
for (let i = 0; i < 3; i++) {
  document.querySelector(`.btn-${i}`).addEventListener(`click`, function () {
    if (!roundPlayed) {
      okButton.classList.remove(`hidden`); // OK button is not shown in case of a draw. This line is removing the hidden class from it.
      roundResult.classList.remove(`hidden`);
      roundPlayed = true;
      player0Choice = i;
      player1Choice = Math.trunc(Math.random() * 3);
      // Below if conditional is for deciding who wins the round.
      if (
        (player0Choice === 0 && player1Choice === 2) ||
        (player0Choice === 1 && player1Choice === 0) ||
        (player0Choice === 2 && player1Choice === 1)
      ) {
        player0Score++;
        roundResultText.textContent = `You won! You chose ${
          player0Choice === 0
            ? `rock`
            : player0Choice === 1
            ? `paper`
            : `scissors`
        } and the computer chose ${
          player1Choice === 0
            ? `rock`
            : player1Choice === 1
            ? `paper`
            : `scissors`
        }. Press OK to continue.`;
      } else if (
        (player1Choice === 0 && player0Choice === 2) ||
        (player1Choice === 1 && player0Choice === 0) ||
        (player1Choice === 2 && player0Choice === 1)
      ) {
        player1Score++;
        roundResultText.textContent = `You lost! You chose ${
          player0Choice === 0
            ? `rock`
            : player0Choice === 1
            ? `paper`
            : `scissors`
        }, but the computer chose ${
          player1Choice === 0
            ? `rock`
            : player1Choice === 1
            ? `paper`
            : `scissors`
        }. Press OK to continue.`;
      } else if (player0Choice === player1Choice) {
        roundResultText.textContent = `It's a draw! Choose again.`;
        okButton.classList.add(`hidden`);
        roundPlayed = false;
      }
      player0Scoreel.textContent = player0Score;
      player1Scoreel.textContent = player1Score;
    }
  });
}
// Below code block is for OK button. Winning condition is checked when it is clicked. Otherwise, a new round is played.
okButton.addEventListener(`click`, function () {
  if (player0Score === 5) {
    gameScreen.classList.add(`hidden`);
    roundResult.classList.add(`hidden`);
    endScreen.classList.remove(`hidden`);
    finalResult.textContent = `Congratulations! You won the game!`;
  } else if (player1Score === 5) {
    gameScreen.classList.add(`hidden`);
    roundResult.classList.add(`hidden`);
    endScreen.classList.remove(`hidden`);
    finalResult.textContent = `You lost the game!`;
  } else {
    roundPlayed = false;
    roundResult.classList.add(`hidden`);
  }
});

//Below code is for resetting the conditions and playing the game again.
playAgain.addEventListener(`click`, function () {
  player0Score = 0;
  player1Score = 0;
  roundPlayed = false;
  document.querySelector(`.player0-score`).textContent = 0;
  document.querySelector(`.player1-score`).textContent = 0;
  endScreen.classList.add(`hidden`);
  gameScreen.classList.remove(`hidden`);
});
