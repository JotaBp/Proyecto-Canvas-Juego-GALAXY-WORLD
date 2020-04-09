const game = {
  name: "Galaxy world",
  author: "Julian",
  version: "1.0.0",
  description: "Juego shooter naves",
  license: undefined,
  canvasDom: undefined,
  ctx: undefined,
  canvasSize: {
      height: window.innerHeight,
      width: window.innerWidth
  },
  FPS: 60,
  framesCounter: 0,
  obstacleArr: [],
  enemyArr: [],
  rate: 90,
  background: undefined,
  
  player: undefined,
  playerId: undefined,
  enemyPlayers: undefined,    
  keys: {
      arrowLeft: 37,
      arrowUp: 38,
      arrowRight: 39,
      arrowDown: 40,
      SPACE: 32
  },
  keyStatus: {
    keyLeft: false,
    keyRight: false,
    keyDown: false,
    keyForward: false,
  },
  limits: {
      topBottomLimits: window.innerHeight,
      leftRightLimit: window.innerWidth,
  },
  endGame: false,
  score: 0,
  lives: 5,

  init() {
    this.canvasDom = document.getElementById("myCanvas");
    this.ctx = this.canvasDom.getContext("2d");
    this.setDimensions();
    this.start();
  },

  setDimensions() {
    this.canvasDom.width = this.canvasSize.width;
    this.canvasDom.height = this.canvasSize.height;
  },

  start() {
    this.reset();
    this.interval = setInterval(() => {
      if (this.framesCounter > 5000) {
        this.framesCounter = 0;
      }
      this.framesCounter++;

      this.clear();
      this.drawAll();
      this.drawLives();
      this.drawScore();


      this.generateObstacle();
      this.clearObstacle();

      this.generateEnemy();
      this.clearEnemy();

      this.isCollisionBulletAndEnemy(this.player.bulletArr, this.obstacleArr);
      this.isCollisionBulletAndEnemy(this.player.bulletArr, this.enemyArr);
      this.isCollisionBulletEnemyAndPlayer()

      if (this.isCollision()) {
        this.gameOver();
      }

      if (this.isCollisionPlayerAndEnemy()) {
        this.gameOver();
      }

    }, 1000 / this.FPS);
  },


  drawAll() {
    this.background.draw();
    this.player.draw(this.framesCounter);
    this.obstacleArr.forEach(obs => obs.draw());
    this.enemyArr.forEach(enemy => enemy.draw());
  },

  drawLives() {
    this.ctx.font = "600 30px Arial";
    this.ctx.fillStyle = "#0095DD";
    this.ctx.fillText(`Lives: ${this.lives}`, 150, 120);
  },

  drawScore() {
    this.ctx.font = "600 30px Arial";
    this.ctx.fillStyle = "#0095DD";
    this.ctx.fillText(`Score: ${this.score}`, 300, 120);
  },

  reset() {
    this.background = new Background(this.ctx, this.canvasDom.width, this.canvasDom.height);
    this.player = new Player(this.ctx, this.canvasDom.width, this.canvasDom.height, this.keys);
    this.obstacleArr = [];
    this.enemyArr = [];
  },

  clear() {
    this.ctx.clearRect(0, 0, this.canvasDom.width, this.canvasDom.height);
  },

  generateObstacle() {
    if (this.framesCounter % this.rate == 0) {
      this.obstacleArr.push(new Obstacle(this.ctx, this.canvasDom.width, this.canvasDom.height));
    }
  },

  generateEnemy() {  
    if (this.framesCounter % this.rate == 0) {
      this.enemyArr.push(new Enemy(this.ctx, this.canvasDom.width, this.canvasDom.height));
    }
  },

  clearObstacle() {
    this.obstacleArr = this.obstacleArr.filter(obs => obs.posX >= 0);
  },
  clearEnemy() {
    this.enemyArr = this.enemyArr.filter(enemy => enemy.posX >= 0);
  },
  
  isCollision() {
    return this.obstacleArr.some(obs => {
      return (
        this.player.posX + this.player.width >= obs.posX &&
        this.player.posY + this.player.height >= obs.posY &&
        this.player.posX <= obs.posX + obs.width &&
        this.player.posY <= obs.posY + obs.height
      );
    });
  },
  
  isCollisionPlayerAndEnemy() {
    return this.enemyArr.some(enemy => {
      return (
        this.player.posX + this.player.width >= enemy.posX &&
        this.player.posY + this.player.height >= enemy.posY &&
        this.player.posX <= enemy.posX + enemy.width &&
        this.player.posY <= enemy.posY + enemy.height
      );
    });
  },

  isCollisionBulletEnemyAndPlayer() {
    this.enemyArr.forEach(enemy =>
      enemy.bulletEnemyArr.some(bullet => {
        if (
          bullet.posX < this.player.posX + this.player.width &&
          bullet.posX + bullet.width > this.player.posX &&
          bullet.posY < this.player.posY + this.player.height &&
          bullet.posY + bullet.height > this.player.posY
        ) {
          this.gameOver()
        }
      })
    );
  },

  isCollisionBulletAndEnemy(bulletsArr, enemysArr) {
    bulletsArr.forEach(bullet =>
      enemysArr.forEach(enemy => {
        if (
          bullet.posX < enemy.posX + enemy.width &&
          bullet.posX + bullet.width > enemy.posX &&
          bullet.posY < enemy.posY + enemy.height &&
          bullet.posY + bullet.height > enemy.posY
        ) {
          let enemyIndex = enemysArr.indexOf(enemy);
          enemysArr.splice(enemyIndex, 1);
          let bulletIndex = bulletsArr.indexOf(bullet);
          bulletsArr.splice(bulletIndex, 1);
          this.score++
        }
      })
    );
  },

  
  gameOver() {
    
    this.lives -= 1

    if(this.lives < 0){
      alert("GAME OVER")
      clearInterval(this.interval);
    }

  }
}