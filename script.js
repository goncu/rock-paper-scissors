// function for selecting CSS class
const selectClass = function (el) {
  return document.querySelector(el);
};

// function for the text declaring who won the round.
const declaringRoundResult = function () {
  return `You ${roundWinner === 0 ? `won` : `lost`}! You chose ${
    playerChoice === 0 ? `rock` : playerChoice === 1 ? `paper` : `scissors`
  }${roundWinner === 0 ? ` and` : `, but`} the computer chose ${
    computerChoice === 0 ? `rock` : computerChoice === 1 ? `paper` : `scissors`
  }.`;
};

//Function for ending the round, checking whether winning condition is achived end preparing for new round.
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

// variables for DOM manipulation
const introScreen = selectClass(`.intro-screen`),
  gameScreen = selectClass(`.game-screen`),
  startButton = selectClass(`.btn-start`),
  roundResult = selectClass(`.round-result`),
  roundResultText = selectClass(`.round-result-text`),
  finalResult = selectClass(`.final-result`),
  endScreen = selectClass(`.end-screen`),
  playAgain = selectClass(`.btn-again`),
  playerScoreel = selectClass(`.player-score`),
  computerScoreel = selectClass(`.computer-score`);
let playerScore = 0,
  computerScore = 0,
  playerChoice,
  computerChoice,
  roundPlayed = false, // This line is in order to make buttons non-functional after a round is played.
  roundWinner;

// Below code block is for the function of start button and initializing the game.
startButton.addEventListener(`click`, () => {
  introScreen.classList.add(`hidden`);
  gameScreen.classList.remove(`hidden`);
});

// Below code block is for game logic. For loop is for applying it to all 3 buttons.
// 0 = rock, 1 = paper, 2 = scissors
for (let i = 0; i < 3; i++) {
  selectClass(`.btn-${i}`).addEventListener(`click`, function () {
    if (!roundPlayed) {
      roundResult.classList.remove(`hidden`);
      roundPlayed = true;
      playerChoice = i;
      computerChoice = Math.trunc(Math.random() * 3);
      if (
        (playerChoice === 0 && computerChoice === 2) ||
        (playerChoice === 1 && computerChoice === 0) ||
        (playerChoice === 2 && computerChoice === 1)
      ) {
        roundWinner = 0;
        playerScore++;
        roundResultText.textContent = declaringRoundResult();
        endRound();
      } else if (
        (computerChoice === 0 && playerChoice === 2) ||
        (computerChoice === 1 && playerChoice === 0) ||
        (computerChoice === 2 && playerChoice === 1)
      ) {
        roundWinner = 1;
        computerScore++;
        roundResultText.textContent = declaringRoundResult();
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
  selectClass(`.player-score`).textContent = 0;
  selectClass(`.computer-score`).textContent = 0;
  endScreen.classList.add(`hidden`);
  gameScreen.classList.remove(`hidden`);
});
