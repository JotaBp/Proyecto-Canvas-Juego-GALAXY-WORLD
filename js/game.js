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
    obstacles: [],
    // enemys: [],
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
  
        this.generateObstacles();
        this.clearObstacles();

        // this.generateEnemys();
        // this.clearEnemys();
  
  
        if (this.isCollision()) {
          this.gameOver();
        }

        // if (this.isShooted()) {
        //  this.clearObstaclesShooted();
        // } 
  
      }, 1000 / this.FPS);
    },
  
  
    drawAll() {
      this.background.draw();
      this.player.draw(this.framesCounter);
      this.obstacles.forEach(obs => obs.draw());
      // this.enemys.forEach(enemy => enemy.draw());
    },
  
    reset() {
      this.background = new Background(this.ctx, this.canvasDom.width, this.canvasDom.height, "./images/background-4.jpg");
      this.player = new Player(this.ctx, this.canvasDom.width, this.canvasDom.height, this.keys);
      this.obstacles = [];
      // this.enemys = [];
    },
  
    clear() {
      this.ctx.clearRect(0, 0, this.canvasDom.width, this.canvasDom.height);
    },
  
    generateObstacles() {
      if (this.framesCounter % this.rate == 0) {
        this.obstacles.push(new Obstacle(this.ctx, this.canvasDom.width, this.canvasDom.height));
      }
    },

    // generateEnemys() {  
    //   if (this.framesCounter % this.rate == 0) {
    //     this.enemys.push(new Enemys(this.ctx, this.canvasDom.width, this.canvasDom.height));
    //   }
    // },
  
    clearObstacles() {
      this.obstacles = this.obstacles.filter(obs => obs.posX >= 0);
    },

    // clearEnemys() {
    //   this.enemys = this.enemys.filter(enemys => enemys.posX >= 0);
    // },

    // clearObstaclesShooted() {
    //   this.obstacles = this.obstacles.filter(obs => this.isShooted(obs));
    // },
  
    isCollision() {
      return this.obstacles.some(obs => {
        return (
          this.player.posX + this.player.width >= obs.posX &&
          this.player.posY + this.player.height >= obs.posY &&
          this.player.posX <= obs.posX + obs.width &&
          this.player.posY <= obs.posY + obs.height
        );
      });
    },

    // isShooted(a,b) {
    
    //   let shooted = false;
    //   //Colsiones horizontales
    //   if(b.x + b.width >= a.x && b.x < a.x + a.width)
    //   {
    //     //Colisiones verticales
    //     if(b.y + b.height >= a.y && b.y < a.y + a.height)
    //       shooted = true;
    //   }
    //   //Colisión de a con b
    //   if(b.x <= a.x && b.x + b.width >= a.x + a.width)
    //   {
    //     if(b.y <= a.y && b.y + b.height >= a.y + a.height)
    //       shooted = true;
    //   }
    //   //Colisión b con a
    //   if(a.x <= b.x && a.x + a.width >= b.x + b.width)
    //   {
    //     if(a.y <= b.y && a.y + a.height >= b.y + b.height)
    //       shooted = true;
    //   }
    //   return shooted;
    
    // },
  
    gameOver() {

      alert("GAME OVER")
      clearInterval(this.interval);
    }
  };