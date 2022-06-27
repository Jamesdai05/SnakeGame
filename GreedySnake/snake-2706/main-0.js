const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


let speed = 5;
let boxCount =20;
let boxSize = canvas.width / boxCount -3;
let headX = 1;
let headY = 1;
let snakeBody =[];

let tail = 2;

class SnakeBody {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
}

function drawGame() {
    clearScreen();
    drawSnake();

    setTimeout(drawGame,1000/speed);
}

function clearScreen() {
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,canvas.width,canvas.height);
}

function drawSnake() {
    // draw the snake head
    ctx.fillStyle ="red";
    ctx.fillRect(headX * boxCount, headY * boxCount,boxSize, boxSize);

    ctx.fillStyle ="green";
    for(let i =0; i<snakeBody.length; i++){
        let body = SnakeBody[i];
        ctx.fillRect(body.x * boxCount, body.Y * boxCount, boxSize,boxSize);
    }
    // put the new item to the position of the head
    snakeBody.push(new SnakeBody(headX,headY)) 

    if(snakeBody.length > tail){
        snakeBody.shift();
    }
}

drawGame();
