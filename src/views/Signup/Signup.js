import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button/Button";
import BtnRadio from "../../components/BtnRadio/BtnRadio";
import eyeOff from "../../assets/icons/eyeOff.svg";
import eyeOn from "../../assets/icons/eyeOn.svg";
import fetchData from "../../hooks/Fetch";
import Registro from '../../assets/img/Registro.png'
import './Signup.css'
import LoginContext from '../../contexts/LoginContext/LoginContext';

const Signup = () => {
  const history = useHistory();
  const loginContext = useContext(LoginContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [eye, setEye] = useState(true);
  const [functionFetch, setfunctionFetch] = useState("newStudent");

  const handleUser = (user) => setfunctionFetch(user === 'estudiantes' ? 'newStudent' : 'newTeacher');

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePass = (event) => {
    setPass(event.target.value);
  };

  const fetching = async () => {
    let fetchOptions = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        nombre: name,
        email: email,
        pass: pass
      }),
    };
    const content = await fetchData(functionFetch, fetchOptions);
    if (content.error) {
      alert(content.error)
    }
    if (content.ok) {
      localStorage.setItem('token', content.token);
      loginContext.toggleLogged(true)
      loginContext.toggleUserName(content.user.nombre)
      loginContext.toggleUserMail(content.user.email)
      loginContext.toggleUserRole(content.user.rol)
      history.push('/welcome')
    } else {
      alert(content.msg)
    }
  };

  const changeEye = () => {
    setEye(!eye)
  }

  return (
    <form className="formVH">
      <div className="imgBoxVH">
        <img src={Registro} alt='' />
      </div>
      <h2>Registrarse</h2>
      <BtnRadio handleUser={handleUser} />
      <input
        className='textPlaceholder'
        type="text"
        placeholder={functionFetch === 'newStudent' ? "Nombre y Apellido" : "Nombre de Escuela/Profesor"}
        onChange={handleName}
        minLength="4"
        maxLength="36"
        required
      />
      <input
        className='textPlaceholder'
        type="email"
        placeholder="Email"
        onChange={handleEmail}
        maxLength="80"
        required
      />
      <div className='passwordEye'>
        <input
          className='textPlaceholder'
          type={eye ? "password" : "text"}
          placeholder="Password"
          onChange={handlePass}
          minLength="8"
          maxLength="50"
          required
        />
        <img className='eyeOff' src={eye ? eyeOff : eyeOn} onClick={changeEye} alt='' />
      </div>
      <p>¿No recuerdas tu contraseña? <span className="linkSpan green" onClick={() => history.push('/recuperar')}>Recuperar</span></p>
      <Button onClick={fetching} text={"Comencemos"} />
      <p>¿Ya tienes cuenta? <span className="linkSpan" onClick={() => history.push('/login')}>Iniciar sesión</span></p>
    </form>
  );
};

export default Signup;