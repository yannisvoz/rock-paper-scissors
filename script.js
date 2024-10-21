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