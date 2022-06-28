const game = document.getElementById("game");
const ctx = game.getContext("2d");

let speed=5;
let gridCount = 20;
let gridSize = canvas.width /gridCount -1;
let headX = 1;
let headY = 1;

let speedX =0;
let speedY =0;

function drawGame() {
    changePosition()
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

    ctx.fillStyle ="yellow";
    for(let i=0;i<snakeBody.length;i++) {
        let body = snakeBody[i];
        ctx.fillRect(body.x * gridCount,body.y * gridCount, gridSize,gridSize);
    }
    snakeBody.push(new SnakeBody(headX,headY));

    if(snakeBody.length > tail){
        snakeBody.shift();
    }
}

function changePosition() {
    headX += speedX;
    headY += speedY;
}

drawGame();

