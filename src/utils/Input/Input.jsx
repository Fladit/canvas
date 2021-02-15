import React from 'react';
import "../../styles/input.css"

const Input = ({value, changeFunction, placeHolder}) => {
    return (
        <input className={"input-component"} placeholder={placeHolder} value={value}
               onChange={changeFunction}/>
    );
};

export default Input;
