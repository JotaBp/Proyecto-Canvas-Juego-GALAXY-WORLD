class Score {


    constructor (ctx, gameWidth, gameHeight, quantityScore) {

        this.ctx = ctx;
        
        this.gameSize = {
            width: gameWidth,
            height: gameHeight
        }

        this.position = {
            X: 300,
            Y: 120
        }

        this.quantityScore = quantityScore;

    }

    draw() {
        this.ctx.font ="30px Arial";
        this.ctx.fillStyle = "#0095DD";
        this.ctx.fillText(`Score: ${this.quantityScore}`, this.position.X, this.position.Y);
    }

    drawFinal() {
        this.ctx.font ="50px Arial";
        this.ctx.fillStyle = "#0095DD";
        this.ctx.fillText(`Score: ${this.quantityScore}`, this.gameSize.width/2, 100);
    }

    addScore() {
        this.quantityScore++
    }



}