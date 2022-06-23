//Defining global variable for score
let score;

//Selecting the needed elements
const start = document.getElementById("start");
const roll = document.getElementById("roll");
const scoreText = document.getElementById("score");
const header = document.getElementById("header");
const instructions = document.querySelector("p");
const placeholder = document.getElementById("placeholder");
const background = document.querySelector("body");

//Event listeners for buttons

start.addEventListener("click", () => {
    startGame();
});

roll.addEventListener("click", () => {
    rollDice();
})

//Functions

//Hide all dice images

let hideDice = () => {
    const dice = document.querySelectorAll("img");
    dice.forEach(image => {
        image.style.display = "none";
    });
}

//Starting a fresh game

let startGame = () => {
    hideDice();
    score = 0;
    scoreText.textContent = "Score: 0";
    scoreText.style.display = "block";
    roll.style.display = "block";
    start.style.display = "none";
    instructions.style.display = "none";
    start.textContent = "Play again";
    header.textContent = "Roll the dice!"
    placeholder.style.display = "block";
}

//Rolling the dice

let rollDice = () => {
    let num = Math.floor(Math.random() * 6) + 1;
    hideDice();
    let Dicepic = document.getElementById(`dice${num}`);
    Dicepic.style.display = "block";
    score += num;
    scoreText.textContent = `Score: ${score}`;
    
    if (score > 20) {
        winner();
    } else if (num == 1) {
        gameOver();
    }
}

// Function for when the player loses

let gameOver = () => {
    header.textContent = "You lost!"
    roll.style.display = "none";
    start.style.display = "block";
    background.style.backgroundColor = "#d96c75";
    setTimeout(function () {
        background.style.backgroundColor = "#D7CDCC";
    }, 700);
}

// Function for when the player wins

let winner = () => {
    header.textContent = "You won!"
    roll.style.display = "none";
    start.style.display = "block";
    background.style.backgroundColor = "lightgreen";
    setTimeout(function () {
        background.style.backgroundColor = "#D7CDCC";
    }, 700);
}

