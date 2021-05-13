import React, { useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import fetchData from '../../hooks/Fetch';
import BtnRadio from '../../components/BtnRadio/BtnRadio';
import Button from "../../components/Button/Button";
import "./PreviaRecuPass.css";
import Recuperar2 from '../../assets/img/Recuperar2.png'
import Arrow from '../../assets/icons/Arrow.svg'

const PreviaRecuPass = () => {
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
        
        <form className="formVH">
            <div className='onboardingHeader'>
          <img className="arrowOnboarding" src={Arrow} onClick={() => history.push('/login')} alt='' />
        </div>
            <div className="imgBoxVH">
            
                <img src={Recuperar2} alt='' />
            </div>
            <h2>Iniciar Sesión</h2>
            <BtnRadio handleUser={handleUser} />
            <p className="textPresentation">Escribe el correo electrónico con el que registraste tu cuenta y te enviaremos un link de recuperación.</p>
            <input type="email" onChange={handleEmail} placeholder="Email" />
            <Button class="ButtonPRevia" onClick={fetching} text={text} />
        </form>
    );
}

export default PreviaRecuPass;