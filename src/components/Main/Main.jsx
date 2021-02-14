import React from "react";
import Menu from "./Menu/Menu";
import "../../styles/main.css"
import Navbar from "./Navbar/Navbar";
import PopupWindow from "../../utils/PopupWindow/PopupWindow";
import {useState} from "react";
import {useEffect} from "react";

const Main = () => {
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        console.log(isActive)
    }, [isActive])

    return (
        <div className={"main"}>
            <Navbar/>
            <div className={"main__menu"}>
                <Menu setIsActive={setIsActive}/>
            </div>
            <PopupWindow isActive={isActive} setIsActive={setIsActive}>
                Test
            </PopupWindow>
        </div>
    )
}
export default Main
