export class Player{    
    constructor(playerSettings) {
        this.x = playerSettings.x;
        this.y = playerSettings.y;
        this.r = playerSettings.r;
        this.direction = playerSettings.direction;
        this.speedOffset = playerSettings.speedOffset;
    }     
    
    drawPlayer(ctx) {
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
        ctx.fill();
    }
    
    movePlayer(canvas){
        //this.y = canvas.height - this.r;
        if (this.direction === "right") {
            if (this.x < canvas.width - this.r) {
                this.x += this.speedOffset;
            } else {
               this.direction = "left";
            }
       } else if (this.direction === "left") {
            if (this.x > 0 + this.r) {
                this.x -= this.speedOffset;
            } else {
                this.direction = "right";
            }
        }
    }
}