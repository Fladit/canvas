import React from "react";
import Menu from "./Menu/Menu";
import "../../styles/main.css"
import Navbar from "./Navbar/Navbar";

const Main = () => {
    return (
        <div className={"main"}>
            <Navbar/>
            <div className={"main__menu"}>
                <Menu/>
            </div>
        </div>
    )
}
export default Main
