const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let speed = 5;
let boxCount =20;
let boxSize = canvas.width / boxCount -1;
let headX = 1;
let headY = 1;
let snakeBody =[];

//velocity of the snake at the begin

let velocityOfX =0;
let velocityOfY =0;

//food Initposition
let foodX = 10;
let foodY = 8;


let tail = 2;

class SnakeBody {
	constructor(x,y) {
			this.x = x;
			this.y = y;
	}
}

function drawGame() {
	snakeMovement();
	
	let result = isGameOver();
	if(result){
		return;
	};
	clearScreen();
	drawSnake();
	drawFood();
	
	foodEating();
	// decide the result of the game	

	setTimeout(drawGame,1000/speed);
};

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
			let body = snakeBody[i];
			ctx.fillRect(body.x * boxCount, body.y * boxCount, boxSize,boxSize);
	}
	// put the new item to the position of the head
	snakeBody.push(new SnakeBody(headX,headY)) 

	if(snakeBody.length > tail){
			snakeBody.shift();
	}
}

document.addEventListener("keydown",directionControl);
// squence of the snake control direction: left:37 right:39 up:38 down:40 
function directionControl(event) {
	switch(event.keyCode) {
		case 37:
			if(velocityOfX == 1) {
					return;
			} else {
					velocityOfX =-1;
					velocityOfY =0;
			}
			break;
		case 39:
			if(velocityOfX == -1) {
					return;
			} else {
					velocityOfY =0;
					velocityOfX = 1;
			}
			break;
		case 38:
			if(velocityOfY == 1) {
					return;
			} else {
					velocityOfY = -1;
					velocityOfX = 0;
			}
			break;
		case 40:
			if(velocityOfY == -1) {
					return;
			} else {
					velocityOfY = 1;
					velocityOfX = 0;
			}
			break;   
	}
}

function snakeMovement() {
	headX += velocityOfX;
	headY += velocityOfY;
}

function drawFood() {
	ctx.fillStyle ="blue";
	ctx.fillRect (foodX * boxCount, foodY * boxCount,boxSize,boxSize)
}

function foodEating(){
	if(foodX === headX && foodY === headY) {
			foodX = Math.floor(Math.random()* boxCount);
			foodY = Math.floor(Math.random()* boxCount);
			tail++;
	}
}

function isGameOver() {

    // default that the game should be going on
	let gameOver = false;
	if(velocityOfX ===0 && velocityOfY === 0) {
		return gameOver= false;
	};
	// hit the wall/boundary
	if(headX <0 || headX >= boxCount || headY <0 || headY >= boxCount){
		gameOver = true;
	};
  

    // hit the its own body also is considered as true
	for(let i=0;i< snakeBody.length; i++){
		let body = snakeBody[i];
		if(body.x === headX && body.y === headY) {
			gameOver = true;
			break;
		};
    };

	if(gameOver) {
		ctx.fillStyle ="white"
		ctx.font = "50px Arial";
		ctx.fillText("Game Over!", canvas.width/7,canvas.height/2);
	};
	
	
	return gameOver;
}

drawGame();
