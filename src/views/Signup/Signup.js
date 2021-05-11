import React, { useState, useEffect } from "react";
import Button from "../../components/Button/Button";
import BtnRadio from "../../components/BtnRadio/BtnRadio";
import { useHistory } from "react-router-dom";
import fetchData from "../../hooks/Fetch";
import Registro from '../../assets/img/Registro.png'
import './Signup.css'

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [text, setText] = useState("Comencemos");
  const [functionFetch, setfunctionFetch] = useState("newStudent");
  const history = useHistory();

  const handleUser = (user) => setfunctionFetch(user == 'estudiantes' ? 'newStudent' : 'newTeacher');

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
      history.push('/welcome')
    } else {
      alert(content.msg)
    }
  };

  return (
    <form className="formVH">
      <div className="imgBoxVH">
        <img src={Registro} alt='' />
      </div>
      <h2>Registrarse</h2>
      <BtnRadio handleUser={handleUser} />
      <input
        className=""
        type="text"
        placeholder={functionFetch == 'newStudent' ? "Nombre y Apellido" : "Nombre de Escuela/Profesor"}
        onChange={handleName}
        required
      />
      <input
        className=""
        type="email"
        placeholder="Email"
        onChange={handleEmail}
        required
      />
      <input
        className=""
        type="Password"
        placeholder="Password"
        onChange={handlePass}
        required
      />
      {/* <p>¿No recuerdas tu contraseña? <span className="linkSpan" onClick={() => history.push('/login')}>Iniciar sesión</span></p> */}
      <Button onClick={fetching} text={text} />
      <p>¿Ya tienes cuenta? <span className="linkSpan" onClick={() => history.push('/login')}>Iniciar sesión</span></p>
    </form>
  );
};

export default Signup;