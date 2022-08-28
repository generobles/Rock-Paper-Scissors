const btns = document.querySelectorAll('button:not(#reset)');
const modal = document.querySelector('#modal-box');
let playerScore = document.getElementById('player-score');
let cpuScore = document.getElementById('cpu-score');
let computerChoice = ['rock', 'paper', 'scissors'];
const rockIcon = "<img src=\"images/icon-rock.svg\" alt=\"Rock\" height=\"55%\" width=\"55%\" />";
const paperIcon = "<img src=\"images/icon-paper.svg\" alt=\"Paper\" height=\"55%\" width=\"55%\" />";
const scissorsIcon = "<img src=\"images/icon-scissors.svg\" alt=\"Scissors\" height=\"55%\" width=\"55%\" />";
let playerPoint = 0;
let computerPoint = 0;
const rbtn = document.getElementById('reset');

btns.forEach((button) => {
    button.addEventListener('click', () => {
        let playerChoice = button.getAttribute('id');
        document.getElementById('round-result').innerHTML = playRound(playerChoice,getComputerChoice());
        if (playerChoice == 'rock') {
            document.getElementById('player-choice').innerHTML = rockIcon;
        }
        else if (playerChoice == 'paper') {
            document.getElementById('player-choice').innerHTML = paperIcon;
        }
        else if (playerChoice == 'scissors') {
            document.getElementById('player-choice').innerHTML = scissorsIcon;
        } 
        playerScore.innerHTML = playerPoint;
        cpuScore.innerHTML = computerPoint; 
        document.getElementById('round-result').classList.add('animate');
        setTimeout(() => {
            document.getElementById('round-result').classList.remove('animate')},
            200)
        }) 
    })


function getComputerChoice() {
    let x = computerChoice[Math.floor(Math.random()*3)];
    if (x == 'rock') {
        document.getElementById('cpu-choice').innerHTML = rockIcon;
    }
    else if (x == 'paper') {
        document.getElementById('cpu-choice').innerHTML = paperIcon;
    }
    else if (x == 'scissors') {
        document.getElementById('cpu-choice').innerHTML = scissorsIcon;
    }    
    return x;
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
                    openModal();
                    document.getElementById('game-winner').innerHTML = "Victory";
                }
                return "You win! " + capFirstLetter(playerSelection) + " beats " + capFirstLetter(computerSelection);
            
            }
   else if (playerSelection=='scissors' && computerSelection=='rock' ||
            playerSelection=='paper' && computerSelection=='scissors' ||
            playerSelection=='rock' && computerSelection=='paper') {
                computerPoint++;
                if (computerPoint == 5) {
                    openModal();
                    document.getElementById('game-winner').innerHTML = "Defeat";
                }
                return "You lose! " + capFirstLetter(computerSelection) + " beats " + capFirstLetter(playerSelection);
            }   
}

function resetGame() {
    playerPoint = 0;
    computerPoint = 0;
    playerScore.innerHTML = 0;
    cpuScore.innerHTML = 0;
    document.getElementById('game-winner').innerHTML = "";
    document.getElementById('round-result').innerHTML = "";
    document.getElementById('player-score').innerHTML = "";
    document.getElementById('cpu-score').innerHTML = "";
    document.getElementById('player-choice').innerHTML = "";
    document.getElementById('cpu-choice').innerHTML = "";
    rbtn.disabled = true;
}

rbtn.disabled = true;
rbtn.addEventListener('click', () => {
    resetGame();
    modal.close();
    document.getElementsByTagName("html")[0].style.opacity = "1";
})

function openModal() {
    modal.showModal();
    document.getElementsByTagName("html")[0].style.opacity = "0.5";
    rbtn.disabled = false;
}

