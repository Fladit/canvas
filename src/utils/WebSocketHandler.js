import UserStore from "../store/UserStore";
import Circle from "../Tools/Circle";
import CanvasStore from "../store/CanvasStore";
import Rectangle from "../Tools/Rectangle";
import Line from "../Tools/Line";
import Brush from "../Tools/Brush";
import SocketStore from "../store/SocketStore";
import Tool from "../Tools/Tool";

const methods = {
    CONNECTION: "startConnection",
    DRAW_EVENT: "drawEvent",
    SET_START_IMAGE: "setStartImage",
}

class WebSocketHandler {
    socket = null

    constructor() {
    }

    setSocket(socket, sessionID) {
        this.socket = socket
        this.eventHandler()
        SocketStore.setSocket(socket, sessionID)
    }

    eventHandler() {
        this.socket.onopen = this.onOpenHandler.bind(this)
        this.socket.onmessage = this.onMessageHandler.bind(this)
    }

    onOpenHandler() {
        console.log("openHandler")
    }

    onMessageHandler(event) {
        const message = JSON.parse(event.data)
        console.log(message)
        switch (message.method) {
            case methods.CONNECTION: {
                console.log(`Пользователь ${message.username} присоединился!`)
                break;
            }

            case methods.DRAW_EVENT: {
                this.drawEventHandler(message)
                break;
            }
            case methods.SET_START_IMAGE: {
                Tool.setCurrentImage(CanvasStore.currentCanvas, message.image)
            }
            default: {
                break;
            }
        }
    }

    drawEventHandler(message) {
        switch (message.figure) {
            case "circle": {
                Circle.drawCircle(CanvasStore.canvasContext, message.parameters)
                break;
            }
            case "rectangle": {
                Rectangle.drawRectangle(CanvasStore.canvasContext, message.parameters)
                break;
            }

            case "line": {
                //console.log(message)
                Line.drawLine(CanvasStore.canvasContext, message.parameters)
                break;
            }

            case "brush": {
                Brush.drawBrush(CanvasStore.canvasContext, message.parameters)
                break;
            }

            default: {
                break;
            }

        }


    }

    /*
    sendDrawEvent(parameters, figure) {
        this.socket.send(JSON.stringify({
            username: UserStore.username,
            method: "drawEvent",
            figure,
            parameters
        }))
    }

     */
}

export default new WebSocketHandler()
