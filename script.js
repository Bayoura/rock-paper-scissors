//Greetings, warrior! Welcome to the great Tournament! You will have to withstand five rounds of fighting against mighty opponents. Don't underestimate them, for they are unpredictable foes! For each new fight you may choose a new weapon.


let userScore = 0;
let computerScore = 0;

//dom variables are indicated by the underscore 
//caching the dom:
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result p');
const lance_div = document.getElementById('l');
const sword_div = document.getElementById('s');
const axe_div = document.getElementById('a');


function main() {
    lance_div.addEventListener('click', function () {
        playRound('Lance', computerPlay);
    });

    sword_div.addEventListener('click', function () {
        playRound('Sword', computerPlay);
    });

    axe_div.addEventListener('click', function () {
        playRound('Axe', computerPlay);
    });
}

main();

function computerPlay() {
    const gameOptions = ['Lance', 'Sword', 'Axe'];
    const randomNum = Math.floor(Math.random() * gameOptions.length);
    return gameOptions[randomNum];
}

function win(user, computer) {
    userScore++;
    userScore_span.textContent = userScore;
    computerScore_span.textContent = computerScore;
    result_p.innerHTML = `The Warrior\'s ${user} beats the Opponent\'s ${computer}!<br>
    You have won this fight, warrior!`;
}

function lose(user, computer) {
    computerScore++;
    computerScore_span.textContent = computerScore;
    userScore_span.textContent = userScore;
    result_p.innerHTML = `The Warrior\'s ${user} loses to the Opponent\'s ${computer}!<br>
    You have lost this fight, warrior!`;
}

function draw(user) {
    result_p.innerHTML = `Both, Warrior and Opponent, have picked ${user}!<br>
    The fight is undecided!`;
}

function playRound(userSelection, computerSelection) {
    computerSelection = computerPlay();

    if (userSelection == computerSelection) {
        draw(userSelection);
    } else if (
        (userSelection == 'Lance' && computerSelection == 'Sword') ||
        (userSelection == 'Sword' && computerSelection == 'Axe') ||
        (userSelection == 'Axe' && computerSelection == 'Lance')
    ) {
        win(userSelection, computerSelection);
    } else if (
        (userSelection == 'Lance' && computerSelection == 'Axe') ||
        (userSelection == 'Sword' && computerSelection == 'Lance') ||
        (userSelection == 'Axe' && computerSelection == 'Sword')
    ) {
        lose(userSelection, computerSelection);    
    }

}

/*
function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(userSelection, computerSelection));
    }
}
*/
