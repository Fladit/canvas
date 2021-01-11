import Tool from "./Tool";

class Rectangle extends Tool {

    constructor(canvas) {
        super(canvas);
    }

    onMouseDown(e) {
        super.onMouseDown(e);
        this.figureOnMouseDown(e)
    }



    onMouseMove(e) {
        this.figureOnMouseMove(e)
    }

    onMouseUp(e) {
        super.onMouseUp(e)
    }

    draw(x, y, w, h) {
        super.draw()
        this.ctx.fillStyle = this.getColor()
        this.ctx.fillRect(x, y, w, h)
    }

}

export default Rectangle
