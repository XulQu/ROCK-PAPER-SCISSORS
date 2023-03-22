let playerSelection = '';
let playerScore = 0;
let computerScore = 0;

function playRound() {
  let rockOpt = ['Rock', 'Paper', 'Scissors']
  computerString = rockOpt[(Math.floor(Math.random() * 3))];
  computerSelection = computerString.toString();

  if (computerSelection.toLowerCase() == playerSelection) {
    console.log(`It's a DRAW, your score is ${++playerScore} computer score is ${++computerScore} out of 5`);
  } else if (computerSelection == 'Rock' && playerSelection == 'paper') {
    console.log(`You WIN, Paper covers Rock, your score is ${++playerScore} computer score is ${computerScore}, best out of 5`);
  } else if (computerSelection == 'Paper' && playerSelection == 'scissors') {
    console.log(`You WIN, Scissors cuts Paper, your score is ${++playerScore} computer score is ${computerScore}, best out of 5`);
  } else if (computerSelection == 'Scissors' && playerSelection == 'rock') {
    console.log(`You WIN, Rock beats scissors, your score is ${++playerScore} computer score is ${computerScore}, best out of 5`);
  } else if (computerSelection == 'Rock' && playerSelection == 'scissors') {
    console.log(`You LOSE, Rock beats Scissors, your score is ${playerScore} computers score is ${++computerScore}, best out of 5`);
  } else if (computerSelection == 'Paper' && playerSelection == 'rock') {
    console.log(`You LOSE, Paper covers Rock, your score is ${playerScore} computer score is ${++computerScore}, best out of 5`);
  } else if (computerSelection == 'Scissors' && playerSelection == 'paper') {
    console.log(`You LOSE, Scissors cuts Paper, your score is ${playerScore} computers score is ${++computerScore}, best out of 5`);
  }
}

for (i = 1; i < 5; i++) {
  let playerPrompt = prompt('Rock, Paper or Scissors');
  playerSelection = playerPrompt.trim().toLowerCase();

  playRound();


  if (playerScore == 3 || computerScore == 3) {
    console.log(`Game over! Final score: You ${playerScore} - ${computerScore} Computer`);
    break;
  }
}




  // function playRound(){

  //   switch (computerSelection,playerSelection){
  //     case computerSelection == playerSelection:
  //         console.log(`It's a DRAW, your score is ${++playerScore} computer score is ${computerScore} out of 5`);
  //       break;
    
  //       case computerSelection == 'Rock' && playerSelection == 'paper':
  //         console.log(`You WIN, Paper covers Rock, your score is ${++playerScore} computer score is ${computerScore},best out of 5`);
  //       break;
    
  //       case computerSelection == 'Paper' && playerSelection == 'scissors':
  //         console.log(`You WIN, Scissors cuts Paper, your score is ${++playerScore} computer score is ${computerScore},best out of 5`);
  //       break;
    
  //       case computerSelection == 'Scissors' && playerSelection == 'rock':
  //         console.log(`You WIN, Rock beats scissors, your score is ${++playerScore} computer score is ${computerScore},best out of 5`);
  //       break;
    
  //       case computerSelection == 'Rock' && playerSelection == 'scissors':
  //         console.log(`You LOSE, Rock beats Scissors, your score is ${playerScore} computers score is ${++computerScore},best out of 5`);
  //       break;
    
  //       case computerSelection == 'Paper' && playerSelection == 'rock':
  //         console.log(`You LOSE, Paper covers Rock, your score is ${playerScore} computer score is ${++computerScore},best out of 5`);
  //       break;
    
  //       case computerSelection == 'Scissors' && playerSelection == 'paper':
  //         console.log(`You LOSE, Scissors cuts Paper, your score is ${playerScore} computers score is ${++computerScore},best out of 5`);
  //       break;

  //       default:
  //          console.log('Failed to play round');
  //   }}


