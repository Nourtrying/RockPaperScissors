
let choices = ["R", "P", "S"];

// getting the computer choice!
function getComputerChoice(){
    return ComputerChoice = choices[Math.floor(Math.random() * choices.length)];

}


//getting the player choice!
function getPlayerChoice(){
    let answer = prompt("ROCK PAPER SCISSORS!");
    let playerChoice = answer[0].toUpperCase();
    while((choices.includes(playerChoice) === false) || (playerChoice === null)){
        // console.log("You entered an undefined character, enter R, s or P! :)");
        answer = prompt("You entered an undefined character, you can just enter R, p or S");
        playerChoice = answer[0].toUpperCase();
    }
    return playerChoice;
}




function checkwinner(Pchoice, Cchoice){
    let result;
    if(Pchoice === Cchoice){
        return result = "Tie";
    }
    else if((Pchoice === "P" && Cchoice === "R") ||
    (Pchoice === "S" && Cchoice === "P") ||
    (Pchoice === "R" && Cchoice === "S")){
        return  result = "Player";
    }
    else{
        return result = "Computer";
    }
}
console.log("LET THE GAME BEGIN!");
for(let i = 0; i < 5; i++){
    console.log(i);
    playerChoice = getPlayerChoice();
    ComputerChoice = getComputerChoice();
    console.log(playerChoice);
    console.log(ComputerChoice);
    let result = checkwinner(playerChoice, ComputerChoice);
    console.log(result);
    let T = P = C = 0;
    if(result === "Player"){
        P++;
    }
    else if(result === "Computer"){
        C++;
    } else{
        T++;
    }
    console.log("---------------------");
}

if(P > C){
    console.log("YOUUU WONNN!!! :))))");
    console.log(P);
}else{
    console.log("You lost! :/");
}

console.log("number of ties");
console.log(T);

console.log("*****************");
console.log("Refresh to play again");
