import {RainDrop} from "./rainDrop" 

export class Rain {
    
    constructor() {

        this.canvas = document.getElementById("canvas");
        this.ctx = canvas.getContext("2d");

        this.canvas.style.backgroundColor = "red"; 
        
        this.items = [];
        // for(let i = 0; i <= 1000; i++){
        //     let drop = new RainDrop();
        //     drop.speedOffset = Math.floor((Math.random() * 5) + 2);
        //     drop.x = Math.floor((Math.random() * this.canvas.width) + 1);
        //     this.items.push(drop);
        // }
        
        //this.player = new Player(400, 30, 30);
    }
    
    start(){
        this.timer = setInterval(this.draw.bind(this), 5);
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = "blue";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        let itemsToRemove = [];
        
        for(let item of this.items){         
            item.draw(this.ctx);
            item.move(this.canvas);   
        }
        
        if(this.items.length <= 1000){
            let drop = new RainDrop();
            drop.speedOffset = Math.floor((Math.random() * 5) + 2);
            drop.x = Math.floor((Math.random() * this.canvas.width) + 1);
            this.items.push(drop);
        }
        
        //this.drawBall(this.player);
       
    }
}
