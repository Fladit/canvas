import React from 'react';
import "../styles/toolbar.scss"

const Toolbar = () => {
    return (
        <div className={"toolbar"}>
            <button className={"btn brush"}/>
            <button className={"btn rect"}/>
            <button className={"btn circle"}/>
            <button className={"btn eraser"}/>
            <button className={"btn line"}/>
            <input type={"color"} className={"inputColor"}/>
            <button className={"btn undo"}/>
            <button className={"btn redo"}/>
            <button className={"btn save"}/>
        </div>
    );
};

export default Toolbar;
