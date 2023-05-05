let playerLives = 5;
let robotLives = 5;
let round = 0;
let playerResult
let robotPlay

function countRounds() {
    round++;
    return round;
}

function attackTime(playerResult, robotPlay) {
    // Draw
    if (playerResult === robotPlay) {
        console.log(`It's a draw! You both chose ${playerResult}`)
        // playerLives = loseRound(playerLives);
        // robotLives = loseRound(robotLives);
    }

    // Rock
    if (playerResult === "Rock" && robotPlay === "Paper") {
        console.log("Paper beats Rock, player loses");
        playerLives = loseRound(playerLives);
    } else if (playerResult === "Rock" && robotPlay === "Scissors") {
        console.log("Rock beats Scissors, player wins");
        robotLives = loseRound(robotLives);
    }
}

function loseRound(loser) {
    var lost = loser - 1;
    return lost;
}

function rockPaperScissors() {
    const robotChoices = ["Rock","Paper","Scissors"]
    let robotPlay = robotChoices[Math.floor(Math.random()*robotChoices.length)];
    let playerChoice = prompt("Okay Player, type your weapon of choice")
    
    console.clear()
    console.log(`The robot has chosen ${robotPlay}`)
    
    switch (playerChoice) {
        case "Paper": case "P": case "paper": case "p": case "1":
            console.log("You have chosen Paper");
            playerResult = "Paper";
            break;
        case "Scissors": case "S": case "scissors": case "s": case "2":
            console.log("You have selected Scissors");
            playerResult = "Scissors";
            break;
        case "Rock": case "R": case "rock": case "r": case "3":
            console.log("You have picked Rock");
            playerResult = "Rock";
            break;
        case null:
            console.log("Another time maybe...")
            return
        default:
            console.log("The player has chosen... something invalid?")
            break;
    }
    attackTime(playerResult, robotPlay)
    countRounds()
    console.log(`Player lives: ${playerLives} | Robot Lives: ${robotLives}`)
    console.log(`Round: ${round}`)
    rockPaperScissors()
}

rockPaperScissors()