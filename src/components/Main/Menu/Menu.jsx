import React from 'react';
import "../../../styles/authForm.css"

const Menu = ({setIsActive}) => {
    return (
        <div className={"main-box"}>
            <div style={{position: "absolute", top: "40px"}}>Canvas</div>
            <button className={"button-auth"}> Создать сессию </button>
            <button className={"button-auth"} onClick={(e) =>
            { e.stopPropagation(); setIsActive(true)}}> Присоединиться </button>
        </div>
    );
};

export default Menu;
