class Background {

    constructor(ctx, gameW, gameH, imgSource) {
      this.ctx = ctx;
      this.width = gameW;
      this.height = gameH;
  
      this.image = new Image();
      this.image.src = imgSource;
  
      this.posX = 0;
      this.posY = 0;
  
      this.velX = 5;
    }
  
    draw() {
      this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height);
      this.ctx.drawImage(this.image, this.posX + this.width, this.posY, this.width, this.height);
      this.move()
    }
  
    move() {
      if (this.posX <= -this.width) {
        //console.log(this.posX);
        this.posX = 0;
        
      }
      this.posX -= this.velX;
    }
  }