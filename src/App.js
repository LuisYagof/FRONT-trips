import './App.css';
import Homepage from './components/Homepage/Homepage'
import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//import Home from './components/Onboarding';
import Login from './components/Login/Login';
import SignUpStudent from './components/SignupStudent/SignupStudent';
import SignUpTeacher from './components/SignupTeacher/SignupTeacher';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {/* <Route exact path="/" component={Onboarding} /> */}
          <Route path="/logUser" component={Login} />
          <Route path="/newStudent" component={SignUpStudent} />
          <Route path="/newTeacher" component={SignUpTeacher} />
          <Route path="/homepage" component={Homepage} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
