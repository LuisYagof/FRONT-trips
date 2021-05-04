import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './index.css';
import App from './App';
//import Home from './components/Onboarding';
import Login from './components/Login/Login';
//import SignUp from './components/SignUp';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        {/* <Route exact path="/" component={Onboarding} /> */}
        <Route path="/login" component={Login} />
        {/* <Route path="/signup" component={SignUp} /> */}
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
