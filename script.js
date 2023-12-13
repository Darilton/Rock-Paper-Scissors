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