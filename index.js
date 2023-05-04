let playerLives = 5;
let robotLives = 5;
let round = 0;
let playerResult
let robotPlay

function countRounds() {
    round += 1;
    return round;
}

function attackTime(playerResult, robotPlay) {
    if (playerResult === robotPlay) {
        console.log("It's a draw!")
    } else {
        console.log("Wha?")
    }
}

function rockPaperScissors() {
    const robotChoices = ["rock","paper","scissors"]
    let robotPlay = robotChoices[Math.floor(Math.random()*robotChoices.length)];
    let playerChoice = prompt("Okay Player, type your weapon of choice")
    
    console.clear()
    console.log(playerLives)
    console.log(robotLives)
    console.log(playerResult)
    console.log(robotPlay)
    console.log(`The robot has chosen ${robotPlay}`)
    
    switch (playerChoice) {
        case "Paper": case "P": case "paper": case "p":    
            console.log("You have chosen Paper");
            playerResult = "paper";
            break;
        case "Scissors": case "S": case "scissors": case "s":
            console.log("You have selected Scissors");
            playerResult = "scissors";
            break;
        case "Rock": case "R": case "rock": case "r":
            console.log("You have picked Rock");
            playerResult = "rock";
            break;
        case null:
            console.log("Another time maybe...")
            return
        default:
            console.log("Why?")
            break;
    }
    attackTime(playerResult, robotPlay)
    countRounds()
    console.log(`Round: ${round}`)
    rockPaperScissors()
}

rockPaperScissors()