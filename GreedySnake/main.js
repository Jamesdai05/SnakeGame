const canvas =document.getElementById("game");
const ctx = canvas.getContext("2d");

let speed = 5;
let gridCount = 20;
let gridSize = canvas.width/gridCount -2;
let headX = 10;
let headY = 10;



function drawGame() {
    
    drawSnake();
    clearnScreen();                     //ClearScreen when the game goes on;
    setTimeout(drawGame, 1000/speed);         // Pending for the game to be reload.

}
// Refresh the screen window 
function clearnScreen() {
    ctx.fillStyle ="black";
    ctx.fillRect(0,0,canvas.width,canvas.height);
};
// drawSnake
function drawSnake() {
    ctx.fillStyle="red";
    ctx.fillRect(headX*gridCount, headY *gridCount,gridSize,gridSize);
}



document.addEventListener("keydown",keyDown);


// drawFood() {
//     ctx.fillStyle();
// }

function keyDown() {

}


drawGame();
