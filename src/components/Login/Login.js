import { useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import fetchData from '../../hooks/Fetch'
// import Button from "../Button/Button";

const Login = () => {
    const [typeOfUser, settypeOfUser] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [text, setText] = useState("Login");
    const [functionFetch, setfunctionFetch] = useState("");
    const history = useHistory();

    useEffect(() => {
        setfunctionFetch(`logUser/${typeOfUser}`);
    })

    const StudentValue = (event)=> settypeOfUser((event.target.value));
    const TeacherValue = (event)=> settypeOfUser((event.target.value));
    const handleEmail = (event) => {
        setEmail(event.target.value)};
    const handlePass = (event) => {
        setPass(event.target.value)};
    
    const fetching = async (email, pass) => {
        let fetchOptions = {
        method: 'POST',
        headers: {
            "content-type": "application/json",
          },
        body: JSON.stringify({email: email, pass: pass})
        }
        const content = await fetchData(functionFetch, fetchOptions);
        if (content.error) {
            alert(content.error)
        }
        if (content.ok) {
            localStorage.setItem("Token", content.token)
            history.push("/Homepage");
        } else {
            alert(content.msg)
        }        
    }
    
    return (
        <form>
            <h4>Tipo de cuenta:</h4>
            <input type="radio" id="Estudiante" name="user" value="estudiantes" onClick={StudentValue} placeholder="Correo electrónico"/>
            <label for="Estudiante">Estudiante</label>
            <input type="radio" id="Docente" name="user" value="docentes" onClick={TeacherValue} placeholder="Contraseña"/>
            <label for="Docente">Docente</label>            
            <input type="email" onChange={handleEmail} />
            <input type="password" onChange={handlePass} />
            {/* <Button onClick={fetching} text={text} email={email} pass={pass} father={"login"}/> */}
            <button onClick={fetching(email, pass)}>{text}</button>
            <Link to="/newStudent">Eres nuevo? Crear cuenta</Link>
        </form>
        );

}

export default Login;