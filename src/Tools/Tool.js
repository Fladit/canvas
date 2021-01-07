class Tool {

    constructor(canvas) {
        this.canvas = canvas
        this.ctx = canvas.getContext("2d")
        this.canvas.onmousemove = this.onMouseMove.bind(this)
        this.canvas.onmouseup = this.onMouseUp.bind(this)
        this.canvas.onmousedown = this.onMouseDown.bind(this)
    }

    onMouseDown(e) {

    }

    onMouseUp(e) {

    }

    onMouseMove(e) {

    }
}

export default Tool
