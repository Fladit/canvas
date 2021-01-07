import {makeAutoObservable} from "mobx";

class ToolStore {
    tool = null
    color = "black"
    font = 14

    constructor() {
        makeAutoObservable(this)
    }

    setTool(tool) {
        this.tool = tool
    }

    setColor(color) {
        this.color = color
        console.log(color)
    }

    setFont(font) {
        this.font = font
    }

}

export default new ToolStore()
