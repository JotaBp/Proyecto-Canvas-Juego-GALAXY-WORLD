class Bullets {

  constructor(ctx, playerPosX, playerPosY, playerPosY0, playerWidth, playerHeight) {
    this.ctx = ctx;
    
    this.posX = playerPosX + playerWidth;
    this.posY = playerPosY + playerHeight / 2;
    this.playerPosY0 = playerPosY0;

  //ellipse bullet
    // this.radiusX = 10;  //mayor-axis
    // this.radiusY = 5;   //menor-axis
    // this.rotationEllipse = 0;
    // this.startAngle = 0;
    // this.endAngle = Math.PI * 2;
    this.width = 10;
    this.height = 10;
    
    this.velX = 10;

  } 

  draw() {
    this.ctx.beginPath();
    this.ctx.fillStyle = "#00fffd";
    this.ctx.fillRect(this.posX, this.posY, this.width, this.height);
    // this.ctx.ellipse(this.posX, this.posY, this.radiusX, this.radiusY, this.rotationEllipse, this.startAngle, this.endAngle);   
    // this.ctx.fill();
    this.ctx.closePath();
    this.move()
  }

  move() {
    this.posX += this.velX;
    
  }
}