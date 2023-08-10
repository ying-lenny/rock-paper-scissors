let playerLives = 5;
let robotLives = 5;
let round = 0;
let playerResult;
let robotPlay;
let finished = false;
let lost;
let playerChoice

// Increments round counter by 1
function countRounds() {
    round++;
    return round;
}

// Intiates game
function startGame() {
    playerLives = 5;
    robotLives = 5;
    round = 0;
    rockPaperScissors()
}

function endGame() {
    console.log("Another time maybe...")
}

// Attack phase of game logic
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

// Detects when someone's lives reaches 0 and ends the game.
function isFinished() {
    if (playerLives === 0 || robotLives === 0) {
        console.log("%cGame Over!",
            "display: inline-block; background-color: red; color: white; font-weight: 1000;" + "padding: 10px;")
        return;
    } else {
        rockPaperScissors()
    }
}

// Decrements the lives of the round's loser
function loseRound(loser) {
    lost = loser - 1;
    return lost;
}

function explainGame() {
    alert("Welcome to rock paper scissors!" +
    "\nType either rock, paper or scissors in the following prompt to attack." +
    "\nType reset to reset the game" +
    "\nType help to see these instructions again")  
}

function playerTurn() {
    playerChoice = prompt("Okay Player, type your weapon of choice")
    // Needed to catch when player hits cancel on prompt as trying to lowercase a null returns an error
    if (playerChoice != null) {
        playerChoice = playerChoice.replace(/ /g,'').toLowerCase()
    }

    switch (playerChoice) {
        case "paper": case "p": case "1":
            playerResult = "Paper";
            break;
        case "scissors": case "s": case "2":
            playerResult = "Scissors";
            break;
        case "rock": case "r": case "3":
            playerResult = "Rock";
            break;
        case null:
            console.clear()
            endGame()
            return;
        case "reset": 
            startGame();
            break;
        case "help":
            alert("Welcome to rock paper scissors!" +
            "\nType either rock, paper or scissors in the following prompt to attack." +
            "\nType reset to reset the game" +
            "\nType help to see these instructions again")                
            break;
        default:
            console.log("The player has chosen... something invalid?")
            playerResult = ""
            alert("Sorry that was an incorret move buddy.")
            break;
    }
    // Clears the console at the start of the next round
    console.clear()
}

function robotTurn() {
    // Randomly determines robot's next move from preterminded list
    const robotChoices = ["Rock","Paper","Scissors"]
    robotPlay = robotChoices[Math.floor(Math.random()*robotChoices.length)];
}

explainGame()

// Game logic
function rockPaperScissors() {
    playerTurn();
    robotTurn();

    if (playerChoice != null) {
        console.log(`%cThe Player has chosen: ${playerResult} | The Robot has chosen: ${robotPlay}`,
        "display: inline-block; background-color: darkblue; color: white; font-weight: 800;" + "padding: 10px;")   
        
        attackTime(playerResult, robotPlay)
        if (playerResult != "") {
            countRounds()
        }
        console.log(`%cPlayer lives: ${playerLives} | Robot Lives: ${robotLives}`,
            "display: inline-block; background-color: darkblue; color: white; font-weight: 800;" + "padding: 10px;")

        console.log(`%cRound: ${round}`,
            "display: inline-block; border: 3px solid red ; border-radius: 7px ; " +
            "padding: 10px ; margin: 10px ;")
        isFinished()
    } 
}

rockPaperScissors()