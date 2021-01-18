import React, {useEffect} from 'react';
import './styles/app.scss'
import DrawWindow from "./components/DrawWindow/DrawWindow";
import Authentication from "./components/Auth/Authentication/Authentication";
import Registration from "./components/Auth/Registration/Registration";
import {Switch, BrowserRouter, Route, Redirect} from "react-router-dom"
import UserStore from "./store/UserStore";
import {observer} from "mobx-react-lite";


const App = observer(() => {

  return (
      <div className={"app"}>
          <BrowserRouter>
              {UserStore.isAuth &&
              <Switch>
                  <Route exact path={"/:uid"} component={DrawWindow}/>
                  <Redirect to={`/${UserStore.username[0]}${Date.now().toString()}`}/>
              </Switch>}

              {!UserStore.isAuth &&
              <Switch>
                  <Route exact path={"/login"} component={Authentication}/>
                  <Route exact path={"/registration"} component={Registration}/>
                  <Redirect to={"/login"}/>
              </Switch>}
          </BrowserRouter>
      </div>
  );
});

export default App;

