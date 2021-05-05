import React, { useState, useEffect } from "react";
// import Button from "../Button/Button";
import { Link, useHistory } from "react-router-dom";
import fetchData from "../../hooks/Fetch";

const SignupStudent = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [text, setText] = useState("Registrarse");
  const [functionFetch, setfunctionFetch] = useState("newStudent");
  const [data, setData] = useState([]);
  const history = useHistory();

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleSurname = (event) => {
    setSurname(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePass = (event) => {
    setPass(event.target.value);
  };

  const fetching = async (name, surname, email, pass) => {
    let fetchOptions = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        nombre: name,
        apellido: surname,
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
     history.push('/EnterApp')
    } else {
        alert(content.msg)
    }
  };

  return (
    <form>
      <h1>REGíSTRATE COMO ESTUDIANTE</h1>
      <input
        className=""
        type="text"
        placeholder="Nombre"
        onChange={handleName}
        required
      />
      <input
        className=""
        type="text"
        placeholder="Apellido"
        onChange={handleSurname}
        required
      />
      <input
        className=""
        type="email"
        placeholder="Correo electrónico"
        onChange={handleEmail}
        required
      />
      <input
        className=""
        type="password"
        placeholder="Contraseña"
        onChange={handlePass}
        required
      />
      {/* <Button onClick={fetching} text={text} /> */}
      <button type="button" onClick={() => fetching(name, surname, email, pass)} >
        {text}
      </button>
      <Link to="/logUser/">
        ¿Ya eres usuario? <span className="">Iniciar sesión</span>
      </Link>
      <Link to="/newTeacher">
        ¿Eres una escuela? <span className="">Darme de alta</span>
      </Link>
    </form>
  );
};

export default SignupStudent;
