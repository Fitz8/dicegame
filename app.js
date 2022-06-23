//Defining global variable for score
let score;

//Selecting the needed elements
const start = document.getElementById("start");
const roll = document.getElementById("roll");
const scoreText = document.getElementById("score");
const header = document.getElementById("header");
const instructions = document.querySelector("p");
const background = document.querySelector("body");
const dicePic = document.querySelector("img");

//Event listeners for buttons

start.addEventListener("click", () => {
    startGame();
});

roll.addEventListener("click", () => {
    rollDice();
})

//Functions

//Starting a fresh game

const startGame = () => {
    dicePic.src = "diceFaces/diceplaceholder.png"
    score = 0;
    scoreText.textContent = "Score: 0";
    scoreText.style.display = "block";
    roll.style.display = "block";
    start.style.display = "none";
    instructions.style.display = "none";
    start.textContent = "Play again";
    header.textContent = "Roll the dice!"
}

//Rolling the dice

const rollDice = () => {
    let num = Math.floor(Math.random() * 6) + 1;
    dicePic.src = `diceFaces/${num}.png`
    score += num;
    scoreText.textContent = `Score: ${score}`;
    
    if (score > 20) {
        winner();
    } else if (num == 1) {
        gameOver();
    }
}

// Function for when the player loses

const gameOver = () => {
    header.textContent = "You lost!"
    roll.style.visibility = "hidden";
    background.style.backgroundColor = "#d96c75";
    setTimeout(function () {
        roll.style.display = "none";
        roll.style.visibility = "visible";
        background.style.backgroundColor = "#D7CDCC";
        start.style.display = "block";
    }, 800);
}

// Function for when the player wins

const winner = () => {
    header.textContent = "You won!"
    roll.style.visibility = "hidden";
    background.style.backgroundColor = "lightgreen";
    setTimeout(function () {
        roll.style.display = "none";
        roll.style.visibility = "visible";
        background.style.backgroundColor = "#D7CDCC";
        start.style.display = "block";
    }, 800);
}

