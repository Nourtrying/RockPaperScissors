let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector('.score-bored')
const result = document.querySelector('.result')
const rock = document.getElementById('r')
const paper = document.getElementById('p')
const scissors = document.getElementById('s')

function getCompChoice(){
  const choices = ['r', 'p', 's'];
  const rand = Math.floor(Math.random() * 3);
  return choices[rand];
}
function win(userChoice, compChoice){
  userScore++;
  userScore_span.textContent = userScore;
  switch (userChoice + compChoice){
    case "rs":
      result.firstElementChild.textContent = "Rock covers scissors, You Win!";
      break;
    case "pr":
      result.firstElementChild.textContent = "Paper covers rock, You Win!";
      break;
    case "sp":
      result.firstElementChild.textContent = "Scissors covers paper, You Win!";
      break;
  }
  
  



}

function lose(userChoice, compChoice){
  computerScore++;
  compScore_span.textContent = computerScore;
  switch (userChoice + compChoice){
    case "rp":
      result.firstElementChild.textContent = "Rock beats paper, You lose!";
      break;
    case "ps":
      result.firstElementChild.textContent = "Paper beats scissors, You lose!";
      break;
    case "sr":
      result.firstElementChild.textContent = "Scissors beats rock, You lose!";
      break;
  }
  
}

function draw(){
  result.firstElementChild.textContent = "Tight!";
  
}

function game(userChoice){
  const compChoice = getCompChoice()
  const name = "david"
  switch (userChoice + compChoice){
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, compChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, compChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw();
      break;
  }
  

}

function main(){
  rock.addEventListener('click', function(){
    game('r');
  })

  paper.addEventListener('click', function(){
    game('p')
  })

  scissors.addEventListener('click', function(){
    game('s')
  })
}


main();