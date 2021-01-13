import React from 'react';
import Navbar from "./Navbar/Navbar";
import AuthForm from "./AuthForm/AuthForm";
import "../../styles/app.scss"

const AuthTemplate = () => {
    return (
        <div className={"app"}>
            <Navbar/>
            <AuthForm/>
        </div>
    );
};

export default AuthTemplate;
