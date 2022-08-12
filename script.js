function playerSelect() {

}
const btns = document.querySelectorAll('button');
btns.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.textContent);
    })
})

let playerChoice = window.prompt("Choose your weapon:");
let computerChoice = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    return computerChoice[Math.floor(Math.random()*3)];
}

const playerSelection = playerChoice.toLowerCase();
const computerSelection = getComputerChoice();
let playerPoint;
let computerPoint;

function playRound(playerSelection, computerSelection) {
   if (playerSelection == computerSelection) {
    return "Draw!";
   } 
   else if (playerSelection=='rock' && computerSelection=='scissors') {
    playerPoint++;
    return "You win! Rock beats Scissors";
   }
   else if (playerSelection=='scissors' && computerSelection=='paper') {
    playerPoint++;
    return "You win! Scissors beats Paper";
   }
   else if (playerSelection=='paper' && computerSelection=='rock') {
    playerPoint++;
    return "You win! Paper beats Rock";
   }
   else if (playerSelection=='scissors' && computerSelection=='rock') {
    computerPoint++;
    return "You lose! Rock beats Scissors";
   }
   else if (playerSelection=='paper' && computerSelection=='scissors') {
    computerPoint++;
    return "You lose! Scissors beats Paper";
   }
   else if (playerSelection=='rock' && computerSelection=='paper') {
    computerPoint++;
    return "You lose! Paper beats Rock";
   }
}

/*function game() {
   for (let i = 0; i < 5; i++) {
    playerPoint = i;
    computerPoint = i;
    playRound(playerSelection, computerSelection);
    if (playerPoint === 5) {
        return "You win!!";
    }
    else {
        return "Computer wins";
    }
   } 
} */