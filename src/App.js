import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Homepage from './components/Homepage/Homepage'
import Detalle from './components/Detalle/Detalle'
import Onboarding from './components/Onboarding/Onboarding';
import Login from './components/Login/Login';
import SignUpStudent from './components/SignupStudent/SignupStudent';
import SignUpTeacher from './components/SignupTeacher/SignupTeacher';
import EnterApp from './components/EnterApp/EnterApp'
import Categoria from './components/Categoria/Categoria'
import Modals from './components/Modals/Modals'
import Review from './components/Review/Review'
import SearchAll from './components/SearchAll/SearchAll'

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
          <Route path="/categorias/:categoria" component={Categoria} />
          <Route exact path="/modals"  component={Modals} />
          <Route path="/newReview/:curso" component={Review} />
          <Route path="/resultadoBusqueda" component={SearchAll} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
