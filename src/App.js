import React from 'react';
import './styles/app.scss'
import AuthTemplate from "./components/AuthTemplate/AuthTemplate";
import DrawWindow from "./components/DrawWindow/DrawWindow";

const App = () => {
  return (
      <div className={"app"}>
          <AuthTemplate/>
      </div>
  );
};

export default App;
