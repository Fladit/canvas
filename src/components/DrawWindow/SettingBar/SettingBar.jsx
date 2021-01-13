import React from 'react';
import "../../../styles/toolbar.scss"
import ToolStore from "../../../store/ToolStore";
import {observer} from "mobx-react-lite";

const SettingBar = observer(() => {
    const min = 1
    const max = 99

    const validateInput = (e) => {
        let number = e.target.value
        if (typeof parseInt(number) === "number") {
            number = parseInt(number)
            if (number >= min && number <= max) {
                ToolStore.setLineWidth(number)
            }
        }
    }
    return (
        <div className={"settingBar"}>
            <div style={{marginLeft: "30px", fontSize: "20px"}}> Толщина линии: </div>
            <input style={{textAlign: "center", marginLeft: "10px"}} type={"number"} min={min} max={max} value={ToolStore.lineWidth}
                   onChange={validateInput}/>
        </div>
    );
});

export default SettingBar;
