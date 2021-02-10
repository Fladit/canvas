import React from 'react';
import AuthNavbar from "./Navbar/AuthNavbar";
import AuthForm from "./AuthForm/AuthForm";
import "../../../styles/app.scss"

const AuthTemplate = ({headerLabel, buttonLabel, authFunc}) => {
    return (
        <div className={"app"}>
            <AuthNavbar headerLabel={headerLabel}/>
            <AuthForm headerLabel = {headerLabel} buttonLabel = {buttonLabel} authFunc={authFunc}/>
        </div>
    );
};

export default AuthTemplate;
