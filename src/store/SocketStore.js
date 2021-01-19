import {makeAutoObservable} from "mobx";


class SocketStore {
    socket = null
    sessionID = null

    constructor() {
        makeAutoObservable(this)
    }

    setSocket(socket, sessionID) {
        this.socket = socket
        this.sessionID = sessionID
    }
}

export default new SocketStore()
