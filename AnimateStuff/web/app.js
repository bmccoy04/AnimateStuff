import {Game} from "./game";  

var g = new Game();
g.start();

// var canvas=document.getElementById("canvas");
// var ctx=canvas.getContext("2d");

// canvas.style.backgroundColor = "lightgray";
// var timer;
// timer=setInterval(draw, 5);
// var circle = new Circle(400, 30, 30);

// function Circle(x,y,r){
//     this.x = x;
//     this.y = y;
//     this.r = r;
//     this.direction = "right";
// }

// function drawLine(){
//     ctx.strokeStyle="green";
// ctx.moveTo(30,40);
// ctx.lineTo(145,120);
// ctx.stroke();
// }

// function drawBall(c){
//     ctx.beginPath();
//     ctx.arc(c.x, c.y, c.r, 0, Math.PI*2, true);
//     ctx.fill();
// }

// function draw(){
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//   ctx.fillStyle = "#FAF7F8";
//   ctx.fillRect(0,0,canvas.width,canvas.height);
//   ctx.fillStyle = "#003300";
//     drawBall(circle);
//     circle.y = canvas.height - circle.r;
//     if(circle.direction === "right"){     
//         if(circle.x < canvas.width - circle.r){
//             circle.x++;
//         } else {
//             circle.direction = "left";
//         }
//     } else if(circle.direction === "left"){
//         if(circle.x > 0 + circle.r){
//             circle.x--;
//         } else {
//             circle.direction = "right";
//         }
//     }
// }