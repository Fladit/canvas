import React from 'react';
import "../../../../styles/authForm.scss"
import {validationEnum, useAuthInput} from "../../../../hooks/useAuthInput";

const usernameValidationRules = {[validationEnum.MIN_LENGTH]: 3, [validationEnum.MAX_LENGTH]: 24}
const passwordValidationRules = {[validationEnum.MIN_LENGTH]: 6, [validationEnum.MAX_LENGTH]: 63}

const AuthForm = ({headerLabel, buttonLabel}) => {

    const username = useAuthInput("", usernameValidationRules)
    const password = useAuthInput("", passwordValidationRules)

    return (
        <div className={"authForm"}>
            <div className={"mainBox"}>
                <div>{headerLabel}</div>
                <input className={`${username.errorMessage? "input-error": ""}`} placeholder={"Введите логин..."} value={username.value}
                       onChange={username.onChange}/>
                {username.errorMessage && <div className={"error-message"}>{username.errorMessage}</div>}
                <input className={`${passwordClassNames(username.errorMessage, password.errorMessage)}`} placeholder={"Введите пароль..."} value={password.value}
                       onChange={password.onChange}/>
                {password.errorMessage && <div className={"error-message"}>{password.errorMessage}</div>}
                <button disabled={username.errorMessage || password.errorMessage || !username.value || !password.value}>{buttonLabel}</button>
            </div>
        </div>
    );
};

const passwordClassNames = (hasUsernameError, hasPasswordError) => {
    if (hasUsernameError) {
        if (hasPasswordError) {
            console.log("has")
            return "input-password-if-username-error input-error-password" }
        return "input-password-if-username-error"
    }
    else if (hasPasswordError) {
        return "input-error-password"
    }
    return ""
}
export default AuthForm;
