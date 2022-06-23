let score;
const start = document.getElementById("start");
const roll = document.getElementById("roll");
const scoreText = document.getElementById("score");
const header = document.getElementById("header");

console.log(scoreText);
console.log(start);

start.addEventListener("click", () => {
    startGame();
});

roll.addEventListener("click", () => {
    rollDice();
})

let hideDice = () => {
    const dice = document.querySelectorAll("img");
    dice.forEach(image => {
        image.style.display = "none";
    });
}

let startGame = () => {
    hideDice();
    score = 0;
    scoreText.textContent = "Score: 0";
    scoreText.style.display = "block";
    roll.style.display = "block";
    start.style.display = "none";
    start.textContent = "Play again";
    header.textContent = "Roll the dice!"
}

let rollDice = () => {
    let num = Math.floor(Math.random() * 6) + 1;
    hideDice();
    let Dicepic = document.getElementById(`dice${num}`);
    Dicepic.style.display = "block";

    if (num == 1) {
        gameOver();
    } else {
        score += num;
        scoreText.textContent = `Score: ${score}`;
    }

    if (score > 20) {
        winner();
    }
}

let gameOver = () => {
    header.textContent = "You lost!"
    roll.style.display = "none";
    start.style.display = "block";
}

let winner = () => {
    header.textContent = "You won!"
    roll.style.display = "none";
    start.style.display = "block";
}

    // let   Textcontent = you lost
    // Score and roll = hide
    // Score = 0
    // Start button = show
    // }

// Rollbutton onclick {

// Num = randomnum(1-6)
// Hidealldice() 
// Dicepic = getelementbyid(num)
// Dicepic.style.display = block

// If (num = 1) {
// gameover() 
// } else { Score += num
// } 

// If score >20 {
// Winner() 
// } 

// gameover() {
// Dice1=getElementbyid(1)
// Dice1.style.display = hide
// Textcontent = you lost
// Score and roll = hide
// Score = 0
// Start button = show
// }

// Winner() {
// Textcontent = You win
// Start button show
// }
// } 

// Hidealldice() {
// Hide = selectalldicepics
// Hide.Style.Display = none
// }