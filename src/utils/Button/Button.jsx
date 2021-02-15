import React from 'react';
import "../../styles/button.css"

const Button = ({isDisabled, clickFunction, buttonLabel}) => {
    return (
        <button className={"button-auth"} disabled={isDisabled}
                    onClick={clickFunction}>{buttonLabel}
        </button>
    );
};

export default Button;
