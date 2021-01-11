import React, {useState} from 'react';
import "../styles/toolbar.scss"
import ToolStore from "../store/ToolStore";
import Brush from "../Tools/Brush";
import CanvasStore from "../store/CanvasStore";
import Rectangle from "../Tools/Rectangle";
import Circle from "../Tools/Circle";
import Eraser from "../Tools/Eraser";
import {observer} from "mobx-react-lite";

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
                    onClick={() => {new Brush(CanvasStore.currentCanvas); setActiveButton(tools.BRUSH)}}/>
            <button className={`btn rect ${(activeButton === tools.RECT)? "active": ""}`}
                    onClick={() => {new Rectangle(CanvasStore.currentCanvas); setActiveButton(tools.RECT)}}/>
            <button className={`btn circle ${(activeButton === tools.CIRCLE)? "active": ""}`}
                    onClick={() => {new Circle(CanvasStore.currentCanvas); setActiveButton(tools.CIRCLE)}}/>
            <button className={`btn eraser ${(activeButton === tools.ERASER)? "active": ""}`}
                    onClick={() => {new Eraser(CanvasStore.currentCanvas); setActiveButton(tools.ERASER)}}/>
            <button className={"btn line"}/>
            <input type={"color"} className={"inputColor"} onChange={e => {ToolStore.setColor(e.target.value)}}/>
            <button className={"btn undo"}/>
            <button className={"btn redo"}/>
            <button className={"btn save"}/>
        </div>
    );
});

export default Toolbar;
