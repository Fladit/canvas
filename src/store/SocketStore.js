import {makeAutoObservable} from "mobx";
import UserStore from "./UserStore";

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

    }
}

export default new SocketStore()
