class Tool {
    isMouseDown = false

    constructor(canvas) {
        this.canvas = canvas
        this.ctx = canvas.getContext("2d")
        this.canvas.onmousemove = this.onMouseMove.bind(this)
        this.canvas.onmouseup = this.onMouseUp.bind(this)
        this.canvas.onmousedown = this.onMouseDown.bind(this)
    }

    onMouseDown(e) {
        this.isMouseDown = true
    }

    onMouseMove(e) {

    }

    onMouseUp(e) {
        this.isMouseDown = false
    }



    figureOnMouseDown(e) {
        const startCoords = this.getCurrentCoordinates(e)
        this.startX = startCoords.x
        this.startY = startCoords.y
        this.ctx.moveTo(this.startX, this.startY)
        this.initialImage = this.canvas.toDataURL()
    }

    figureOnMouseMove(e) {
        if (this.isMouseDown) {
            const img = new Image()
            img.src = this.initialImage
            img.onload = () => {
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
                this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
                this.ctx.beginPath()
                const {x, y} = this.getCurrentCoordinates(e)
                const width = x - this.startX
                const height = y - this.startY
                this.draw(this.startX, this.startY, width, height)
            }
        }
    }

    getCurrentCoordinates(e) {
        const x = e.offsetX
        const y = e.offsetY
        return {x, y}
    }

    draw() {

    }


}

export default Tool
