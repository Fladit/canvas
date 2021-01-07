import Tool from "./Tool";

class Brush extends Tool {
    isMouseDown = false

    constructor(canvas) {
        super(canvas);
    }

    onMouseDown(e) {
        if (!this.isMouseDown)
            this.isMouseDown = true
        const {x, y} = this.getCurrentCoordinates(e)
        this.ctx.moveTo(x, y)
        this.ctx.beginPath()
    }

    onMouseUp(e) {
        this.isMouseDown = false
    }

    onMouseMove(e) {
        if (this.isMouseDown)
        {
            const {x, y} = this.getCurrentCoordinates(e)
            this.draw(x, y)
        }
    }

    draw(x, y) {
        this.ctx.lineTo(x, y)
        this.ctx.stroke()
    }

    getCurrentCoordinates(e) {
        const x = e.offsetX
        const y = e.offsetY
        return {x, y}}


}

export default Brush
