class Bullets {

  constructor(ctx, playerPosX, playerPosY, playerPosY0, playerWidth, playerHeight) {
    this.ctx = ctx;

    this.image = new Image();
    this.image.src = "./images/flame_hrise.png";
    
    this.posX = playerPosX + playerWidth;
    this.posY = playerPosY + playerHeight / 2;
    this.playerPosY0 = playerPosY0;

    this.width = 50;
    this.height = 40;
    
    this.velX = 10;

  } 

  draw() {
  
    this.ctx.drawImage(
      this.image,
      this.posX,
      this.posY,
      this.width,
      this.height
    );

    this.move()
  }

  move() {
    this.posX += this.velX;
    
  }
}