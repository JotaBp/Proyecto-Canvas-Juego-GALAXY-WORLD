class BackgroundGameOver {

  constructor(ctx, gameWidth, gameHeight) {
    this.ctx = ctx;
    this.image = new Image();
    this.image.src = "./images/game_over-2.png";

    this.imgBotonRestart = new Image();
    this.imgBotonRestart.src = "./images/boton_reset.png";

    this.size = {
      width: gameWidth,
      height: gameHeight
    }
    this.sizeBotonRestart = {
      width: 260,
      height: 260
    }

    this.posX = 0;
    this.posY = 0;

    this.positionBotonRestart = {
      X: gameWidth/2 - this.sizeBotonRestart.width/2,
      Y: gameHeight/2 - this.sizeBotonRestart.height
    }


  }
  draw() {
    this.ctx.drawImage(this.image, this.posX, this.posY, this.size.width, this.size.height);
    this.ctx.drawImage(this.imgBotonRestart, this.positionBotonRestart.X, this.positionBotonRestart.Y, this.sizeBotonRestart.width, this.sizeBotonRestart.height);

  }

  resetGame() {    //llamamos a la funcion resetGame desde el game over del game.js?


    this.imgBotonRestart.addEventListener("click", game.init());
      
  }

}