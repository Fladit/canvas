import React from 'react';
import "../../../../styles/navbar.scss"
import {Link} from "react-router-dom";


const Navbar = ({headerLabel}) => {
    return (
        <div className={"navbar"}>
            {headerLabel === "Регистрация" ?
                <div className={"link"}>
                    <Link to={"/auth/login"} style={{textDecoration: "none", color: "black"}}>Авторизация</Link>
                </div>
                :
                <div className={"link"}>
                    <Link to={"/auth/registration"} style={{textDecoration: "none", color: "black"}}>Регистрация</Link>
                </div>
            }
        </div>
    );
};

export default Navbar;
