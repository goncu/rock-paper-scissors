"use strict";
// starting scores

let playerScore = 0;
let computerScore = 0;

function gameRound() {
    let playerInput = getPlayerInput(); // function because I wanted to request input again if the player's input is incorrect.

    let computerInput = getComputerChoice([1, 2, 3]); // 1 is rocks, 2 is paper, 3 is scissors

    // functions for inputs

    function getPlayerInput() {
        let playerInput = prompt(`Rock, paper or scissors?`).toLowerCase();
        if (!(playerInput === 'rock' || playerInput === 'paper' || playerInput === 'scissors')) {
            playerInput = alert(`Wrong input!`);
            getPlayerInput();
        } else {
            return playerInput;
        }
    }

    function getComputerChoice(numbers) {
        return numbers[Math.floor(Math.random() * numbers.length)];
    }

    //deciding who wins the game and increasing their score accordingly

    if ((playerInput === 'rock' && computerInput === 3) || (playerInput === 'paper' && computerInput === 1) || (playerInput === 'scissors' && computerInput === 2)) {
        alert(`You win! The computer chose ${computerInput === 1 ? 'rock' : computerInput === 2 ? 'paper' : 'scissors'}.`);
        return ++playerScore;
    } else if ((computerInput === 1 && playerInput === 'scissors') || (computerInput === 2 && playerInput === 'rock') || (computerInput === 3 && playerInput === 'paper')) {
        alert(`You lose! The computer chose ${computerInput === 1 ? 'rock' : computerInput === 2 ? 'paper' : 'scissors'}.`)
        return ++computerScore;
    } else {
        alert(`It's a draw!`)
        gameRound(playerInput, computerInput);
    }
}

gameRound();
alert(`The score is:
You: ${playerScore}
Computer: ${computerScore}`);

gameRound();
alert(`The score is:
You: ${playerScore}
Computer: ${computerScore}`);

gameRound();
alert(`The score is:
You: ${playerScore}
Computer: ${computerScore}`);

gameRound();
alert(`The score is:
You: ${playerScore}
Computer: ${computerScore}`);

gameRound();
alert(`The final score is:
You: ${playerScore}
Computer: ${computerScore}
${playerScore > computerScore ? 'YOU WIN!!!' : 'YOU LOSE :('}`);

