import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './index.css';
import App from './App';
//import Home from './components/Onboarding';
import Login from './components/Login/Login';
import SignUpStudent from './components/SignUpStudent';
import SignUpTeacher from './components/SignUpTeacher';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        {/* <Route exact path="/" component={Onboarding} /> */}
        <Route path="/logUser" component={Login} />
        <Route path="/newStudent" component={SignUpStudent} /> 
        <Route path="/newTeacher" component={SignUpTeacher} /> 
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
