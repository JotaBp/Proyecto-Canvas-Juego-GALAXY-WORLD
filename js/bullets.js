class Bullets {

  constructor(ctx, playerPosX, playerPosY, playerPosY0, playerWidth, playerHeight) {
    this.ctx = ctx;
    
    this.posX = playerPosX + playerWidth;
    this.posY = playerPosY + playerHeight / 2;
    this.playerPosY0 = playerPosY0;

  //ellipse bullet
    this.radiusX = 10;  //mayor-axis
    this.radiusY = 5;   //menor-axis
    this.rotationEllipse = 0;
    this.startAngle = 0;
    this.endAngle = Math.PI * 2;



    this.velX = 10;

    // this.image = new Image();
    // this.image.src = "./img/player.png";

    // this.image.frames = 3;
    // this.image.framesIndex = 0;



  } 

  draw() {
    this.ctx.beginPath();
    this.ctx.fillStyle = "#00fffd";
    this.ctx.ellipse(this.posX, this.posY, this.radiusX, this.radiusY, this.rotationEllipse, this.startAngle, this.endAngle);   
    this.ctx.fill();
    this.ctx.closePath();
    this.move()
  }

//   draw(framesCounter) {

//     this.ctx.drawImage(
//       this.image,
//       this.image.framesIndex * Math.floor(this.image.width / this.image.frames),
//       0,
//       Math.floor(this.image.width / this.image.frames),
//       this.image.height,
//       this.posX,
//       this.posY,
//       this.width,
//       this.height
//     );

//     this.animate(framesCounter);
//     this.bullets.forEach(bullet => bullet.draw())
//     this.clearBullets()
//     this.move()
//   }

//   animate(framesCounter) {
//     if (framesCounter % 5 == 0) {
//       this.image.framesIndex++;
//     }
//     if (this.image.framesIndex > this.image.frames - 1) {
//       this.image.framesIndex = 0;
//     }
//   }

  move() {
    this.posX += this.velX;
    
  }
}