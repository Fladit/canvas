import React, {useEffect} from 'react';
import Canvas from "./Canvas/Canvas";
import Toolbar from "./Toolbar/Toolbar";
import SettingBar from "./SettingBar/SettingBar";
import {useParams} from "react-router";
import {observer} from "mobx-react-lite";
import WebSocketHandler from "../../utils/WebSocketHandler";
import SocketStore from "../../store/SocketStore";

const DrawWindow = observer(() => {
    const params = useParams()
    useEffect(() => {
        const sessionID = params.uid
        console.log(sessionID)
        const socket = new WebSocket(`ws://localhost:5000/draw/${sessionID}?token=${localStorage.getItem("token")}`)
        //SocketStore.setSocket(socket, sessionID)
        WebSocketHandler.setSocket(socket, sessionID)
        return () => {
            socket.close()
            SocketStore.setSocket(null, null)
            console.log("socket закрыт")
        }
    }, [])
    return (
        <div>
            <Toolbar/>
            <SettingBar/>
            <Canvas/>
        </div>
    );
});

export default DrawWindow;
