import React from 'react';
import {useState} from "react";
import Input from "../../../utils/Input/Input";
import Button from "../../../utils/Button/Button";
import TemplateForm from "../../../utils/TemplateForm/TemplateForm";

const JoinSession = () => {
    const [sessionID, setSessionID] = useState("")
    return (
        <TemplateForm>
            <Input value={sessionID} changeFunction={(e) => {setSessionID(e.target.value)}}
                   placeHolder={"Введите ID сессии"}
            />
            <Button buttonLabel={"Присоединиться"}/>
        </TemplateForm>
    );
};

export default JoinSession;
