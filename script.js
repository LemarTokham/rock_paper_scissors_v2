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
    // Prevent further changes to score if game is over
    if (humanScore == 5){
        return
    } else if (computerScore == 5){
        return
    }
    // rock vs paper
    if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore += 1;
        computerDiv.textContent = `Computer ${computerScore}`
        statusDiv.textContent = `You Lost - ${computerChoice} beats ${humanChoice}`
    }
    // rock vs rock
    if (humanChoice == "rock" && computerChoice == "rock") {
        statusDiv.textContent = 'Draw'
    }
    // rock vs scissors
    if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore += 1;
        userDiv.textContent = `Player ${humanScore}`
        statusDiv.textContent = `You Win! - ${humanChoice} beats ${computerChoice}`
    }
    // paper vs rock
    if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore += 1;
        userDiv.textContent = `Player ${humanScore}`
        statusDiv.textContent = `You Win! - ${humanChoice} beats ${computerChoice}`
    }
    // paper vs paper
    if (humanChoice == "paper" && computerChoice == "paper") {
        statusDiv.textContent = 'Draw'
    }
    // paper vs scissors
    if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore += 1;
        computerDiv.textContent = `Computer ${computerScore}`
        statusDiv.textContent = `You Lost - ${computerChoice} beats ${humanChoice}`
    }
    // scissors vs paper
    if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore += 1;
        userDiv.textContent = `Player ${humanScore}`
        statusDiv.textContent = `You Win! - ${humanChoice} beats ${computerChoice}`
    }
    // scissors vs scissors
    if (humanChoice == "scissors" && computerChoice == "scissors") {
       statusDiv.textContent = 'Draw'
    }
    // scissors vs rock
    if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore += 1;
        computerDiv.textContent = `Computer ${computerScore}`
        statusDiv.textContent = `You Lost - ${computerChoice} beats ${humanChoice}`
    }

    // Check for win after updating the scores
    console.log(humanScore, computerScore)
    if (humanScore == 5){
        // Show restart button
        restart.style.display = ''
        return
    } else if (computerScore == 5){
        // Show restart button
        restart.style.display = ''
        return
    }
    // First person to get to 5 wins is the winner
    
}


function handleEnd(){
    // Reset player scores to play again
    humanScore = 0, computerScore = 0
    // Reset UI
    userDiv.textContent = `Player ${humanScore}`
    computerDiv.textContent = `Computer ${computerScore}`
    statusDiv.textContent = 'Choose a Weapon'
    // Hide restart button
    restart.style.display = 'none'

}



// Container to house the buttons
const container = document.querySelector('.btn-container')
container.style.border = "1px solid black"

// Score tracker
let score = 0;


// UI
// Status
const statusDiv = document.createElement('div')
statusDiv.textContent = 'Choose a Weapon'
container.appendChild(statusDiv)
// Scoreboard
const userDiv = document.createElement('div')
const computerDiv = document.createElement('div')

userDiv.textContent = `Player ${humanScore}`
computerDiv.textContent = `Computer ${computerScore}`

container.appendChild(userDiv)
container.appendChild(computerDiv)


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


