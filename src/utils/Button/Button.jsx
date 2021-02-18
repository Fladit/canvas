import React from 'react';
import "../../styles/button.css"

const Button = ({isDisabled, clickFunction, buttonLabel}) => {
    return (
        <button className={"button-auth"} disabled={isDisabled}
                onClick={clickFunction}
                onKeyPress={(e) => {handleKeyDown(e, clickFunction)}}>{buttonLabel}
        </button>
    );
};

function handleKeyDown(e, func) {
    if (e.key === "Enter")
        func()
}

export default Button;
