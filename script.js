const btns = document.querySelectorAll('button:not(#reset)');
const modal = document.querySelector('#modal-box');
let playerScore = document.getElementById('player-score');
let cpuScore = document.getElementById('cpu-score');
let computerChoice = ['rock', 'paper', 'scissors'];
let playerPoint = 0;
let computerPoint = 0;
const rbtn = document.getElementById('reset');

btns.forEach((button) => {
    button.addEventListener('click', () => {
        let playerChoice = button.getAttribute('id').toLowerCase();
        document.getElementById('round-result').innerHTML = playRound(playerChoice,getComputerChoice());
        playerScore.innerHTML = playerPoint;
        cpuScore.innerHTML = computerPoint;    
    })
})

function getComputerChoice() {
    return computerChoice[Math.floor(Math.random()*3)];
}

function capFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function playRound(playerSelection, computerSelection) {
   if (playerSelection == computerSelection) {
    return "Draw!";
   } 
   else if (playerSelection=='rock' && computerSelection=='scissors' ||
            playerSelection=='scissors' && computerSelection=='paper' ||
            playerSelection=='paper' && computerSelection=='rock') {
                playerPoint++;
                if (playerPoint == 5) {
                    btns.forEach((active) => {
                        active.disabled = true;
                    })
                    modal.showModal();
                    rbtn.disabled = false;
                    document.getElementById('game-winner').innerHTML = "Victory"
                }
                return "You win! " + capFirstLetter(playerSelection) + " beats " + capFirstLetter(computerSelection);
            
            }
   else if (playerSelection=='scissors' && computerSelection=='rock' ||
            playerSelection=='paper' && computerSelection=='scissors' ||
            playerSelection=='rock' && computerSelection=='paper') {
                computerPoint++;
                if (computerPoint == 5) {
                    btns.forEach((active) => {
                        active.disabled = true;
                    })
                    modal.showModal();
                    rbtn.disabled = false;
                    document.getElementById('game-winner').innerHTML = "Defeat"
                }
                return "You lose! " + capFirstLetter(computerSelection) + " beats " + capFirstLetter(playerSelection);
            }   
}

function resetGame() {
    playerPoint = 0;
    computerPoint = 0;
    playerScore.innerHTML = 0;
    cpuScore.innerHTML = 0;
    btns.forEach((active) => {
        active.disabled = false;
    })
    document.getElementById('game-winner').innerHTML = "";
    document.getElementById('round-result').innerHTML = "";
    document.getElementById('player-score').innerHTML = "";
    document.getElementById('cpu-score').innerHTML = "";
    rbtn.disabled = true;
}

rbtn.disabled = true;
rbtn.addEventListener('click', () => {
    resetGame();
    modal.close();
})

