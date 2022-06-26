const canvas =document.getElementById("game");
const ctx = canvas.getContext("2d");

let speed = 5;

function drawGame() {
    
    clearnScreen();                     //ClearScreen when the game goes on;
    setTimeout(drawGame, 1000);         // Pending for the game to be reload.

}

clearnScreen() {
    ctx.fillStyle ="rgba(129,215,110,0.8)";
    ctx.fillStyle(0,0,canvas.canvas.width,canvas.height);
}