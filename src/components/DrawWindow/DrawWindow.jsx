import React from 'react';
import Canvas from "./Canvas/Canvas";
import Toolbar from "./Toolbar/Toolbar";
import SettingBar from "./SettingBar/SettingBar";

const DrawWindow = () => {
    return (
        <div>
            <Toolbar/>
            <SettingBar/>
            <Canvas/>
        </div>
    );
};

export default DrawWindow;
