function getComputerChoice() {
    return Math.floor(Math.random() * 3 + 1)
}

function getHumanChoice() {
   let playerChoice = prompt("Please enter your choice (rock, paper, or scissors): ").toLowerCase()
   return playerChoice
}