import React, { useState } from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login.js";
import { useStateValue } from "./StateProvider";

function App() {
  const [ {user} , dispatch] = useStateValue();
  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <div className="app-body">
          <Router>
            <Switch>
              <Route path="/rooms/:roomId">
                {/* sidebar */}
                <Sidebar />
                {/* chat*/}
                <Chat />
              </Route>
              <Route path="/">
                <Sidebar />
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
