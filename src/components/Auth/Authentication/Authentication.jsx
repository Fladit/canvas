import React from 'react';
import AuthTemplate from "../AuthTemplate/AuthTemplate";
import {login} from "../authLogic";

const Authentication = () => {
    return (
        <div>
            <AuthTemplate headerLabel = {"Войдите, чтобы продолжить"} buttonLabel = {"Войти"} authFunc={login}/>
        </div>
    );
};

export default Authentication;
