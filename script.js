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
        console.log("Computer Wins")
    }
    // rock vs rock
    if (humanChoice == "rock" && computerChoice == "rock") {
        console.log("Draw")
    }
    // rock vs scissors
    if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore += 1;
        console.log("You Win")
    }
    // paper vs rock
    if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore += 1;
        console.log("You Win")
    }
    // paper vs paper
    if (humanChoice == "paper" && computerChoice == "paper") {
        console.log("Draw")
    }
    // paper vs scissors
    if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore += 1;
        console.log("Computer Wins")
    }
    // scissors vs paper
    if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore += 1;
        console.log("You Win")
    }
    // scissors vs scissors
    if (humanChoice == "scissors" && computerChoice == "scissors") {
        console.log("Draw")
    }
    // scissors vs rock
    if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore += 1;
        console.log("Computer Wins")
    }
}

let rounds = 0;
while (rounds < 5){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection)
    console.log(humanScore, computerScore)
    rounds ++;
}

if (humanScore > computerScore){
    console.log("You Won!")
} else if (humanScore < computerScore){
    console.log("You Lose!")
} else {
    console.log("Draw")
}