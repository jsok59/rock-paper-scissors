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
    //for (let i = 0; i < 5; i++) {
        computerSelection = getComputerChoice();
        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);                    //Change first letter of input to uppercase and all else lowercase
     
        result = playRound(playerSelection, computerSelection);
        winOrLose = result.split(" ")[1];
        if (winOrLose ==="win!") {
            playerScore++;
        } else if (winOrLose ==="lose!") {
            computerScore++;
        }
        divResult.textContent = result;
        divScore.textContent = `Player Score : ${playerScore} | Computer Score: ${computerScore}`;
        if (playerScore == 5) {
            youLoseWin.textContent = 'You Win! Yay';
            buttons.forEach((button) => {
                button.remove();
            })
            container.appendChild(youLoseWin);
        } else if (computerScore == 5) {
            youLoseWin.textContent = 'You Lose! Boo';
            buttons.forEach((button) => {
                button.remove();
            })
            container.appendChild(youLoseWin);
        }

}



let computerSelection;
let playerSelection;
let result;
let playerScore = 0;
let computerScore = 0;
const youLoseWin = document.createElement('p')
youLoseWin.setAttribute('style', 'color:red; font-size:50px;');
const divScore = document.createElement('div');
const divResult = document.createElement('div');
// const divWinner = document.createElement('div');
const container = document.querySelector('.container');
const container2 = document.querySelector('.container2');
container2.appendChild(divScore);
container2.appendChild(divResult);
// container2.appendChild(divWinner);

const buttons = document.querySelectorAll('button')
buttons.forEach((button) =>{
    
    button.addEventListener('click', ()=>{
        playerSelection = button.className;
       
        game();
    }) 

})


// if (playerScore > computerScore) {
//     console.log("You win!");
// } else if(playerScore < computerScore) {
//     console.log("You lose!") 
// } else {
//     console.log("It's a tie!")
// }


