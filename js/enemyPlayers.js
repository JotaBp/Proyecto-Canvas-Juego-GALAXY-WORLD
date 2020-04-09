class Enemy{

  constructor(ctx, gameWidth, gameHeight) {
    this.ctx = ctx;
    this.image = new Image();
    this.image.src = "./images/spaceship-8.png";

    this.gameSize = {
      width: gameWidth,
      height: gameHeight
    }

    this.width = 100;
    this.height = 100;
    

    this.posX = gameWidth;
    this.posY = this.randomInt(20,gameHeight);
    
    
    
    this.velocity = {
      velX: 5,
      velY: 5
    }
    this.gravity = .3

    this.bulletEnemyArr = [];

    this.counter = 5;

  }

  draw() {

    this.ctx.drawImage(
      this.image,
      this.posX,
      this.posY,
      this.width,
      this.height
    );

    this.bulletEnemyArr.forEach(bullet => bullet.draw())
    this.clearBullet()
    this.move()
    this.shoot()
  }

  move() {
    this.posX -= this.velocity.velX
    this.posY += this.velocity.velY
    this.posY > this.gameSize.height - this.height ? this.velocity.velY *= -1 : null
    this.posY < 0 ? this.velocity.velY *= -1 : null
  }

  clearBullet() {
    this.bulletEnemyArr = this.bulletEnemyArr.filter(bullet => bullet.posX <= this.gameSize.width)
  }

  randomInt(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  shoot() {
  
    if (this.counter % 33 == 0) {
            
      this.bulletEnemyArr.push(new EnemyBullet(this.ctx, this.posX, this.posY, this.height))
    }
    this.counter++
  }

}  
  