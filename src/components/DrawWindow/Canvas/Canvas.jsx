import React, {useEffect, useRef} from 'react';
import "../../../styles/canvas.scss"
import {observer} from "mobx-react-lite";
import CanvasStore from "../../../store/CanvasStore";
import Brush from "../../../Tools/Brush";

const Canvas = observer(() => {
    const canvasRef = useRef()

    useEffect(() => {
        CanvasStore.setCurrentCanvas(canvasRef.current)
        new Brush(canvasRef.current)
    }, [])

    return (
        <div className={"canvas"}>
            <canvas ref={canvasRef} width={900} height={600}/>
        </div>
    );
});

export default Canvas;
