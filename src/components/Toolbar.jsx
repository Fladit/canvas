import React from 'react';
import "../styles/toolbar.scss"
import ToolStore from "../store/ToolStore";
import Brush from "../Tools/Brush";
import CanvasStore from "../store/CanvasStore";

const Toolbar = () => {
    return (
        <div className={"toolbar"}>
            <button className={"btn brush"} onClick={() => {new Brush(CanvasStore.currentCanvas)}}/>
            <button className={"btn rect"} />
            <button className={"btn circle"}/>
            <button className={"btn eraser"}/>
            <button className={"btn line"}/>
            <input type={"color"} className={"inputColor"} onChange={e => {ToolStore.setColor(e.target.value)}}/>
            <button className={"btn undo"}/>
            <button className={"btn redo"}/>
            <button className={"btn save"}/>
        </div>
    );
};

export default Toolbar;
