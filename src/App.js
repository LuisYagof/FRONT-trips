import './App.css';
import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//import Home from './components/Onboarding';
import Login from './components/Login/Login';
//import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
            {/* <Route exact path="/" component={Onboarding} /> */}
            <Route path="/login" component={Login} />
            {/* <Route path="/signup" component={SignUp} /> */}
          </Switch>
        </BrowserRouter>
    </div>
  )
}

export default App;
