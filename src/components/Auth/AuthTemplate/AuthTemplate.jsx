import React from 'react';
import Navbar from "./Navbar/Navbar";
import AuthForm from "./AuthForm/AuthForm";
import "../../../styles/app.scss"

const AuthTemplate = ({headerLabel, buttonLabel, authFunc}) => {
    return (
        <div className={"app"}>
            <Navbar headerLabel={headerLabel}/>
            <AuthForm headerLabel = {headerLabel} buttonLabel = {buttonLabel} authFunc={authFunc}/>
        </div>
    );
};

export default AuthTemplate;
