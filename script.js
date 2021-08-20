function computerPlay() {
    const gameOptions = ['ROCK', 'PAPER', 'SCISSORS'];
    const computerChoice = Math.floor(Math.random() * gameOptions.length);
    return gameOptions[computerChoice];
}

let playerSelection;
let computerSelection;

/* ---- Old Version ----
function playRound(playerSelection, computerSelection) {
    playerSelection = prompt('Type in either "Rock", "Paper" or "Scissors":', 'Rock');
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerPlay();

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
*/

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    playerSelection = prompt('Type in either "Rock", "Paper" or "Scissors":', 'Rock');
    playerSelection = playerSelection.toUpperCase();
    
    if (playerSelection == computerSelection) {
        return `Draw! Both ${playerSelection}!`;
    } else if (
        (playerSelection == 'ROCK' && computerSelection == 'SCISSORS') ||
        (playerSelection == 'PAPER' && computerSelection == 'ROCK') ||
        (playerSelection == 'SCISSORS' && computerSelection == 'PAPER') 
    ) {
        return `Yes!! You won! ${playerSelection} beats ${computerSelection}!`;
    } else if (
        (playerSelection == 'ROCK' && computerSelection == 'PAPER') ||
        (playerSelection == 'PAPER' && computerSelection == 'SCISSORS') ||
        (playerSelection == 'SCISSORS' && computerSelection == 'ROCK')
    ) {
        return `Oh no! You lost... ${computerSelection} beats ${playerSelection}.`
    } else {
        return 'You have to choose either \'Rock\', \'Paper\' or \'Scissors\'!';
    }
}



function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(playerSelection, computerSelection));
    }
}