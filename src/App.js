import React, {useEffect, useState} from 'react';
import './styles/app.scss'
import DrawWindow from "./components/DrawWindow/DrawWindow";
import Authentication from "./components/Auth/Authentication/Authentication";
import Registration from "./components/Auth/Registration/Registration";
import {Switch, BrowserRouter, Route, Redirect} from "react-router-dom"
import UserStore from "./store/UserStore";
import {observer} from "mobx-react-lite";


const App = observer(() => {
    const [sessionID, setSessionID] = useState("")

    // Добавить отправку запроса на сервес с созданием сессии.
    useEffect(() => {
        if (UserStore.isAuth) {
            const sessionID = `/${UserStore.username.substring(0, 3).toLowerCase()}${Date.now().toString()}`
            setSessionID(sessionID)
        }
    }, [UserStore.isAuth])

  return (
      <div className={"app"}>
          <BrowserRouter>
              {UserStore.isAuth &&
              <Switch>
                  <Route exact path={"/:uid"} component={DrawWindow}/>
                  <Redirect to={sessionID}/>
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

