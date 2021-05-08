import React, { useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import fetchData from '../../hooks/Fetch';
import BtnRadio from '../../components/BtnRadio/BtnRadio';
import Button from "../../components/Button/Button";
import "./Login.css";

const Login = () => {
    const [typeOfUser, settypeOfUser] = useState("estudiantes");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [text, setText] = useState("Iniciar sesión");
    const [functionFetch, setfunctionFetch] = useState(`logUser/estudiantes`);
    const history = useHistory();

    useEffect(() => {
        setfunctionFetch(`logUser/${typeOfUser}`);
    }, [typeOfUser])

    const handleUser = (user) => settypeOfUser(user);
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
            history.push("/dashboard");
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
            <BtnRadio handleUser={handleUser} />

            <input type="email" onChange={handleEmail} placeholder="Email" />
            <input type="password" onChange={handlePass} placeholder="Password" />
            <Button onClick={fetching} text={text} />
            <Link to="/registro">¿Aún no estás registrado? <span className="">Crear cuenta</span></Link>
        </form>
    );
}

export default Login;