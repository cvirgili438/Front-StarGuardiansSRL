import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import Home from "./component/Home/Home";
import LoginForm from "./component/LoginForm/LoginForm";
import NavBar from "./component/NavBar/NavBar";
import { AppContextProvider } from "./context/AppContext";
import { useLocalStorage } from "./hooks/useApp";

type Auth = {
  user: string;
  token: string;
};

function App() {
  const [user, setUser] = useLocalStorage<Auth>("User", Object);

  return (
    <div className="App">
      <BrowserRouter>
        <AppContextProvider>
          <NavBar />
          <Switch>
            <Route exact path={'/'}>
              {Object.keys(user).length <= 1 ?
                <LoginForm/>
                : <Home />
               }              
            </Route>
          </Switch>
        </AppContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
