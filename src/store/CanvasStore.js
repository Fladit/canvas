import {makeAutoObservable} from "mobx";

class CanvasStore {
    currentCanvas = null
    canvasContext = null
    brushList = []
    undoList = []
    redoList = []

    constructor() {
        makeAutoObservable(this)
    }

    setCurrentCanvas(canvas) {
        this.currentCanvas = canvas
        this.canvasContext = this.currentCanvas.getContext("2d")
    }

}

export default new CanvasStore()
