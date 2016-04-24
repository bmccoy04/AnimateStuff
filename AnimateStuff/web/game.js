import {Player} from "./player"
import {PlayerSettings} from "./playerSettings" 

export class Game {
    
    constructor() {

        this.canvas = document.getElementById("canvas");
        this.ctx = canvas.getContext("2d");

        this.canvas.style.backgroundColor = "lightgray";
        let playerSetting1 = new PlayerSettings();
        playerSetting1.x = 400;
        playerSetting1.y = 90;
        playerSetting1.r = 20;
        
        let playerSetting2 = new PlayerSettings();
        playerSetting2.speedOffset = 5;
        playerSetting2.y = 300;
        
        
        
        this.players = [
            new Player(playerSetting1),
            new Player(playerSetting2),
            new Player(new PlayerSettings())
        ]
        //this.player = new Player(400, 30, 30);
    }
    
    start(){
        this.timer = setInterval(this.draw.bind(this), 5);
    }



    drawLine() {
        this.ctx.strokeStyle = "green";
        this.ctx.moveTo(30, 40);
        this.ctx.lineTo(145, 120);
        this.ctx.stroke();
    }

    // drawBall(c) {
    //     this.ctx.beginPath();
    //     this.ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2, true);
    //     this.ctx.fill();
    // }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = "#FAF7F8";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        for(let player of this.players){         
            player.drawPlayer(this.ctx);
            player.movePlayer(this.canvas);   
        }
        //this.drawBall(this.player);
       
    }
}
