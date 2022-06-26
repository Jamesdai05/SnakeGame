const canvas =document.getElementById("game");
const ctx = canvas.getContext("2d");

let speed = 5;
let gridCount = 20;
let gridSize = canvas.width/gridCount -1;
let headX = 1;
let headY = 1;

let foodX = 4;
let foodY = 5;

let velocityOfX = 0;
let velocityOfY = 0;




function drawGame() {
    
    //ClearScreen when the game goes on;
    cleanScreen();
    drawSnake();
    drawFood();                     
    setTimeout(drawGame, 1000/speed);         // Pending for the game to be reload.

}
// Refresh the screen window to shown the snake movement
function cleanScreen() {
    ctx.fillStyle ="black";
    ctx.fillRect(0,0,canvas.width,canvas.height);
};
// drawSnake
function drawSnake() {
    ctx.fillStyle ="red";
    ctx.fillRect(headX * gridCount, headY * gridCount,gridSize,gridSize);
}
// snake movement
document.addEventListener("keydown",directionControl);
function directionControl(event){
    //left = 37 right = 39 up = 38 down = 40 (keycode)  
    switch(event.keyCode){
        // move left 
        case 37 :
          if(velocityOfX ==1){
            return;
          } else {
            velocityOfX =-1;
            velocityOfY = 0;
          };
          break;
          // move right
          case 39 :
          if(velocityOfX ==-1){
            return;
          } else {
            velocityOfX =1;
            velocityOfY = 0;
          };
          break;
          // move up
          case 38 :
          if(velocityOfY == 1){
            return;
          } else {
            velocityOfX =0;
            velocityOfY =-1;
          };
          break;
          // move down
          case 40:
            if(velocityOfY == -1){
            return;
          } else {
            velocityOfX =0;
            velocityOfY =1;
          };
          break;
    }
}

// function drawFood() {
//     ctx.fillStyle = "blue";
//     ctx.fillRect(foodX)
// }



drawGame();
