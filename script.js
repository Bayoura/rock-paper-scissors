function computerPlay() {
    const gameOptions = ['ROCK', 'PAPER', 'SCISSORS'];
    const computerSelection = Math.floor(Math.random() * gameOptions.length);
    return gameOptions[computerSelection];
}

/* function playRound(playerSelection, computerSelection) {
    const playerSelection = prompt('Type in either "Rock", "Paper" or "Scissors":');
    const computerSelection = computerPlay();
    playerSelection.toUpperCase();
    if (playerSelection === 'ROCK' && computerSelection === 'ROCK') {
        return 'Draw!';
    } else if (playerSelection === 'ROCK' && computerSelection === 'PAPER') {
        return 'You lose! Paper beats Rock!';
    } else if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {
        return 'You win! Rock beats Scissors!';
    } else {
        return 'You have to choose either "Rock", "Paper" or "Scissors"!';
    }
//error message: playRound is not defined, error type: ReferenceError
} */

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt('Type in either "Rock", "Paper" or "Scissors":', 'Rock');
    playerSelection = playerSelection.toUpperCase();

    if (playerSelection == 'ROCK' && computerSelection == 'SCISSORS') {
        return 'You won! Rock beats Scissors!';
    } else if (playerSelection == 'ROCK' && computerSelection == 'PAPER') {
        return 'You lost! Paper beats Rock!';
    } else if (playerSelection == 'ROCK' && computerSelection == 'ROCK') {
        return 'Draw! Both Rock!';   
    }

    if (playerSelection == 'PAPER' && computerSelection == 'ROCK') {
        return 'You won! Paper beats Rock!';
    } else if (playerSelection == 'PAPER' && computerSelection == 'SCISSORS') {
        return 'You lost! Scissors beat Paper!';
    } else if (playerSelection == 'PAPER' && computerSelection == 'PAPER') {
        return 'Draw! Both Paper!';   
    }

    if (playerSelection == 'SCISSORS' && computerSelection == 'ROCK') {
        return 'You lost! Rock beats Scissors!';
    } else if (playerSelection == 'SCISSORS' && computerSelection == 'PAPER') {
        return 'You won! Scissors beats Paper!';
    } else if (playerSelection == 'SCISSORS' && computerSelection == 'SCISSORS') {
        return 'Draw! Both Scissors!';   
    } else {
        return 'You have to choose either "Rock", "Paper" or "Scissors"!';
    }
}