let score;
const start = document.getElementById("start");
const roll = document.getElementById("roll");
const scoreText = document.getElementById("score");
console.log(scoreText);
console.log(start);

start.addEventListener("click", () => {
    startGame();
});

roll.addEventListener("click", () => {
    let num = Math.floor(Math.random() * 6) + 1;
    console.log(num);
    hideDice();
})

let hideDice = () => {
    const dice = document.querySelectorAll("img");
    dice.forEach(image => {
        image.style.display = "none";
    });
}

let startGame = () => {
    scoreText.textContent = "Score: 0";
    scoreText.style.display = "block";
    roll.style.display = "block";
    start.style.display = "none";
    start.textContent = "Play again";
}

// Let score

// Start button onclick {
// Score = 0
// Display score
// Display roll button
// Hide start button
// Start button text = Play again 
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