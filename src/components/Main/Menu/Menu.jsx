import React from 'react';
import "../../../styles/authForm.css"
import Button from "../../../utils/Button/Button";

const Menu = ({setIsActive}) => {
    return (
        <div className={"main-box"}>
            <div style={{position: "absolute", top: "40px"}}>Canvas</div>
            <Button buttonLabel={"Создать сессию"}/>
            <Button buttonLabel={"Присоединиться"} clickFunction={(e) =>
            { e.stopPropagation(); setIsActive(true)}}/>
        </div>
    );
};

export default Menu;
