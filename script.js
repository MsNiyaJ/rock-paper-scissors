// Coded by Shaniya Malcolm August 2021

let winner; //Winner of the round
    
//The computer randomly selects 'rock', 'paper', or 'scissors'
function computerPlay(){
    const computerChoices = ['Rock', 'Paper', 'Scissors'];
    let i = Math.floor(Math.random() * 3);
    let computerChoice = computerChoices[i];
    return computerChoice;
}

// Determines who is the winner of the round and returns a message
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
        (playerSelection === 'Paper') ? winner = 'You' : winner = 'Computer';
        return (`${winner} Won! Paper beats Rock!`);
    }
    //If scissors and paper were used, scissors beats paper
    else if(scissors && paper){
        (playerSelection === 'Scissors') ? winner = 'You' : winner = 'Computer';
        return (`${winner} Won! Scissors beats Paper!`);
    }
    //If rock and scissors were used, rock beats scissors
    else if(rock && scissors){
        (playerSelection === 'Rock') ? winner = 'You' :  winner = 'Computer';
        return (`${winner} Won! Rock beats Scissors!`);
    }
    else if(playerSelection === computerSelection)
        return (`It\'s a tie! You both chose ${playerSelection}!`);   
    else
        return ('Something went wrong!');
}

// Makes it so only the first letter of a word is capitalized.
function changeCase(playerSelection){
    playerSelection = playerSelection.toLowerCase();
    return playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
}

//Prompts the user to enter rock, paper, or scissors until they enter a valid answer  
function validatePlayerSelection(roundNum){
    let playerSelection;
    let invalid = true;
    while(invalid){
        playerSelection = prompt("Round " + roundNum + ":\nRock , Paper, or Scissors?");
        playerSelection = changeCase(playerSelection);
        if(playerSelection === 'Rock' || 
            playerSelection === 'Paper' ||
            playerSelection === 'Scissors'){
            invalid = false;
        }
    }
    return playerSelection;
}

//Starts the game, there are five rounds in a game
function game(){
    //Counts the number of wins each player has
    let playerWins = 0;
    let computerWins = 0;

    let playerSelection;

    for(let i = 1; i < 6; i++){
        playerSelection = validatePlayerSelection(i);
    
        // Starts the round then displays who the winner is
        let msg = playRound(playerSelection, computerPlay());
        console.log(msg);
        console.log(''); 

        if(winner === "You") playerWins++;
        if(winner === "Computer") computerWins++;
    }

    // Displays who is the winner of the game and how many rounds they won
    if(playerWins > computerWins) alert(`YOU WON THE GAME! Score: ${playerWins} / 5 rounds!`);
    else if(playerWins == computerWins) alert('It was a tie! Good job!')
    else alert(`YOU LOSE! Score: ${playerWins} / 5 rounds!`);
}

window.onload = function() {
    displayMessages();
    
    //After 11 seconds, remove messages, reveal all other elements, and start the game
    setTimeout(function() {
        const messagesDiv = document.querySelector('#greeting-messages');
        messagesDiv.remove();
        revealHiddenElements();
        // game();
    },11000);
}

function displayMessages(){
    const messages = document.querySelectorAll('.fade-in');
    messages.forEach(message => {
        fadeInAndOut(message);
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