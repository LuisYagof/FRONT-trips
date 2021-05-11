import React, { useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import fetchData from '../../hooks/Fetch';
import BtnRadio from '../../components/BtnRadio/BtnRadio';
import Button from "../../components/Button/Button";
import "./Login.css";
import Login1 from '../../assets/img/Login1.png';
import eyeOff from "../../assets/icons/eyeOff.svg";
import eyeOn from "../../assets/icons/eyeOn.svg";

const Login = () => {
    const [typeOfUser, settypeOfUser] = useState("estudiantes");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [text, setText] = useState("Iniciar sesión");
    const [eye, setEye] = useState(true);
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

    const changeEye = () => {
        setEye(!eye)
      }

    return (
        <form className="formVH">
            <div className="imgBoxVH">
                <img src={Login1} alt='' />
            </div>
            <h2>Iniciar Sesión</h2>
            <BtnRadio handleUser={handleUser} />

            <input
                type="email"
                onChange={handleEmail}
                placeholder="Email"
            />
            <div className='passwordEye'>
                <input
                    className=""
                    type={eye ? "password" : "text"} 
                    placeholder="Password"
                    onChange={handlePass}
                    required
                />
                <img className='eyeOff' src={eye ? eyeOff : eyeOn} onClick={ changeEye } alt='' />
             </div>
            {/* <Link to="/recuperar">¿No recuerdas tu contraseña? <span className="">Recuperar</span></Link> */}
            <Button onClick={fetching} text={text} />
            <p> ¿Aún no estás registrado? <span className="linkSpan" onClick={() => history.push('/registro')}>Crear cuenta</span></p>
        </form>
    );
}

export default Login;