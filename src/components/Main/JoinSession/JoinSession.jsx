import React from 'react';
import {useState} from "react";
import Input from "../../../utils/Input/Input";
import Button from "../../../utils/Button/Button";
import TemplateForm from "../../../utils/TemplateForm/TemplateForm";
import {joinSession} from "../../../utils/canvas-session-logic";
import {useHistory} from "react-router";

const JoinSession = () => {
    const [sessionID, setSessionID] = useState("")
    const history = useHistory()

    return (
        <TemplateForm>
            <Input value={sessionID} changeFunction={(e) => {setSessionID(e.target.value)}}
                   placeHolder={"Введите ID сессии"}
            />
            <Button buttonLabel={"Присоединиться"} clickFunction={() => {joinSession(sessionID, history)}}/>
        </TemplateForm>
    );
};

export default JoinSession;
