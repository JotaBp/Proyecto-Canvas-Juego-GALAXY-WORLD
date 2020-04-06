class Obstacle {
    constructor(ctx, gameWidth, gameHeight) {
      this.ctx = ctx;
      this.width = 14;
      this.height = this.randomInt(10,300);
  
      this.posX = gameWidth
      this.posY = this.randomInt(0,gameHeight)
  
      this.velX = 10;

    // this.image = new Image();
    // this.image.src = "./img/player.png";

    // this.image.frames = 3;
    // this.image.framesIndex = 0;

    }
  
    draw() {
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(this.posX, this.posY, this.width, this.height);

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
      this.posX -= this.velX;
    }

    randomInt(min,max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    
  }
  