import {makeAutoObservable} from "mobx";

class ToolStore {
    tool = null
    color = "black"
    lineWidth = 5

    constructor() {
        makeAutoObservable(this)
    }

    setTool(tool) {
        this.tool = tool
    }

    setColor(color) {
        this.color = color
        //console.log(color)
    }

    setLineWidth(font) {
        this.lineWidth = font
        //console.log(this.lineWidth)
    }


}

export default new ToolStore()
