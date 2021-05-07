import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import { Link, useHistory } from "react-router-dom";
import fetchData from "../../hooks/Fetch";

const SignupStudent = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [text, setText] = useState("Comencemos");
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

  const fetching = async () => {
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
      <div>
        <image src='' alt=''/>
      </div>
      <h2>Registrarse</h2>
      <div className="userType">
        <input onClick={handleUser} type="radio" name="userType" id="docente" value="docentes" />
        <label htmlFor="docente" className="label-radio docente">Docente</label>

        <input onClick={handleUser} type="radio" name="userType" id="estudiante" value="estudiantes" />
        <label htmlFor="estudiante" className="label-radio estudiante">Estudiante</label>
      </div>
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
        placeholder="Email"
        onChange={handleEmail}
        required
      />
      <input
        className=""
        type="Password"
        placeholder="Contraseña"
        onChange={handlePass}
        required
      />
      <Link to="/newStudent">¿No recuerdas tu contraseña? <span className="">Recuperar</span></Link>
      <Button onClick={fetching} text={text} />
      {/* <button type="button" onClick={() => fetching(name, surname, email, pass)} >
        {text}
      </button> */}
      <Link to="/newStudent">¿Aún no estás registrado? <span className="">Crear cuenta</span></Link>
    </form>
  );
};

export default SignupStudent;
