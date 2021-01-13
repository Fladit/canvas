import React from 'react';
import "../../../styles/authForm.scss"

const AuthForm = () => {
    return (
        <div className={"authForm"}>
            <div className={"mainBox"}>
                <div>Регистрация</div>
                <input placeholder={"Введите логин..."}/>
                <input placeholder={"Введите пароль..."}/>
            </div>
        </div>
    );
};

export default AuthForm;
