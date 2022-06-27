const game = document.getElementById("game");
const ctx = game.getContext("2d");

let speed=5;
let gridCount = 20;
let gridSize = canvas.width /gridCount -1;
let headX = 1;
let headY = 1;



function drawGame() {
    cleanScreen();
    drawSnake();
    setTimeout(drawGame,1000/speed);
};

function clearScreen(){
    ctx.fillStyle ="black";
    ctx.fillRect(0,0,canvsa.width,canvas.height)
}

function drawSnake(){
    ctx.fillStyle ="green";
    ctx.fillRect(headX * gridCount, headY * gridCount, gridSize,gridSize);
}

drawGame();

