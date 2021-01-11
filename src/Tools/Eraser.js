import Brush from "./Brush";

class Eraser extends Brush{

    constructor(canvas) {
        super(canvas);
    }

    onMouseDown(e) {
        super.onMouseDown(e);
    }

    onMouseMove(e) {
        super.onMouseMove(e);
    }

    onMouseUp(e) {
        super.onMouseUp(e);
    }

    draw(x, y) {
        super.draw(x, y);
    }

    getColor() {
        return "white"
    }

}

export default Eraser
