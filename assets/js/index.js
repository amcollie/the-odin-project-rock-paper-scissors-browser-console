const container = document.querySelector('.container')
let computerScore = 0
let playerScore = 0

const scoreboard = document.createElement('div')
scoreboard.classList.add('scoreboard')
const playerScoreDisplay = document.createElement('div')
playerScoreDisplay.textContent = `Player Score: ${playerScore}`
const computerScoreDisplay = document.createElement('div')
computerScoreDisplay.textContent = `Computer Score: ${computerScore}` //computerScore

scoreboard.append(playerScoreDisplay, computerScoreDisplay)


const choicesContainer = document.createElement('div')
const rockButton = document.createElement('button')
const rockImage = document.createElement('i')
const paperButton = document.createElement('button')
const paperImage = document.createElement('i')
const scissorsButton = document.createElement('button')
const scissorsImage = document.createElement('i')

choicesContainer.classList.add('choices')

const resultDisplay = document.createElement('div')
resultDisplay.classList.add('result')
const resultText = document.createElement('p')
resultDisplay.append(resultText)

rockImage.classList.add('fa-regular', 'fa-hand-back-fist', 'fa-3x')
rockButton.append(rockImage)
rockButton.classList.add('choice')

paperImage.classList.add('fa-regular', 'fa-hand', 'fa-3x')
paperButton.append(paperImage)
paperButton.classList.add('choice')

scissorsImage.classList.add('fa-regular', 'fa-hand-scissors', 'fa-3x')
scissorsButton.append(scissorsImage)
scissorsButton.classList.add('choice')

rockButton.addEventListener('click', () => {
    playGame('rock', getComputerChoice())
})

paperButton.addEventListener('click', () => {
    playGame('paper', getComputerChoice())
})

scissorsButton.addEventListener('click', () => {
    playGame('scissors', getComputerChoice())
})

choicesContainer.append(rockButton, paperButton, scissorsButton)

const winner = document.createElement('div')
winner.classList.add('winner')

const playAgainButton = document.createElement('button')
playAgainButton.textContent = 'Play Again'
playAgainButton.classList.add('play-again')

playAgainButton.addEventListener('click', resetGame)

container.append(
    scoreboard,
    choicesContainer,
    resultDisplay, 
    winner,
    playAgainButton
)

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * choices.length)
    return choices[randomNumber]
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

function playGame(playerChoice, computerChoice) {
    result = playRound(playerChoice, computerChoice)
    resultText.textContent = result
    if (result.includes('win')) {
        playerScore++
    } else if (result.includes('lose')) {
        computerScore++
    }
    

    playerScoreDisplay.textContent = `Player Score: ${playerScore}`
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`

    if (playerScore === 5)
    {
        winner.textContent = `You win! ${playerScore} to ${computerScore}`
        container.append(winner)
        disableButtons()

    } else if (computerScore === 5) {
        winner.textContent = `Computer wins! ${computerScore} to ${playerScore}`
        container.append(winner)
        disableButtons()
    }

}

function disableButtons() {
    rockButton.disabled = true
    paperButton.disabled = true
    scissorsButton.disabled = true
    playAgainButton.style.display = 'block'
}

function resetGame() {
    playerScore = 0
    computerScore = 0
    playerScoreDisplay.textContent = `Player Score: ${playerScore}`
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`
    resultText.textContent = ''
    rockButton.disabled = false
    paperButton.disabled = false
    scissorsButton.disabled = false
    winner.textContent = ''
    playAgainButton.style.display = 'none'
}