import React, {useEffect, useState} from 'react';
import Canvas from "./Canvas/Canvas";
import Toolbar from "./Toolbar/Toolbar";
import SettingBar from "./SettingBar/SettingBar";
import {useHistory, useParams} from "react-router";
import {observer} from "mobx-react-lite";
import WebSocketHandler from "../../utils/WebSocketHandler";
import SocketStore from "../../store/SocketStore";

const uidLength = {
    UUID_V4: 36, // 9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d
    UID: 16, // eug1612088335172
}

const DrawWindow = observer(() => {
    const params = useParams()
    const history = useHistory()
    const [isCorrectSession, setIsCorrectSession] = useState(false)

    useEffect(() => {
        const sessionID = params.uid
        console.log(sessionID)
        return validateSessionID(sessionID, setIsCorrectSession, history)

    }, [])
    return (
        isCorrectSession?
        <div>
            <Toolbar/>
            <SettingBar/>
            <Canvas/>
        </div>
            :<div/>
    );
});


const validateSessionID = (sessionID, setIsCorrectSession, history) => {
    if (sessionID.length === uidLength.UID || sessionID.length === uidLength.UUID_V4) {
        setIsCorrectSession(true)
        const socket = new WebSocket(`ws://localhost:5000/draw/${sessionID}?token=${localStorage.getItem("token")}`)
        //SocketStore.setSocket(socket, sessionID)
        WebSocketHandler.setSocket(socket, sessionID)
        return () => {
            socket.close()
            SocketStore.setSocket(null, null)
            console.log("socket закрыт")
        }
    }
    else {
        alert("Введён неверный UID сессии!")
        // Заменить, когда будет готова страница с ошибкой при вводе неправильного url
        history.push("/")
    }
}
export default DrawWindow;
