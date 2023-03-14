import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import Home from "./component/Home/Home";
import { AppContextProvider } from "./context/AppContext";
import { useLocalStorage } from "./hooks/useApp";

type Auth = {
  user:string,
  token:string
}

function App() {
  const [user,setUser] = useLocalStorage<Auth>('User',Object)
 
  console.log(user)
  return (
    <div className="App">
      <BrowserRouter>
        <AppContextProvider>
          <Switch>
            <Route>
              {/* {user.user === null && user.token === null ?

               } */}
              <Home />
            </Route>
          </Switch>
        </AppContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
