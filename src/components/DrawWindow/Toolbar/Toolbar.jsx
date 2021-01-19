import React, {useState} from 'react';
import "../../../styles/toolbar.scss"
import {observer} from "mobx-react-lite";
import Brush from "../../../Tools/Brush";
import Rectangle from "../../../Tools/Rectangle";
import Circle from "../../../Tools/Circle";
import Eraser from "../../../Tools/Eraser";
import Line from "../../../Tools/Line";
import CanvasStore from "../../../store/CanvasStore";
import ToolStore from "../../../store/ToolStore";
import SocketStore from "../../../store/SocketStore";

const tools = {
    BRUSH: "brush",
    RECT: "rect",
    CIRCLE: "circle",
    ERASER: "eraser",
    LINE: "line",
}

const Toolbar = observer(() => {
    const [activeButton, setActiveButton] = useState("")
    return (
        <div className={"toolbar"}>
            <button className={`btn brush ${(activeButton === tools.BRUSH)? "active": ""}`}
                    onClick={() => {new Brush(CanvasStore.currentCanvas, SocketStore.socket); setActiveButton(tools.BRUSH); console.log(SocketStore.socket)}}/>
            <button className={`btn rect ${(activeButton === tools.RECT)? "active": ""}`}
                    onClick={() => {new Rectangle(CanvasStore.currentCanvas, SocketStore.socket); setActiveButton(tools.RECT)}}/>
            <button className={`btn circle ${(activeButton === tools.CIRCLE)? "active": ""}`}
                    onClick={() => {new Circle(CanvasStore.currentCanvas, SocketStore.socket); setActiveButton(tools.CIRCLE)}}/>
            <button className={`btn eraser ${(activeButton === tools.ERASER)? "active": ""}`}
                    onClick={() => {new Eraser(CanvasStore.currentCanvas, SocketStore.socket); setActiveButton(tools.ERASER)}}/>
            <button className={`btn line ${(activeButton === tools.LINE)? "active": ""}`}
                    onClick={() => {new Line(CanvasStore.currentCanvas, SocketStore.socket); setActiveButton(tools.LINE)}}/>
            <input type={"color"} className={"inputColor"} onChange={e => {ToolStore.setColor(e.target.value)}}/>
            <button className={"btn undo"}/>
            <button className={"btn redo"}/>
            <button className={"btn save"}/>
        </div>
    );
});

export default Toolbar;
