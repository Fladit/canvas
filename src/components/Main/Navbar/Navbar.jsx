import React from 'react';
import "../../../styles/navbar.css"
import NavbarLink from "../../../utils/NavbarLink/NavbarLink";
import {mainLinks} from "../../../api/NavbarLinks"


const Navbar = () => {
    return (
        <div className={"navbar navbar-center"}>
            <NavbarLink path={mainLinks.MAIN.path} label={mainLinks.MAIN.label}/>
            <NavbarLink path={mainLinks.OPTIONS.path} label={mainLinks.OPTIONS.label}/>
        </div>
    );
};

export default Navbar;
