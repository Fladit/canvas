import Tool from "./Tool";

class Circle extends Tool {

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
        console.log(x, y, w, h)
        this.ctx.arc(x, y, Math.sqrt((w*w + h*h)), 0, 2* Math.PI, false)
        //this.ctx.closePath()
        this.ctx.fill()
    }
}

export default Circle
