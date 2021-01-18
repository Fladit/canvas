import Tool from "./Tool";
import UserStore from "../store/UserStore";
import SocketStore from "../store/SocketStore";

class Circle extends Tool {

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
        }, "circle")
    }

    draw(x, y, w, h) {
        super.draw()
        this.ctx.arc(x, y, Math.sqrt((w*w + h*h)), 0, 2* Math.PI, false)
        //this.ctx.closePath()
        this.ctx.fill()
        this.x = x
        this.y = y
        this.w = w
        this.h = h
    }

    static drawCircle(canvasContext, parameters) {
        const {x, y, w, h, fillStyle} = parameters
        canvasContext.beginPath()
        canvasContext.arc(x, y, Math.sqrt((w*w + h*h)), 0, 2* Math.PI, false)
        canvasContext.fillStyle = fillStyle
        canvasContext.fill()
    }
}

export default Circle
