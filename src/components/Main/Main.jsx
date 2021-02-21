import React from "react";
import Menu from "./Menu/Menu";
import "../../styles/main.css"
import Navbar from "./Navbar/Navbar";
import PopupWindow from "../../utils/PopupWindow/PopupWindow";
import {useState} from "react";
import JoinSession from "./JoinSession/JoinSession";

const Main = () => {
    const [isActive, setIsActive] = useState(false)


    return (
        <div className={"main"}>
            <Navbar/>
            <div className={"main__menu"}>
                <Menu setIsActive={setIsActive}/>
            </div>
            <PopupWindow isActive={isActive} setIsActive={setIsActive}>
                <JoinSession/>
            </PopupWindow>
        </div>
    )
}
export default Main
