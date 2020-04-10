class Background {

  constructor(ctx, gameWidth, gameHeight) {
    this.ctx = ctx;
    this.image = new Image();
    this.image.src = "./images/background-4.jpg";
    this.size = {
      width: gameWidth,
      height: gameHeight
    }

    this.posX = 0;
    this.posY = 0;
    this.velocity = {
      velX: 2
    }
  }

  draw() {
    this.ctx.drawImage(this.image, this.posX, this.posY, this.size.width, this.size.height);
    this.ctx.drawImage(this.image, this.posX + this.size.width, this.posY, this.size.width, this.size.height);
    this.move()
  }

  move() {
    if (this.posX <= -this.size.width) {
      this.posX = 0;      
    }
    
    this.posX -= this.velocity.velX;
  }

}