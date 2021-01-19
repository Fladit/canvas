import React, {useEffect, useRef} from 'react';
import "../../../styles/canvas.scss"
import {observer} from "mobx-react-lite";
import CanvasStore from "../../../store/CanvasStore";
import Brush from "../../../Tools/Brush";
import SocketStore from "../../../store/SocketStore";

const Canvas = observer(() => {
    const canvasRef = useRef()

    useEffect(() => {
        CanvasStore.setCurrentCanvas(canvasRef.current)
        console.log(SocketStore.socket)
        new Brush(canvasRef.current, SocketStore.socket)
    }, [SocketStore.socket])

    return (
        <div className={"canvas"}>
            <canvas ref={canvasRef} width={900} height={600}/>
        </div>
    );
});

export default Canvas;
