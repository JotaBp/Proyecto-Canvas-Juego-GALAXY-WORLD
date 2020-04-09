class Obstacle {
    constructor(ctx, gameWidth, gameHeight) {
      this.ctx = ctx;
      this.width = 14;
      this.height = this.randomInt(10,300);
  
      this.posX = gameWidth
      this.posY = this.randomInt(40,gameHeight - 100)
  
      this.velX = 10;

    }
  
    draw() {
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(this.posX, this.posY, this.width, this.height);

      this.move()
    }
  
    move() {
      this.posX -= this.velX;
    }

    randomInt(min,max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
  }
  