import Brush from "./Brush";
import SocketStore from "../store/SocketStore";
import ToolStore from "../store/ToolStore";

class Line extends Brush {
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
        super.onMouseUp(e);
        SocketStore.sendDrawEvent({
            x1: this.startX,
            y1: this.startY,
            x2: this.x2,
            y2: this.y2,
            strokeStyle: ToolStore.color,
            lineWidth: ToolStore.lineWidth
        }, "line")
    }

    draw(x, y, w, h) {
        super.draw(x + w, y + h);
    }

    static drawLine(canvasContext, parameters) {
        const {x1, y1, x2, y2, strokeStyle, lineWidth} = parameters
        canvasContext.beginPath()
        canvasContext.moveTo(x1, y1)
        canvasContext.strokeStyle = strokeStyle
        canvasContext.lineWidth = lineWidth
        canvasContext.lineTo(x2, y2)
        canvasContext.stroke()
        canvasContext.closePath()
    }


}

export default Line
