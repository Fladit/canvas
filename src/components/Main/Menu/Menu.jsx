import React from 'react';
import "../../../styles/authForm.css"
import Button from "../../../utils/Button/Button";
import UserStore from "../../../store/UserStore";
import axiosConfigured from "../../../utils/axiosConfigured";
import routes from "../../../utils/routes";
import {useHistory} from "react-router";

const Menu = ({setIsActive}) => {
    const history = useHistory()

    return (
        <div className={"main-box"}>
            <div style={{position: "absolute", top: "40px"}}>Canvas</div>
            <Button buttonLabel={"Создать сессию"} clickFunction={() => {createSession(history)}}/>
            <Button buttonLabel={"Присоединиться"} clickFunction={(e) =>
            { e.stopPropagation(); setIsActive(true)}}/>
        </div>
    );
};

const createSession = async (history) => {
    try {
        const sessionID = `${UserStore.username.substring(0, 3).toLowerCase()}${Date.now().toString()}`
        const response = await axiosConfigured.post(routes.CREATE_CANVAS, {sessionID},
            {headers: {authorization: `Bearer ${localStorage.getItem("token")}`}})
        history.push(`/${sessionID}`)
    }
    catch (e) {
        localStorage.setItem("token", "")
        UserStore.setUsername("")
        alert(e.response.data.message)
    }

}


export default Menu;
