const NUM_OF_ROUNDS = 5;
let computerScore = 0;
let playerScore = 0;
let draws = 0;

function game(){
    for(let i = 0; i < NUM_OF_ROUNDS; i++){
        computerSelection = getComputerChoice();
        playerSelection = prompt("Enter your choice","Rock, Paper, Scissor");
        console.log(playRound(playerSelection, computerSelection));
    }

    if(computerScore < playerScore)
        console.log("You Won the game!\nYour Score: " + playerScore + "\nCompuers Score: " + computerScore+ "\nDraws: " + draws);
    else if(computerScore > playerScore)
        console.log("You Lost the game!\nYour Score: " + playerScore + "\nCompuers Score: " + computerScore+ "\nDraws: " + draws);
    else
        console.log("Nobody wins!\nYour Score: " + playerScore + "\nCompuers Score: " + computerScore + "\nDraws: " + draws);
}


function getComputerChoice(){
    //Generate a random number  between 0 and 2 and associate it with the computer choice
    let random = Math.floor(Math.random() * 3);
    let computerChoice;

    switch(random){
        case 0: computerChoice = "Rock"; break;
        case 1: computerChoice = "Paper"; break;
        case 2: computerChoice = "Scissor"; break;
        default: computerChoice = "Rock";
    }

    return computerChoice;
}

function playRound(playerSelection, computerSelection){
    if(playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        draws++;
        return "It's a draw! " + playerSelection + " equals " + computerSelection;
    }

    if(playerSelection.toLowerCase() === "rock"){
        if(computerSelection.toLowerCase() === "scissor"){
            playerScore++;
            return "You Win! Rock beats Scissor";
        }
        else{
            computerScore++;
            return "You Lose! Paper beats Rock";
        }
    }

    if(playerSelection.toLowerCase() === "paper"){
        if(computerSelection.toLowerCase() === "rock"){
            playerScore++;
            return "You Win! Paper beats Rock";
        }
        else{
            computerScore++;
            return "You Lose! Scissor beats Paper";
        }
    }

    if(playerSelection.toLowerCase() === "scissor"){
        if(computerSelection.toLowerCase() === "paper"){
            playerScore++;
            return "You Win! Scissor beats Paper";
        }
        else{
            computerScore++;
            return "You Lose! Rock beats Scissor";
        }
    }
}

game();