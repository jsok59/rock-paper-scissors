let getComputerChoice = function() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    switch(randomNumber) {
        case 1:
            return "Scissors";
        case 2:
            return "Rock";
        case 3:
            return "Paper";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock") {
        if (computerSelection === "Rock") {
            return (`You tie!`);
        } else if (computerSelection === "Scissors") {
            return (`You win! ${playerSelection} beats ${computerSelection}`);
        } else {
            return (`You lose! ${computerSelection} beats ${playerSelection}`)
        }
    } else if (playerSelection === "Scissors") {
        if (computerSelection === "Scissors") {
            return (`You tie!`);
        } else if (computerSelection === "Paper") {
            return (`You win! ${playerSelection} beats ${computerSelection}`);
        } else {
            return (`You lose! ${computerSelection} beats ${playerSelection}`)
        }
    } else {
        if (computerSelection === "Paper") {
            return (`You tie!`);
        } else if (computerSelection === "Rock") {
            return (`You win! ${playerSelection} beats ${computerSelection}`);
        } else {
            return (`You lose! ${computerSelection} beats ${playerSelection}`)
        }
    }

}

let game = function() {
    for (let i = 0; i < 5; i++) {
        computerSelection = getComputerChoice();
        playerSelection = prompt("Enter either Rock, Paper, or Scissors").toLowerCase();
        
        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);                    //Change first letter of input to uppercase and all else lowercase
        if (playerSelection != "Rock" && playerSelection != "Paper" && playerSelection != "Scissors") {
            console.log("Invalid Input");
        } 

        result = playRound(playerSelection, computerSelection);
        winOrLose = result.split(" ")[1];
        if (winOrLose ==="win!") {
            playerScore++;
        } else if (winOrLose ==="lose!") {
            computerScore++;
        }
        console.log(result);
    }
}

let computerSelection;
let playerSelection;
let result;
let playerScore = 0;
let computerScore = 0;



game();

if (playerScore > computerScore) {
    console.log("You win!");
} else if(playerScore < computerScore) {
    console.log("You lose!") 
} else {
    console.log("It's a tie!")
}


