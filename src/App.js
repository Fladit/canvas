import React, {useEffect, useState} from 'react';
import './styles/app.scss'
import DrawWindow from "./components/DrawWindow/DrawWindow";
import Authentication from "./components/Auth/Authentication/Authentication";
import Registration from "./components/Auth/Registration/Registration";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom"
import UserStore from "./store/UserStore";
import {observer} from "mobx-react-lite";
import {bindInterceptors, unbindInterceptors} from "./utils/axiosConfigured";
import Main from "./components/Main/Main";


const App = observer(() => {

    useEffect(() => {
        const token = localStorage.getItem("token")
        const refresh = localStorage.getItem("refresh")
        if (token && refresh)
            bindInterceptors(token, refresh)
            UserStore.authentication().catch(err => {
                console.log("APP catch", err)
                alert(err.response.data.message)
                unbindInterceptors()
            })
    }, [])

  return (
      <div className={"app"}>
              {UserStore.isAuth &&
              <Switch>
                  <Route exact path={"/"} component={Main}/>
                  <Route exact path={"/:uid"} component={DrawWindow}/>
                  <Redirect to={"/"}/>
              </Switch>
              }

              {!UserStore.isAuth &&
              <Switch>
                  <Route exact path={"/auth/login"} component={Authentication}/>
                  <Route exact path={"/auth/registration"} component={Registration}/>
                  <Redirect to={"/auth/login"}/>
              </Switch>}
      </div>
  );
});

export default App;

