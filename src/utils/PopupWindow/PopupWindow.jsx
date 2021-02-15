import React from 'react';
import "../../styles/popupWindow.css"

const PopupWindow = ({isActive, setIsActive, children}) => {

    return (
        <div className={`popup-window ${isActive? "popup-window__active" : ""}`}
             onClick={() => {if (isActive) setIsActive(false)}}>
            {isActive?
                <div onClick={(e) => {e.stopPropagation()}}>
                    {children}
                </div>
                : ""}
        </div>
    );
};

export default PopupWindow;
