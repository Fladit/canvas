import React from 'react';
import AuthTemplate from "../AuthTemplate/AuthTemplate";
import {registration} from "../authLogic";

const Registration = () => {
    return (
        <div>
            <AuthTemplate headerLabel = {"Регистрация"} buttonLabel={"Зарегистрироваться"} authFunc={registration}/>
        </div>
    );
};

export default Registration;
