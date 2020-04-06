class EnemyPlayers {

    constructor(ctx, gameW, gameH) {
  
      this.ctx = ctx;
  
      this.gameWidth = gameW;
      this.gameHeight = gameH;
  
      this.width = 100;
      this.height = 100;
  
      this.image = new Image();
      this.image.src = "./images/spaceship-8.png";
  
  
      this.posX = 20;
      this.posY = (this.gameHeight - this.height)/2;
      this.posY0 = this.posY;
      
      this.limits = {
        minX: 20,
        maxX: this.gameWidth - 20,
        minY: 20,
        maxY: this.gameHeight - 20
      };
  
      this.keys = keys;
  
      this.velY = 5;
      this.velX = 5;
    
  
      this.bullets = [];
  
    }
  
    draw() {
  
      this.ctx.drawImage(
        this.image,
        this.posX,
        this.posY,
        this.width,
        this.height
      );
  
      this.bullets.forEach(bullet => bullet.draw())
      this.clearBullets()
    }  

  
   

  
    shoot() {
      this.bullets.push(new Bullets(this.ctx, this.posX, this.posY, this.posY0, this.width, this.height));
    }
  
    clearBullets() {
      this.bullets = this.bullets.filter(bullet => bullet.posX <= this.gameWidth);
    }
  }
  