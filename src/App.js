import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Homepage from './views/Homepage/Homepage'
import Detalle from './views/Detalle/Detalle'
import Onboarding from './views/Onboarding/Onboarding';
import Login from './views/Login/Login';
import Signup from './views/Signup/Signup';
import EnterApp from './views/EnterApp/EnterApp'
import Categoria from './views/Categoria/Categoria'
import Modals from './components/Modals/Modals'
import Review from './views/Review/Review'
import ReviewOk from './views/ReviewOk/ReviewOk'
import SearchAll from "./views/SearchAll/SearchAll";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Onboarding} />
          <Route path="/login" component={Login} />
          <Route path="/registro" component={Signup} />
          <Route path="/welcome" component={EnterApp} />
          <Route path="/dashboard" component={Homepage} />
          <Route path="/cursos/:id" component={Detalle} />
          <Route path="/categorias/:categoria" component={Categoria} />
          <Route exact path="/modals"  component={Modals} />
          <Route path="/review/:curso" component={Review} />
          <Route path="/review-ok" component={ReviewOk} />
          <Route path="/resultadoBusqueda" component={SearchAll} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
