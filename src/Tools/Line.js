import Brush from "./Brush";
import ToolStore from "../store/ToolStore";
import UserStore from "../store/UserStore";

class Line extends Brush {

    onMouseDown(e) {
        this.figureOnMouseDown(e)
        this.ctx.lineWidth = ToolStore.lineWidth
        this.ctx.strokeStyle = this.getColor()
    }

    onMouseMove(e) {
        this.figureOnMouseMove(e)
    }

    onMouseUp(e) {
        this.isMouseDown = false
        //this.ctx.closePath()
        const parameters = {
            x1: this.startX,
            y1: this.startY,
            x2: this.x2,
            y2: this.y2,
            strokeStyle: this.getColor(),
            lineWidth: ToolStore.lineWidth
        }
        this.socket.send(JSON.stringify({
            username: UserStore.username,
            method: "drawEvent",
            figure: "line",
            parameters
        }))
    }

    draw(x, y, w, h) {
        super.draw(x + w, y + h);
        this.x2 = x + w;
        this.y2 = y + h;
    }

    static drawLine(canvasContext, parameters) {
        const {x1, y1, x2, y2, strokeStyle, lineWidth} = parameters
        canvasContext.beginPath()
        canvasContext.moveTo(x1, y1)
        canvasContext.strokeStyle = strokeStyle
        canvasContext.lineWidth = lineWidth
        canvasContext.lineTo(x2, y2)
        canvasContext.stroke()
        //canvasContext.closePath()
    }


}

export default Line
