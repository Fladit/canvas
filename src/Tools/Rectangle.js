import Tool from "./Tool";
import SocketStore from "../store/SocketStore";

class Rectangle extends Tool {

    constructor(canvas) {
        super(canvas);
    }

    onMouseDown(e) {
        this.figureOnMouseDown(e)
    }



    onMouseMove(e) {
        this.figureOnMouseMove(e)
    }

    onMouseUp(e) {
        super.onMouseUp(e)
        SocketStore.sendDrawEvent({
            x: this.x,
            y: this.y,
            w: this.w,
            h: this.h,
            fillStyle: this.getColor()
        }, "rectangle")
    }

    draw(x, y, w, h) {
        super.draw()
        this.ctx.fillStyle = this.getColor()
        this.ctx.fillRect(x, y, w, h)
        this.x = x
        this.y = y
        this.w = w
        this.h = h
    }

    static drawRectangle(canvasContext, parameters) {
        const {x, y, w, h, fillStyle} = parameters
        canvasContext.fillStyle = fillStyle
        canvasContext.rect(x, y, w, h)
        canvasContext.fill()
    }

}

export default Rectangle
