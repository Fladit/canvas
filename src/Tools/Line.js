import Brush from "./Brush";

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
    }

    draw(x, y, w, h) {
        super.draw(x + w, y + h);
    }


}

export default Line
