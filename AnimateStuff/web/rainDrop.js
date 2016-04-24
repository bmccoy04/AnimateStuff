export class RainDrop{    
    constructor() {
        this.x = 1
        this.y = 1;
        this.r = 3;
        this.speedOffset = 1;
        this.remove = false;
    }     
    
    draw(ctx) {
        ctx.fillStyle = "lightgray";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
        ctx.fill();
    }
    
    move(canvas){
        if(this.y >= canvas.height){
            this.y = 0;
            this.x = Math.floor((Math.random() * canvas.width) + 1);
            //Math.random() * (max - min) + min;
            this.speedOffset = Math.random() * (5 -3) + 3;;
            this.r = Math.random() * (4 - 2) + 2;
        } else {
            this.y += this.speedOffset;
        }
    }
}