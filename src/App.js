import './App.css';
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Login} />
          </Switch>
        </BrowserRouter>
    </div>
  )
}

export default App;
