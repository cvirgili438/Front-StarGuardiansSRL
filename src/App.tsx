import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";


import "./App.css";
import Calendar from "./component/Calendar/Calendar";
import Home from "./component/Home/Home";
import LoginForm from "./component/LoginForm/LoginForm";
import NavBar from "./component/NavBar/NavBar";
import Signing from "./component/Signing/Signing";
import { AppContextProvider } from "./context/AppContext";


export type Auth = {
  user: string;
  token: string;
  authorized: Boolean;
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppContextProvider>
          <NavBar />
          <Switch>
            <Route exact path={"/"}>
              <Home/>              
            </Route>
            <Route path={'/login'} component={LoginForm} />
            <Route path={'/signing'} component={Signing} />
            <Route path={'/calendar'} component={Calendar} />
           </Switch>
        </AppContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
