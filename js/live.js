class Life {

    constructor (ctx, gameWidth, gameHeight, quantityLife) {

        this.ctx = ctx;
        
        this.gameSize = {
            width: gameWidth,
            height: gameHeight
        }

        this.position = {
            X: 150,
            Y: 120
        }

        this.quantityLife = quantityLife;

    }

    draw() {
        this.ctx.font ="30px Arial";
        this.ctx.fillStyle = "#0095DD";
        this.ctx.fillText(`Life: ${this.quantityLife}`, this.position.X, this.position.Y);
    }

    restlife() {
        this.quantityLife--
    }




}