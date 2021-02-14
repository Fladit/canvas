import React from 'react';
import "../../../styles/authForm.css"

const Menu = () => {
    return (
        <div className={"main-box"}>
            <div style={{position: "absolute", top: "40px"}}>Canvas</div>
            <button className={"button-auth"}> Создать сессию </button>
            <button className={"button-auth"}> Присоединиться </button>
        </div>
    );
};

export default Menu;
