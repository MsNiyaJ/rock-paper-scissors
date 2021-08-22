// Coded by Shaniya Malcolm August 2021

//Counts the score each player has
let playerScore = 0;
let computerScore = 0;
    
//The computer randomly selects 'rock', 'paper', or 'scissors'
function computerPlay(){
    const computerChoices = ['Rock', 'Paper', 'Scissors'];
    let i = Math.floor(Math.random() * 3);
    let computerChoice = computerChoices[i];
    return computerChoice;
}

// Determines who is the winner of the round and increases their score
function playRound(playerSelection, computerSelection){
    console.log("You chose " + playerSelection);
    console.log("The computer chose " + computerSelection);
    
    let rock = paper = scissors = false;
    
    // Set the values true if player or computer chose rock, paper, or scissors
    if(playerSelection === 'Rock' || computerSelection === 'Rock') 
        rock = true; 
    if(playerSelection === 'Paper' || computerSelection === 'Paper') 
        paper = true;
    if(playerSelection == 'Scissors' || computerSelection === 'Scissors') 
        scissors = true;
    
    //If paper and rock were used, paper beats rock
    if(paper && rock){
        (playerSelection === 'Paper') ? playerScore += 1 : computerScore += 1;
        updateScore();
    }
    //If scissors and paper were used, scissors beats paper
    else if(scissors && paper){
        (playerSelection === 'Scissors') ? playerScore += 1 : computerScore += 1;
        updateScore();
    }
    //If rock and scissors were used, rock beats scissors
    else if(rock && scissors){
        (playerSelection === 'Rock') ? playerScore += 1 : computerScore += 1;
        updateScore();
    }
    else
        return;
}

//Changes the text content of both scores
function updateScore(){
    let pScore = document.querySelector('.playerScore');
    let cScore = document.querySelector('.computerScore');
    pScore.textContent = `Score: ${playerScore}`;
    cScore.textContent = `Score: ${computerScore}`;
}

function game(){
    document.getElementById("Rock").onclick = function() {
        playRound("Rock", computerPlay());
    };
    document.getElementById("Paper").onclick = function() {
        playRound("Paper", computerPlay());
    };
    document.getElementById("Scissors").onclick = function() {
        playRound("Scissors", computerPlay());
    };
}

//This function runs whenever the window is loaded
window.onload = function() {
    displayMessages();
    
    //After 11 seconds, remove messages, reveal elements, and start the game
    setTimeout(function() {
        removeMessages();
        revealHiddenElements();
        game();
    },11000);
}

function displayMessages(){
    const messages = document.querySelectorAll('.fade-in');
    messages.forEach(message => {
        fadeInAndOut(message);
    });
}

function removeMessages(){
    const messages = document.querySelectorAll('.fade-out');
    messages.forEach(message => {
        message.remove();
    });
}

function fadeInAndOut(h3){
    h3.style.opacity='1';    //fade the text into the window

    //When the fade in transition ends, begin the fade out transition
    h3.addEventListener('transitionend', () => {
        h3.classList.remove('fade-in');
        h3.classList.add('fade-out');
        h3.style.opacity='0'; //fade the text out of the window
    });
}

//All elements that were hidden are now visible
function revealHiddenElements(){
    const hiddenElements = document.querySelectorAll('.hide');
    hiddenElements.forEach(hiddenElement => {

        //Reveal all elements except the new game button
        if(hiddenElement.id !== 'newGame'){
            hiddenElement.classList.remove('hide');
            hiddenElement.classList.add('show');
        }
    });
}