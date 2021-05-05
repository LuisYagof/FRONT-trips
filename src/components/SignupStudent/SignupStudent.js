import { useState, useEffect } from 'react';
import Button from "../Button/Button";
import { Link } from 'react-router-dom';

const SignupStudent = () => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [text, setText] = useState("Registrarse");
    const [functionFetch, setfunctionFetch] = useState('/newStudent');
    const [data, setData] = useState([]);

    const handleName = (event) => {
        setName(event.target.value)};
    const handleSurname = (event) => {
        setSurname(event.target.value)};
    const handleEmail = (event) => {
        setEmail(event.target.value)};
    const handlePass = (event) => {
        setPass(event.target.value)};

    const fetching = async () => {
        let fetchOptions = {
        method: 'POST',
        body: JSON.stringify({nombre: name, apellido: surname, email, pass})
        }
        const content = await fetchData(functionFetch, fetchOptions)
        await content.ok && setData([...data, ...content.data]);
    }
    
    return (
        <form>
            <h1>REGíSTRATE COMO ESTUDIANTE</h1>
            <input className='' type="text" placeholder="Nombre" onChange={handleName} required />
            <input className='' type="text" placeholder="Apellido" onChange={handleSurname} required />
            <input className='' type="email" placeholder="Correo electrónico" onChange={handleEmail} required />
            <input className='' type="password" placeholder="Contraseña" onChange={handlePass} required />
            <Button onClick={fetching} text={text} />
            <Link to='/logUser/'>¿Ya eres usuario? <span>Iniciar sesión</span></Link>
            <Link to='/newTeacher'>¿Eres una escuela? <span>Darme de alta</span></Link>
        </form>
        );
}

export default SignupStudent;