
let choices = ["ROCK", "PAPER", "SCISSORS"];

// getting the computer choice!
function getComputerChoice(){
    return ComputerChoice = choices[Math.floor(Math.random() * choices.length)];

}


//getting the player choice!
function getPlayerChoice(){
    let answer = prompt("ROCK PAPER SCISSORS!");
    let playerChoice = answer.toUpperCase();
    while((choices.includes(playerChoice) === false) || (playerChoice === null)){
        // console.log("You entered an undefined character, enter R, s or P! :)");
        answer = prompt("You entered an undefined string of characters, enter again!");
        playerChoice = answer.toUpperCase();
    }
    return playerChoice;
}




function checkwinner(Pchoice, Cchoice){
    if(Pchoice === Cchoice){
        return result = "Tie";
    }
    else if((Pchoice === "PAPER" && Cchoice === "ROCK") ||
    (Pchoice === "SCISSORS" && Cchoice === "PAPER") ||
    (Pchoice === "ROCK" && Cchoice === "SCISSORS")){
        return  `You win! ${Pchoice} beats ${Cchoice}`;
    }
    else{
        return `You lose! ${Cchoice} beats ${Pchoice}`;
    }
}


console.log("LET THE GAME BEGIN!");


for(let i = 0; i < 5; i++){
    console.log(i);
    playerChoice = getPlayerChoice();
    ComputerChoice = getComputerChoice();
    console.log(playerChoice);
    console.log(ComputerChoice);
    console.log(checkwinner(playerChoice, ComputerChoice));
}


console.log("*****************");
console.log("Refresh to play again");
