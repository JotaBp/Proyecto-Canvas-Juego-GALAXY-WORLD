class Player {

  constructor(ctx, gameW, gameH, keys) {

    this.ctx = ctx;

    this.gameWidth = gameW;
    this.gameHeight = gameH;

    this.width = 100;
    this.height = 100;

    this.image = new Image();
    this.image.src = "./images/spaceship-44.png";


    this.posX = 20;
    this.posY = (this.gameHeight - this.height)/2;
    this.posY0 = this.posY;
    
    this.limits = {
      minX: 15,
      maxX: this.gameWidth - 20,
      minY: 20,
      maxY: this.gameHeight - 20
    };

    this.keys = keys;

     this.velY = 5;
     this.velX = 5;
  

    this.bulletArr = [];

    this.setListeners();
  }

  draw() {

    this.ctx.drawImage(
      this.image,
      this.posX,
      this.posY,
      this.width,
      this.height
    );

    this.bulletArr.forEach(bullet => bullet.draw())
    this.clearBullets()
  }  

  setListeners() {
    document.addEventListener("keydown", e => {
      switch (e.keyCode) {
        case this.keys.arrowUp:
          if (this.posY >= this.limits.minY && this.posY <= this.limits.maxY ) {
            this.posY -= 15;
            
          }
          break;
        case this.keys.arrowDown:
            if(this.posY >= this.limits.minY && this.posY <= this.limits.maxY ) {
              this.posY += 15;
            }
          break;
        case this.keys.arrowRight:
          if(this.posX >= this.limits.minX && this.posX <= this.limits.maxX) {
              this.posX += 15;
          }
        
        break;
        case this.keys.arrowLeft:
          if(this.posX >= this.limits.minX && this.posX <= this.limits.maxX) {
              this.posX -= 15;
          }
        
        break;
        case this.keys.SPACE:
          this.shoot();
          break;
      }
    });
  }

  shoot() {
    this.bulletArr.push(new Bullets(this.ctx, this.posX, this.posY, this.posY0, this.width, this.height));
  }

  clearBullets() {
    this.bulletArr = this.bulletArr.filter(bull => bull.posX <= this.gameWidth);
  }
}
