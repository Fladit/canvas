import React from 'react';
import "../../../../styles/navbar.scss"
import {Link} from "react-router-dom";
import {authLinks} from "../../../../api/NavbarLinks"


const AuthNavbar = ({headerLabel}) => {
    return (
        <div className={"navbar"}>
            {headerLabel === "Регистрация" ?
                <div className={"link"}>
                    <Link to={authLinks.LOGIN} style={{textDecoration: "none", color: "black"}}>Авторизация</Link>
                </div>
                :
                <div className={"link"}>
                    <Link to={authLinks.REGISTRATION} style={{textDecoration: "none", color: "black"}}>Регистрация</Link>
                </div>
            }
        </div>
    );
};

export default AuthNavbar;
