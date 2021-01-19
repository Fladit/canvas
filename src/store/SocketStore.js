import {makeAutoObservable} from "mobx";
import UserStore from "./UserStore";
import Circle from "../Tools/Circle";
import CanvasStore from "./CanvasStore";
import Rectangle from "../Tools/Rectangle";
import Line from "../Tools/Line";

const methods = {
    CONNECTION: "startConnection",
    DRAW_EVENT: "drawEvent"
}

class SocketStore {
    socket = null
    sessionID = null

    constructor() {
        makeAutoObservable(this)
    }

    setSocket(socket, sessionID) {
        this.socket = socket
        this.sessionID = sessionID
        this.eventHandler()
    }

    eventHandler() {
        this.socket.onopen = this.onOpenHandler.bind(this)
        this.socket.onmessage = this.onMessageHandler.bind(this)
    }

    onOpenHandler() {
        console.log("openHandler")
        const message = {
            method: methods.CONNECTION,
            username: UserStore.username,
            authorization: localStorage.getItem("token"),
        }
        this.socket.send(JSON.stringify(message))
    }

    onMessageHandler(event) {
        console.log("messageHandler")
        const message = JSON.parse(event.data)
        switch (message.method) {
            case methods.CONNECTION: {
                console.log(`Пользователь ${message.username} присоединился!`)
                break;
            }

            case methods.DRAW_EVENT: {
                this.drawEventHandler(message)
                break;
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
                console.log(message)
                Line.drawLine(CanvasStore.canvasContext, message.parameters)
                break;
            }

            case "brush": {
                break;
            }

            default: {
                break;
            }

        }


    }

    sendDrawEvent(parameters, figure) {
        this.socket.send(JSON.stringify({
            username: UserStore.username,
            method: "drawEvent",
            figure,
            parameters
        }))
    }
}

export default new SocketStore()
