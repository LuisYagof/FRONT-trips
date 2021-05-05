import './App.css';
import Homepage from './components/Homepage/Homepage'
import Detalle from './components/Detalle/Detalle'
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Onboarding from './components/Onboarding/Onboarding';
import Login from './components/Login/Login';
import SignUpStudent from './components/SignupStudent/SignupStudent';
import SignUpTeacher from './components/SignupTeacher/SignupTeacher';
import Homepage from './components/Homepage/Homepage'
import EnterApp from './components/EnterApp/EnterApp'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Onboarding} />
          <Route path="/logUser" component={Login} />
          <Route path="/newStudent" component={SignUpStudent} />
          <Route path="/newTeacher" component={SignUpTeacher} />
          <Route path="/enterApp" component={EnterApp} />
          <Route path="/homepage" component={Homepage} />
          <Route path="/cursos/:id" component={Detalle} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
