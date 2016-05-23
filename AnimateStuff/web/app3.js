
  var cx = document.querySelector("canvas").getContext("2d");
//   cx.strokeStyle = "blue";
//   cx.strokeRect(5, 5, 50, 50);
//   cx.lineWidth = 5;
//   cx.strokeRect(135, 5, 50, 50);
  
//   cx.beginPath();
//   for (var y = 10; y < 100; y += 10) {
//     cx.moveTo(10, y);
//     cx.lineTo(90, y);
//   }
//   cx.stroke();
  
//   cx.beginPath();
//   cx.moveTo(50, 10);
//   cx.lineTo(10, 70);
//   cx.lineTo(90, 70);
//   cx.fill();
  
//   cx.beginPath();
//   cx.moveTo(10, 90);
//   // control=(60,10) goal=(90,90)
//   cx.quadraticCurveTo(60, 10, 90, 90);
//   cx.lineTo(60, 10);
//   cx.closePath();
//   cx.stroke();
  
//   cx.beginPath();
//   cx.moveTo(10, 90);
//   // control1=(10,10) control2=(90,10) goal=(50,90)
//   cx.bezierCurveTo(10, 10, 90, 10, 50, 90);
//   cx.lineTo(90, 10);
//   cx.lineTo(10, 10);
//   cx.closePath();
//   cx.stroke();
  
  
//   cx.beginPath();
//   // center=(50,50) radius=40 angle=0 to 7
//   cx.arc(50, 50, 40, 0, 7);
//   // center=(150,50) radius=40 angle=0 to ½π
//   cx.arc(150, 50, 40, 0, 0.5 * Math.PI);
//   cx.stroke();
  
  
  var img = document.createElement("img");
  img.src = "img/player_big.png";
  var spriteW = 48, spriteH = 61;
  img.addEventListener("load", function() {
    var cycle = 0;
    var posistionX = 1;
    setInterval(function() {        
      cx.clearRect(posistionX - 1, 0, spriteW, spriteH);
      
      posistionX += 10;
      cx.drawImage(img,
                   // source rectangle
                   cycle * spriteW, 0, spriteW, spriteH,
                   // destination rectangle
                   posistionX,               0, spriteW, spriteH);
      cycle = (cycle + 1) % 8;
    }, 120);
  });

// function CanvasDisplay(parent, level) {
//   this.canvas = document.createElement("canvas");
//   this.canvas.width = Math.min(600, level.width * scale);
//   this.canvas.height = Math.min(450, level.height * scale);
//   parent.appendChild(this.canvas);
//   this.cx = this.canvas.getContext("2d");

//   this.level = level;
//   this.animationTime = 0;
//   this.flipPlayer = false;

//   this.viewport = {
//     left: 0,
//     top: 0,
//     width: this.canvas.width / scale,
//     height: this.canvas.height / scale
//   };

//   this.drawFrame(0);
// }

// CanvasDisplay.prototype.clear = function() {
//   this.canvas.parentNode.removeChild(this.canvas);
// };

// CanvasDisplay.prototype.drawFrame = function(step) {
//   this.animationTime += step;

//   this.updateViewport();
//   this.clearDisplay();
//   this.drawBackground();
//   this.drawActors();
// };

// CanvasDisplay.prototype.updateViewport = function() {
//   var view = this.viewport, margin = view.width / 3;
//   var player = this.level.player;
//   var center = player.pos.plus(player.size.times(0.5));

//   if (center.x < view.left + margin)
//     view.left = Math.max(center.x - margin, 0);
//   else if (center.x > view.left + view.width - margin)
//     view.left = Math.min(center.x + margin - view.width,
//                          this.level.width - view.width);
//   if (center.y < view.top + margin)
//     view.top = Math.max(center.y - margin, 0);
//   else if (center.y > view.top + view.height - margin)
//     view.top = Math.min(center.y + margin - view.height,
//                         this.level.height - view.height);
// };

// CanvasDisplay.prototype.clearDisplay = function() {
//   if (this.level.status == "won")
//     this.cx.fillStyle = "rgb(68, 191, 255)";
//   else if (this.level.status == "lost")
//     this.cx.fillStyle = "rgb(44, 136, 214)";
//   else
//     this.cx.fillStyle = "rgb(52, 166, 251)";
//   this.cx.fillRect(0, 0,
//                    this.canvas.width, this.canvas.height);
// };

// var otherSprites = document.createElement("img");
// otherSprites.src = "img/sprites_big.png";

// CanvasDisplay.prototype.drawBackground = function() {
//   var view = this.viewport;
//   var xStart = Math.floor(view.left);
//   var xEnd = Math.ceil(view.left + view.width);
//   var yStart = Math.floor(view.top);
//   var yEnd = Math.ceil(view.top + view.height);

//   for (var y = yStart; y < yEnd; y++) {
//     for (var x = xStart; x < xEnd; x++) {
//       var tile = this.level.grid[y][x];
//       if (tile == null) continue;
//       var screenX = (x - view.left) * scale;
//       var screenY = (y - view.top) * scale;
//       var tileX = tile == "lava" ? scale : 0;
//       this.cx.drawImage(otherSprites,
//                         tileX,         0, scale, scale,
//                         screenX, screenY, scale, scale);
//     }
//   }
// };

// var playerSprites = document.createElement("img");
// playerSprites.src = "img/player.png";
// var playerXOverlap = 4;

// CanvasDisplay.prototype.drawPlayer = function(x, y, width,
//                                               height) {
//   var sprite = 8, player = this.level.player;
//   width += playerXOverlap * 2;
//   x -= playerXOverlap;
//   if (player.speed.x != 0)
//     this.flipPlayer = player.speed.x < 0;

//   if (player.speed.y != 0)
//     sprite = 9;
//   else if (player.speed.x != 0)
//     sprite = Math.floor(this.animationTime * 12) % 8;

//   this.cx.save();
//   if (this.flipPlayer)
//     flipHorizontally(this.cx, x + width / 2);

//   this.cx.drawImage(playerSprites,
//                     sprite * width, 0, width, height,
//                     x,              y, width, height);

//   this.cx.restore();
// };

// CanvasDisplay.prototype.drawActors = function() {
//   this.level.actors.forEach(function(actor) {
//     var width = actor.size.x * scale;
//     var height = actor.size.y * scale;
//     var x = (actor.pos.x - this.viewport.left) * scale;
//     var y = (actor.pos.y - this.viewport.top) * scale;
//     if (actor.type == "player") {
//       this.drawPlayer(x, y, width, height);
//     } else {
//       var tileX = (actor.type == "coin" ? 2 : 1) * scale;
//       this.cx.drawImage(otherSprites,
//                         tileX, 0, width, height,
//                         x,     y, width, height);
//     }
//   }, this);
// };

// GAME_LEVELS = [
//   "                      ",
//   "                      ",
//   "  x              = x  ",
//   "  x         o o    x  ",
//   "  x @      xxxxx   x  ",
//   "  xxxxx            x  ",
//   "      x!!!!!!!!!!!!x  ",
//   "      xxxxxxxxxxxxxx  ",
//   "                      "
// ];
//     runGame(GAME_LEVELS, CanvasDisplay);
    
//     function runGame(plans, Display) {
//   function startLevel(n) {
//     runLevel(new Level(plans[n]), Display, function(status) {
//       if (status == "lost")
//         startLevel(n);
//       else if (n < plans.length - 1)
//         startLevel(n + 1);
//       else
//         console.log("You win!");
//     });
//   }
//   startLevel(0);
// }

// var arrows = trackKeys(arrowCodes);

// function runLevel(level, Display, andThen) {
//   var display = new Display(document.body, level);
//   runAnimation(function(step) {
//     level.animate(step, arrows);
//     display.drawFrame(step);
//     if (level.isFinished()) {
//       display.clear();
//       if (andThen)
//         andThen(level.status);
//       return false;
//     }
//   });
// }

// var arrowCodes = {37: "left", 38: "up", 39: "right"};

// function trackKeys(codes) {
//   var pressed = Object.create(null);
//   function handler(event) {
//     if (codes.hasOwnProperty(event.keyCode)) {
//       var down = event.type == "keydown";
//       pressed[codes[event.keyCode]] = down;
//       event.preventDefault();
//     }
//   }
//   addEventListener("keydown", handler);
//   addEventListener("keyup", handler);
//   return pressed;
// }

// function Level(plan) {
//   this.width = plan[0].length;
//   this.height = plan.length;
//   this.grid = [];
//   this.actors = [];

//   for (var y = 0; y < this.height; y++) {
//     var line = plan[y], gridLine = [];
//     for (var x = 0; x < this.width; x++) {
//       var ch = line[x], fieldType = null;
//       var Actor = actorChars[ch];
//       if (Actor)
//         this.actors.push(new Actor(new Vector(x, y), ch));
//       else if (ch == "x")
//         fieldType = "wall";
//       else if (ch == "!")
//         fieldType = "lava";
//       gridLine.push(fieldType);
//     }
//     this.grid.push(gridLine);
//   }

//   this.player = this.actors.filter(function(actor) {
//     return actor.type == "player";
//   })[0];
//   this.status = this.finishDelay = null;
// }