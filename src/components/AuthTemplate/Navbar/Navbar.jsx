import React from 'react';
import "../../../styles/navbar.scss"


const Navbar = () => {
    return (
        <div className={"navbar"}>
            <div className={"link"}>Авторизация</div>
            <div className={"link"}>Регистрация</div>
        </div>
    );
};

export default Navbar;
