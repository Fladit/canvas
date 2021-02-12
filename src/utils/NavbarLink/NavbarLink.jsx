import React from 'react';
import {Link} from "react-router-dom";
import "../../styles/navbar.css"

const NavbarLink = ({path, label}) => {
    return (
        <div className={"link"}>
            <Link to={path} style={{textDecoration: "none", color: "black"}}>{label}</Link>
        </div>
    );
};

export default NavbarLink;
