import Tool from "./Tool";
import UserStore from "../store/UserStore";

class Circle extends Tool {


    onMouseDown(e) {
        this.figureOnMouseDown(e)
    }

    onMouseMove(e) {
        this.figureOnMouseMove(e)
    }

    onMouseUp(e) {
        super.onMouseUp(e)
        const parameters = {
            x: this.startX,
            y: this.startY,
            w: this.w,
            h: this.h,
            fillStyle: this.getColor()
        }
        this.socket.send(JSON.stringify({
            username: UserStore.username,
            method: "drawEvent",
            figure: "circle",
            parameters
        }))
    }

    draw(x, y, w, h) {
        super.draw()
        this.ctx.arc(x, y, Math.sqrt((w*w + h*h)), 0, 2* Math.PI, false)
        //this.ctx.closePath()
        this.ctx.fill()
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
