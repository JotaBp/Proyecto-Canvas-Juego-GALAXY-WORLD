class Obstacle {
    constructor(ctx, gameWidth, gameHeight) {
      this.ctx = ctx;
      this.width = this.randomInt(10,300);
      this.height = this.width;

      this.image = new Image();
      this.image.src = "./images/sprite-meteorito-3.png";
  
      this.posX = gameWidth
      this.posY = this.randomInt(40,gameHeight - 100)
  
      this.velX = this.randomInt(1,10);

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
      this.posX -= this.velX;
    }

    randomInt(min,max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
  }
  