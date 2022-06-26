const canvas =document.getElementById("game");
const ctx = canvas.getContext("2d");

let speed = 5;
let gridCount = 25;
let gridSize = canvas.width/gridCount -2;
let headX = 12;
let headY = 12;



function drawGame() {
    
    drawSnake();
    clearnScreen();                     //ClearScreen when the game goes on;
    setTimeout(drawGame, 1000);         // Pending for the game to be reload.

}

clearnScreen() {
    ctx.fillStyle ="black";
    ctx.fillStyle(0,0,canvas.width,canvas.height);
}

drawSnake() {
    ctx.fillStyle="yellow";
    ctx.fillRect(headX*gridCount, headY *gridCount,gridSize,gridSize);
}

document.addEventListener("keydown",keyDown);


drawFood() {
    ctx.fillStyle();
}


drawGame();
