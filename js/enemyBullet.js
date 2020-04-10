class EnemyBullet {

    constructor(ctx, enemyPosX, enemyPosY, enemyHeight) {
      this.ctx = ctx;

      this.image = new Image();
      this.image.src = "./images/disparo_enemy.png";
      
      this.posX = enemyPosX;
      this.posY = enemyPosY + enemyHeight / 2;
      

      this.width = 56;
      this.height = 33;
      
      this.velX =  10;

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
  }