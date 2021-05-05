import { useState, useEffect } from 'react';
import Button from "../Button/Button";
import { Link } from 'react-router-dom';

const SignupTeacher = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [text, setText] = useState("Registrarse");
    const [functionFetch, setfunctionFetch] = useState('/newTeacher');

    const handleName = (event) => {
        setName(event.target.value)};
    const handleEmail = (event) => {
        setEmail(event.target.value)};
    const handlePass = (event) => {
        setPass(event.target.value)};
    
    return (
        <form>
            <h1>REGISTRA TU ESCUELA</h1>
            <input className='' type="text" placeholder="Nombre de Escuela/Profesor" onChange={handleName} required />
            <input className='' type="email" placeholder="Correo electrónico" onChange={handleEmail} required />
            <input className='' type="password" placeholder="Contraseña" onChange={handlePass} required />
            <Button 
                text={text} 
                functionFetch={functionFetch}
                name={name}
                email={email}
                pass={pass}
            />
            <Link to='/logUser/'>¿Ya eres usuario? <span>Iniciar sesión</span></Link>
        </form>
        );
}

export default SignupTeacher;