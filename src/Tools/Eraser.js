import Brush from "./Brush";
import ToolStore from "../store/ToolStore";

class Eraser extends Brush{


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
