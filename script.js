const introScreen = document.querySelector(`.intro-screen`);
const gameScreen = document.querySelector(`.game-screen`);
const startButton = document.querySelector(`.btn-start`);
const roundResult = document.querySelector(`.round-result`);
const roundResultText = document.querySelector(`.round-result-text`);
const finalResult = document.querySelector(`.final-result`);
const endScreen = document.querySelector(`.end-screen`);
const playAgain = document.querySelector(`.btn-again`);
const playerScoreel = document.querySelector(`.player-score`);
const computerScoreel = document.querySelector(`.computer-score`);
let playerScore = 0;
let computerScore = 0;
let playerChoice, computerChoice;
let roundPlayed = false; // This line is in order to make buttons non-functional after a round is played.

// Below code block is for the function of start button and initializing the game.
startButton.addEventListener(`click`, () => {
  introScreen.classList.add(`hidden`);
  gameScreen.classList.remove(`hidden`);
});

//below function is for ending the round, checking whether winning condition is achived end preparing for new round.
const endRound = function () {
  setTimeout(() => {
    if (playerScore === 5) {
      gameScreen.classList.add(`hidden`);
      roundResult.classList.add(`hidden`);
      endScreen.classList.remove(`hidden`);
      finalResult.textContent = `Congratulations! You won the game!`;
    } else if (computerScore === 5) {
      gameScreen.classList.add(`hidden`);
      roundResult.classList.add(`hidden`);
      endScreen.classList.remove(`hidden`);
      finalResult.textContent = `You lost the game!`;
    } else {
      roundPlayed = false;
      roundResult.classList.add(`hidden`);
    }
  }, 2500);
};

// Below code block is for game logic. For loop is for applying it to all 3 buttons.
// 0 = rock, 1 = paper, 2 = scissors
for (let i = 0; i < 3; i++) {
  document.querySelector(`.btn-${i}`).addEventListener(`click`, function () {
    if (!roundPlayed) {
      roundResult.classList.remove(`hidden`);
      roundPlayed = true;
      playerChoice = i;
      computerChoice = Math.trunc(Math.random() * 3);
      // Below if conditional is for deciding who wins the round.
      if (
        (playerChoice === 0 && computerChoice === 2) ||
        (playerChoice === 1 && computerChoice === 0) ||
        (playerChoice === 2 && computerChoice === 1)
      ) {
        playerScore++;
        roundResultText.textContent = `You won! You chose ${
          playerChoice === 0
            ? `rock`
            : playerChoice === 1
            ? `paper`
            : `scissors`
        } and the computer chose ${
          computerChoice === 0
            ? `rock`
            : computerChoice === 1
            ? `paper`
            : `scissors`
        }.`;
        endRound();
      } else if (
        (computerChoice === 0 && playerChoice === 2) ||
        (computerChoice === 1 && playerChoice === 0) ||
        (computerChoice === 2 && playerChoice === 1)
      ) {
        computerScore++;
        roundResultText.textContent = `You lost! You chose ${
          playerChoice === 0
            ? `rock`
            : playerChoice === 1
            ? `paper`
            : `scissors`
        }, but the computer chose ${
          computerChoice === 0
            ? `rock`
            : computerChoice === 1
            ? `paper`
            : `scissors`
        }.`;
        endRound();
      } else if (playerChoice === computerChoice) {
        roundResultText.textContent = `It's a draw! Choose again.`;
        roundPlayed = false;
      }
      playerScoreel.textContent = playerScore;
      computerScoreel.textContent = computerScore;
    }
  });
}

//Below code is for resetting the conditions and playing the game again.
playAgain.addEventListener(`click`, function () {
  playerScore = 0;
  computerScore = 0;
  roundPlayed = false;
  document.querySelector(`.player-score`).textContent = 0;
  document.querySelector(`.computer-score`).textContent = 0;
  endScreen.classList.add(`hidden`);
  gameScreen.classList.remove(`hidden`);
});
