console.log("Hello, Console")
const choices = ["rock", "paper", "scissors"]
let humanScore = 0, computerScore = 0
function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)]
}
function getHumanChoice() {
    let userChoice = ""
    do {
        userChoice = prompt("Please enter your choice:")
    } while (!(choices.includes(userChoice.toLowerCase())))
    return userChoice
}

function playRound(humanChoice, computerChoice){
    // rock vs paper
    if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore += 1;
    }
    // rock vs rock
    if (humanChoice == "rock" && computerChoice == "rock") {
        
    }
    // rock vs scissors
    if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore += 1;
    }
    // paper vs rock
    if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore += 1;
    }
    // paper vs paper
    if (humanChoice == "paper" && computerChoice == "paper") {
        
    }
    // paper vs scissors
    if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore += 1;
    }
    // scissors vs paper
    if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore += 1;
    }
    // scissors vs scissors
    if (humanChoice == "scissors" && computerChoice == "scissors") {
        
    }
    // scissors vs rock
    if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore += 1;
    }
}

let rounds = 0;
while (rounds <= 5){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection)
    console.log(humanScore, computerScore)
    rounds ++;
}

if (humanScore > computerScore){
    console.log("You Win!")
} else if (humanScore < computerScore){
    console.log("You Lose!")
} else {
    console.log("Draw")
}