import React, { useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import fetchData from '../../hooks/Fetch';
import Button from "../Button/Button";
import "./Login.css";

const Login = () => {
    const [typeOfUser, settypeOfUser] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [text, setText] = useState("Iniciar sesión");
    const [functionFetch, setfunctionFetch] = useState(`logUser/${typeOfUser}`);
    const history = useHistory();

    useEffect(() => {
        setfunctionFetch(`logUser/${typeOfUser}`);
    }, [typeOfUser])

    const handleUser = (event) => settypeOfUser((event.target.value));
    const handleEmail = (event) => {
        setEmail(event.target.value)
    };
    const handlePass = (event) => {
        setPass(event.target.value)
    };

    const fetching = async () => {
        let fetchOptions = {
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ email: email, pass: pass })
        }
        const content = await fetchData(functionFetch, fetchOptions)
        if (content.error) { alert(content.error) }
        if (content.ok) {
            localStorage.setItem("token", content.token)
            history.push("/Homepage");
        } else {
            alert(content.msg)
        }
    }

    return (
        <form>
            <div>
                <image src='' alt='' />
            </div>
            <h2>Iniciar Sesión</h2>
            <div className="userType">
                <input onClick={handleUser} type="radio" name="userType" id="docente" value="docentes" />
                <label htmlFor="docente" className="label-radio docente">Docente</label>

                <input onClick={handleUser} type="radio" name="userType" id="estudiante" value="estudiantes" />
                <label htmlFor="estudiante" className="label-radio estudiante">Estudiante</label>
            </div>

            <input type="email" onChange={handleEmail} placeholder="Email" />
            <input type="password" onChange={handlePass} placeholder="Password" />
            <Button onClick={fetching} text={text} />
            <Link to="/newStudent">¿Aún no estás registrado? <span className="">Crear cuenta</span></Link>
        </form>
    );
}

export default Login;