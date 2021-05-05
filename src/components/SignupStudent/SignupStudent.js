import { useState, useEffect } from 'react';
import Button from "../components/Button";
import { Link } from 'react-router-dom';

const SignupStudent = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [text, setText] = useState("Registrarse");
    const [functionFetch, setfunctionFetch] = useState('/newStudent');

    const handleName = (event) => {
        if(!name) return;
        setName(event.target.value)};
    const handleEmail = (event) => {
        if(!email) return;
        setEmail(event.target.value)};
    const handlePass = (event) => {
        if(!pass) return;
        setPass(event.target.value)};
    
    return (
        <form>
            <h1>REGíSTRATE COMO ESTUDIANTE</h1>
            <input className='' type="text" placeholder="Nombre y apellidos" onChange={handleName} />
            <input className='' type="email" placeholder="Correo electrónico" onChange={handleEmail} />
            <input className='' type="password" placeholder="Contraseña" onChange={handlePass} />
            <Button
                text={text} 
                functionFetch={functionFetch}
                name={name}
                email={email}
                pass={pass}
            />
            <Link to='/logUser/'>¿Ya eres usuario? <span>Iniciar sesión</span></Link>
            <Link to='/newTeacher'>¿Eres una escuela? <span>Darme de alta</span></Link>
        </form>
        );
}

export default SignupStudent;