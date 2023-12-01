const buttons = document.querySelectorAll('button');
const resultEl = document.querySelector('#result');
const playerScoreEl = document.getElementById('user-score');
const computerScoreEl = document.getElementById('computer-score');

let playerScore = 0;
let computerScore = 0;

buttons.forEach(button => {
    button.addEventListener('click', ()=>{
       const result =  playRound(button.id, compuetrPlay());
       resultEl.textContent = result;
       playerScoreEl.textContent = playerScore;
       computerScoreEl.textContent = computerScore;
    })
})

function compuetrPlay(){
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return "It's a tie!";
    }else if(
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ){
        playerScore++;
        return "You win! "+ playerSelection + " beats " + computerSelection;
    }else{
        computerScore++;
        return "You lose! "+ computerSelection + " beats " + playerSelection;
    }
}