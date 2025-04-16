const choices = ["rock", "paper", "scissors"]

let humanScore = 0, computerScore = 0


// Choice functions
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

// Gameplay functions
function playRound(humanChoice, computerChoice){
    if (humanScore == 5){
        console.log("You Won")
        return
    } else if (computerScore == 5){
        console.log("Computer Won")
        return
    }
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

    // Check for win after updating the scores
    console.log(humanScore, computerScore)
    if (humanScore == 5){
        console.log("You Won, Play again?")
        // Show restart button
        restart.style.display = ''
        return
    } else if (computerScore == 5){
        console.log("Computer Won, Play again?")
        // Show restart button
        restart.style.display = ''
        return
    }
    // First person to get to 5 wins is the winner
    
}


function handleEnd(){
    // Reset player scores to play again
    humanScore = 0, computerScore = 0
    // Hide restart button
    restart.style.display = 'none'
}



// Container to house the buttons
const container = document.querySelector('.btn-container')
container.style.border = "1px solid black"

// Score tracker
let score = 0;

// Buttons
const rock = document.createElement("button")
const paper = document.createElement("button")
const scissors = document.createElement("button")
const restart = document.createElement("button")

rock.addEventListener("click", () => {
    playRound("rock", getComputerChoice())
})
rock.textContent = "Rock"
container.appendChild(rock)

paper.addEventListener("click", () => {
    playRound("paper", getComputerChoice())
})
paper.textContent = "Paper"
container.appendChild(paper)

scissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice())
})
scissors.textContent = "Scissors"
container.appendChild(scissors)

// Restart button
restart.style.display = 'none'
restart.textContent = 'Play Again'
restart.addEventListener('click', () => {
    handleEnd()
})
container.appendChild(restart)


