function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * choices.length)
    return choices[randomNumber]
}

function getUserChoice() {
    const userChoice = prompt('Please select: Rock, Paper or Scissors?').toLowerCase()
    if (!['rock', 'paper', 'scissors'].includes(userChoice)) {
        return getUserChoice()
    }
    return userChoice
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'It is a tie!'
    } else if (playerChoice === 'rock') {
        if (computerChoice === 'paper') {
            return `You lose! ${computerChoice} beats ${playerChoice}`
        } else {
            return `You win! ${playerChoice} beats ${computerChoice}`
        }
    } else if (playerChoice === 'paper') {
        if (computerChoice === 'scissors') { 
            return `You lose! ${computerChoice} beats ${playerChoice}`
        } else {
            return `You win! ${playerChoice} beats ${computerChoice}`
        }
    } else if (playerChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return `You lose! ${computerChoice} beats ${playerChoice}`
        } else {
            return `You win! ${playerChoice} beats ${computerChoice}`
        }
    }
}

function playGame() {
    let playerScore = 0
    let computerScore = 0
    for (let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice()
        let playerChoice = getUserChoice()

        result = playRound(playerChoice, computerChoice)
        console.log(result)
        if (result.includes('win')) {
            playerScore++
        } else if (result.includes('lose')) {
            computerScore++
        }
    }

    if (playerScore > computerScore) {
        console.log(`You win! ${playerScore} to ${computerScore}`)
    } else if (playerScore < computerScore) {
        console.log(`You lose! ${playerScore} to ${computerScore}`)
    } else {
        console.log(`It's a tie! ${playerScore} to ${computerScore}`)

    }
}

playGame()