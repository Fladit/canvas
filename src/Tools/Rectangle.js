import Tool from "./Tool";
import UserStore from "../store/UserStore";

class Rectangle extends Tool {


    onMouseDown(e) {
        this.figureOnMouseDown(e)
    }



    onMouseMove(e) {
        this.figureOnMouseMove(e)
    }

    onMouseUp(e) {
        super.onMouseUp(e)
        /*
        WebSocketHandler.sendDrawEvent({
            x: this.startX,
            y: this.startY,
            w: this.w,
            h: this.h,
            fillStyle: this.getColor()
        }, "rectangle")

         */
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
            figure: "rectangle",
            parameters
        }))
    }

    draw(x, y, w, h) {
        super.draw()
        this.ctx.fillStyle = this.getColor()
        this.ctx.fillRect(x, y, w, h)
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
