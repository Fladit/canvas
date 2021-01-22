
import Tool from "./Tool";
import ToolStore from "../store/ToolStore";
import UserStore from "../store/UserStore";

class Brush extends Tool {
    brushRate = 10
    brushPoints = []


    onMouseDown(e) {
        super.onMouseDown(e);
        const {x, y} = this.getCurrentCoordinates(e)
        this.x1 = x;
        this.y1 = y;
        this.ctx.beginPath()
        this.ctx.moveTo(this.x1, this.y1)
        this.ctx.lineWidth = ToolStore.lineWidth
        this.ctx.strokeStyle = this.getColor()
        this.brushPoints.push({x, y})
    }

    onMouseUp(e) {
        super.onMouseUp(e)
        //this.ctx.closePath()
        if (this.brushPoints.length > 1) {
            const parameters = {
                points: this.brushPoints,
                lineWidth: ToolStore.lineWidth,
                strokeStyle: this.getColor(),
            }

            this.socket.send(JSON.stringify({
                username: UserStore.username,
                method: "drawEvent",
                figure: "brush",
                parameters
            }))
        }
        this.brushPoints = []
    }

    onMouseMove(e) {
        if (this.isMouseDown)
        {
            const {x, y} = this.getCurrentCoordinates(e)
            this.draw(x, y)
            this.brushPoints.push({x, y})
            if (this.brushPoints.length >= this.brushRate) {
                const parameters = {
                    points: this.brushPoints,
                    lineWidth: ToolStore.lineWidth,
                    strokeStyle: this.getColor(),
                }

                this.socket.send(JSON.stringify({
                    username: UserStore.username,
                    method: "drawEvent",
                    figure: "brush",
                    parameters
                }))
                this.brushPoints = [{x, y}]
            }
        }
    }


    draw(x, y) {
        this.ctx.lineTo(x, y)
        this.ctx.stroke()
    }

    static drawBrush(canvasContext, parameters) {
        const {points, lineWidth, strokeStyle} = parameters
        const startPoint = points[0]
        console.log("start")
        canvasContext.beginPath()
        canvasContext.moveTo(startPoint.x, startPoint.y)
        canvasContext.lineWidth = lineWidth
        canvasContext.strokeStyle = strokeStyle
        for (let i = 1; i < points.length; i++) {
            const point = points[i]
            canvasContext.lineTo(point.x, point.y)
            canvasContext.stroke()
        }
        //canvasContext.closePath()
        //console.log("end")
    }

}

export default Brush

