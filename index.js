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
    }

    // Rock
    if (playerResult === "Rock" && robotPlay === "Paper") {
        console.log("Paper beats Rock, player loses");
        playerLives = loseRound(playerLives);
    } else if (playerResult === "Rock" && robotPlay === "Scissors") {
        console.log("Rock beats Scissors, player wins");
        robotLives = loseRound(robotLives);
    }

    // Paper
    if (playerResult === "Paper" && robotPlay === "Rock") {
        console.log("Paper beats Rock, player wins");
        robotLives = loseRound(robotLives);
    } else if (playerResult === "Paper" && robotPlay === "Scissors") {
        console.log("Scissors beats Paper, player loses");
        playerLives = loseRound(playerLives);
    }

    // Scissors
    if (playerResult === "Scissors" && robotPlay === "Rock") {
        console.log("Rock beats Scissors, player loses");
        playerLives = loseRound(playerLives);
    } else if (playerResult === "Scissors" && robotPlay === "Paper") {
        console.log("Scissors beats Paper, player wins");
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
    switch (playerChoice) {
        case "Paper": case "P": case "paper": case "p": case "1":
            playerResult = "Paper";
            break;
        case "Scissors": case "S": case "scissors": case "s": case "2":
            playerResult = "Scissors";
            break;
        case "Rock": case "R": case "rock": case "r": case "3":
            playerResult = "Rock";
            break;
        case null:
            console.log("Another time maybe...")
            return
        default:
            console.log("The player has chosen... something invalid?")
            break;
    }
    console.log(`%cThe Robot has chosen: ${robotPlay} | The Player has chosen: ${playerResult}`,
        "display: inline-block; background-color: darkblue; color: white; font-weight: 800;" + "padding: 10px;")   
    attackTime(playerResult, robotPlay)
    countRounds()
    console.log(`%cPlayer lives: ${playerLives} | Robot Lives: ${robotLives}`,
        "display: inline-block; background-color: darkblue; color: white; font-weight: 800;" + "padding: 10px;")
    console.log(`%cRound: ${round}`,
        "display: inline-block; border: 3px solid red ; border-radius: 7px ; " +
        "padding: 10px ; margin: 10px ;")
    rockPaperScissors()
}

rockPaperScissors()