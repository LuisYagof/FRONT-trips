import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Homepage from './views/Homepage/Homepage'
import Detalle from './views/Detalle/Detalle'
import Onboarding from './views/Onboarding/Onboarding';
import Onboarding1 from './views/Onboarding/Onboarding1';
import Onboarding2 from './views/Onboarding/Onboarding2';
import Onboarding3 from './views/Onboarding/Onboarding3';
import Login from './views/Login/Login';
import Signup from './views/Signup/Signup';
import EnterApp from './views/EnterApp/EnterApp'
import Categoria from './views/Categoria/Categoria'
import Review from './views/Review/Review'
import ReviewOk from './views/ReviewOk/ReviewOk'
import SearchAll from "./views/SearchAll/SearchAll";
import MyFavorites from "./views/MyFavorites/MyFavorites";
import PagError from './views/PagError/PagError';
import NewCourse from "./views/NewCourse/NewCourse";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Onboarding} />
          <Route exact path="/1" component={Onboarding1} />
          <Route exact path="/2" component={Onboarding2} />
          <Route exact path="/3" component={Onboarding3} />
          <Route path="/login" component={Login} />
          <Route path="/registro" component={Signup} />
          <Route path="/welcome" component={EnterApp} />
          <Route path="/dashboard" component={Homepage} />
          <Route path="/cursos/:id" component={Detalle} />
          <Route path="/categorias/:categoria" component={Categoria} />
          {/* <Route path="/filter"  component={Filter} /> */}
          <Route path="/review/:curso" component={Review} />
          <Route path="/review-ok" component={ReviewOk} />
          <Route path="/resultadoBusqueda" component={SearchAll} />
          <Route path="/misFavoritos" component={MyFavorites} />
<<<<<<< HEAD
          <Route path="/pagError" component={PagError} />
=======
          <Route path="/nuevoCurso" component={NewCourse} />
>>>>>>> Login
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
