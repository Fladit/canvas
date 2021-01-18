import React, {useEffect} from 'react';
import Canvas from "./Canvas/Canvas";
import Toolbar from "./Toolbar/Toolbar";
import SettingBar from "./SettingBar/SettingBar";
import {useParams} from "react-router";
import {observer} from "mobx-react-lite";
import SocketStore from "../../store/SocketStore";

const DrawWindow = observer(() => {
    const params = useParams()
    useEffect(() => {
        const sessionID = params.uid
        const socket = new WebSocket(`ws://localhost:5000/draw/${sessionID}`)
        SocketStore.setSocket(socket, sessionID)
        return () => {
            socket.close()
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
