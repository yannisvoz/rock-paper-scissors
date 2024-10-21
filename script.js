function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3 + 1)
    if (choice === 1) {
        return "rock"
    } else if (choice === 2) {
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice() {
   let playerChoice = prompt("Please enter your choice (rock, paper, or scissors): ").toLowerCase()
   return playerChoice
}

let computerScore = 0
let humanScore = 0

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            humanScore++
            return "You win! Rock beats scissors!"
        } else if (computerChoice === "paper") {
            computerScore++
            return "You lose! Paper beats rock!"
        } else {
            return "It's a tie! You both chose rock!"
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            computerScore++
            return "You lose! Scissors beat paper!"
        } else if (computerScore === "rock") {
            humanScore++
            return "You win! Paper beats rock!"
        } else {
            return "It's a tie! You both chose paper!"
        }
    } else {
        if (computerChoice === "rock") {
            computerScore++
            return "You lose! Rock beats scissors!"
        } else if (computerChoice === "paper") {
            humanScore++
            return "You win! Scissors beat paper!"
        } else {
            return "It's a tie! You both chose scissors!"
        }
    }
}