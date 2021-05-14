import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
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
import MyFavorites from "./views/MyFavorites/MyFavorites";
import PagError from './views/PagError/PagError';
import NewCourse from "./views/NewCourse/NewCourse";
import Published from "./views/NewCourse/Publicado";
import Recuperar1 from "./views/Recuperar/Recuperar1";
import MailEnviado from "./views/Recuperar/MailEnviado";
import Actualizar from "./views/Recuperar/Actualizar";
import PassEstablecida from "./views/Recuperar/PassEstablecida";
import MyProfile from "./views/MyProfile/MyProfile";
import LoginContext from './contexts/LoginContext/LoginContext';
import fetchData from './hooks/Fetch'

function App() {
  const [verified, setVerified] = useState(false)
  const [logged, setLogged] = useState(false)
  const [userName, setUserName] = useState("")
  const [userMail, setUserMail] = useState("")
  const [userRole, setUserRole] = useState("")
  const toggleLogged = (boolean) => setLogged(boolean)
  const toggleUserName = (name) => setUserName(name)
  const toggleUserMail = (mail) => setUserMail(mail)
  const toggleUserRole = (role) => setUserRole(role)
  const logContext = {
    verified, logged, toggleLogged, userName, toggleUserName, userMail, toggleUserMail, userRole, toggleUserRole
  }

  useEffect(() => {
    fetching();
  }, [])

  const fetching = async () => {
    if (localStorage.getItem("token")) {
      let fetchOptions = {
        method: 'GET',
        headers: {
          "content-type": "application/json",
          "authorization": `Bearer: ${localStorage.getItem("token")}`,
          'Access-Control-Allow-Origin': '*'
        },
        mode: 'cors',
      }
      const content = await fetchData("verification", fetchOptions)
      if (content.error) { setVerified(true) }
      if (content.ok) {
        toggleLogged(true)
        toggleUserName(content.user.nombre)
        toggleUserMail(content.user.email)
        toggleUserRole(content.user.rol)
        setVerified(true)
      } else {
        setVerified(true)
      }
    } else {
      setVerified(true)
    }
  }

  return (
    <div className="App">
      <LoginContext.Provider value={logContext}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              {verified && logged ? <Redirect to='/dashboard' /> : <Onboarding />}
            </Route>
            <Route exact path="/1" component={Onboarding1} />
            <Route exact path="/2" component={Onboarding2} />
            <Route exact path="/3" component={Onboarding3} />
            <Route path="/login" component={Login} />
            <Route path="/registro" component={Signup} />
            <Route path="/welcome" component={EnterApp} />
            <Route path="/dashboard" component={Homepage} />
            <Route path="/cursos/:id" component={Detalle} />
            <Route path="/categorias/:categoria" component={Categoria} />
            <Route path="/review/:curso" component={Review} />
            <Route path="/review-ok" component={ReviewOk} />
            <Route path="/misFavoritos" component={MyFavorites} />
            <Route path="/nuevoCurso" component={NewCourse} />
            <Route path="/publicado" component={Published} />
            <Route path="/error" component={PagError} />
            <Route path="/recuperar" component={Recuperar1} />
            <Route path="/mailenviado" component={MailEnviado} />
            <Route path="/actualizar" component={Actualizar} />
            <Route path="/actualizada" component={PassEstablecida} />
            <Route path="/miPerfil" component={MyProfile} />
            <Route component={PagError} />
          </Switch>
        </BrowserRouter>
      </LoginContext.Provider >
    </div>
  )
}

export default App;
