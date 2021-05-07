import React, { useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import fetchData from '../../hooks/Fetch';
import Button from "../Button/Button";
import "./Login.css";

const Login = () => {
    const [typeOfUser, settypeOfUser] = useState("estudiantes");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [text, setText] = useState("Iniciar sesión");
    const [functionFetch, setfunctionFetch] = useState("");
    const [checked, setChecked] = useState(false);
    const history = useHistory();

    useEffect(() => {
        setfunctionFetch(`logUser/${typeOfUser}`);
    })

    const StudentValue = (event)=> {settypeOfUser((event.target.value))};
    const TeacherValue = (event)=> settypeOfUser((event.target.value));
    const handleEmail = (event) => {
        setEmail(event.target.value)};
    const handlePass = (event) => {
        setPass(event.target.value)};

    const triggerChecked = () => {
        setChecked (!checked)
    }
    
    const fetching = async () => {
        let fetchOptions = {
        method: 'POST',
        headers: {
            "content-type": "application/json",
          },
        body: JSON.stringify({email: email, pass: pass})
        }
        const content = await fetchData(functionFetch, fetchOptions)
        if (content.error){alert(content.error)}
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
                <image src='' alt=''/>
            </div>
            <h2>Iniciar sesión</h2>
            <div>
                <button className = {typeOfUser !== 'estudiantes' ? 'rolBtnChecked' : 'rolBtnUnchecked'} type="radio" id="Estudiante" name="user" value="estudiantes" onClick={StudentValue} >Estudiante</button>
                
                <button type="radio" id="Docente" name="user" value="docentes" onClick={TeacherValue}>Escuela</button>
            </div>
            {/* <div>
                <input type="radio" id="Estudiante" name="user" value="estudiantes" onClick={StudentValue} checked/>
                <label htmlFor="Estudiante">Estudiante</label>
            </div>
            <div>
                <input type="radio" id="Docente" name="user" value="docentes" onClick={TeacherValue}/>
                <label htmlFor="Docente">Docente</label>            
            </div> */}
            <input type="email" onChange={handleEmail} placeholder="Email"/>
            <input type="password" onChange={handlePass} placeholder="Password"/>
            <Button onClick={fetching} text={text}/>
            {/* <button type="button" onClick={()=>fetching(email, pass)}>{text}</button> */}
            <Link to="/newStudent">¿Aún no estás registrado? <span className="">Crear cuenta</span></Link>
        </form>
    );
}

export default Login;