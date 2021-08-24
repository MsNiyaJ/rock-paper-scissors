//Declare initial scores for each player
let playerScore = 0;
let computerScore = 0;

// Determines the winner of the round, displays a message, 
// increases their score, and checks if the game is over
function playRound(playerSelection, computerSelection){
    let message;
    let gameMsg = document.querySelector('#game-msg');

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
        if(playerSelection === 'Paper'){
            playerScore += 1;
            message = 'You win! Paper beats rock!';
        }
        else{
            computerScore += 1;
            message = 'You lose! Paper beats rock!';
        }
    }
    //If scissors and paper were used, scissors beats paper
    else if(scissors && paper){
        if(playerSelection === 'Scissors') {
            playerScore += 1;
            message = 'You win! Scissors beats paper!';
        }
        else{
            computerScore += 1;
            message = 'You lose! Scissors beats paper!'
        }
    }
    //If rock and scissors were used, rock beats scissors
    else if(rock && scissors){
        if(playerSelection === 'Rock') {
            playerScore += 1;
            message = 'You win! Rock beats scissors!';
        }
        else{
            computerScore += 1;
            message = 'You lose! Rock beats scissors!!'
        }
    }
    else
        message = "It's a tie! No points added."

    gameMsg.textContent = message;
    updateScoreBoard();
    checkForFiveWins();
}

function endGame(winner){
    //disable all rock, paper, scissor buttons
    const gameButtons = document.querySelectorAll('.choice-btn');
    
    gameButtons.forEach(button => {
        button.disabled = true;
    });

    let gameMsg = document.querySelector('#game-msg');

    //Display a message
    if(winner === 'You'){
        gameMsg.textContent = 'You enjoy the last gummy bear in triumph. You are the champion!';
    }else{
        gameMsg.textContent = 'Defeated, you watch Tim happily enjoy the last gummy bear as tears roll down your face.';
    }

    //Reveal the new game button
    const newGameBtn = document.querySelector('#newGameBtn');
    newGameBtn.classList.toggle('hide');
}

//Ends the game when a player reaches 5 points
function checkForFiveWins(){
    if(playerScore === 5)
        endGame('You');
    else if(computerScore === 5)
        endGame('Tim');
}

//Update the text in the window
function updateScoreBoard(){
    const pScore = document.querySelector('.playerScore');
    pScore.textContent = `Score: ${playerScore}`;

    const cScore = document.querySelector('.computerScore');
    cScore.textContent = `Score: ${computerScore}`;
}

//The computer randomly selects 'rock', 'paper', or 'scissors'
function computerPlay(){
    const computerChoices = ['Rock', 'Paper', 'Scissors'];
    let i = Math.floor(Math.random() * 3);      //randomly chooses a number between 0 and 2
    let computerChoice = computerChoices[i];
    return computerChoice;
}

//When a button is clicked, play a round
function game(){
    document.getElementById("Rock").onclick = function(){
        playRound("Rock", computerPlay());
    };
    document.getElementById("Paper").onclick = function(){
        playRound("Paper", computerPlay());
    };
    document.getElementById("Scissors").onclick = function(){
        playRound("Scissors", computerPlay());
    }; 

    //Reloads the page when a user clicks on the new game button
    document.getElementById("newGameBtn").onclick = function(){
        location.reload();
    }; 
}

game(); //Starts the game