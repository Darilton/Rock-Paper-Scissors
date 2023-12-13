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
    if(playerSelection.toLowerCase() === computerSelection.toLowerCase())
        return "It's a draw! " + playerSelection + " equals " + computerSelection;

    if(playerSelection.toLowerCase() === "rock"){
        if(computerSelection.toLowerCase() === "scissor")
            return "You Win! Rock beats Scissor";
        else
            return "You Lose! Paper beats Rock";
    }

    if(playerSelection.toLowerCase() === "paper"){
        if(computerSelection.toLowerCase() === "rock")
            return "You Win! Paper beats Rock";
        else
            return "You Lose! Scissor beats Paper";
    }

    if(playerSelection.toLowerCase() === "scissor"){
        if(computerSelection.toLowerCase() === "paper")
            return "You Win! Scissor beats Paper";
        else
            return "You Lose! Rock beats Scissor";
    }
}