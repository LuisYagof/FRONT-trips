import { useState, useEffect } from 'react';
import Button from "../components/Button";

const Login = () => {
    const [typeOfUser, settypeOfUser] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [text, setText] = useState("Login");
    const [functionFetch, setfunctionFetch] = useState("");

    useEffect(() => {
        setfunctionFetch(`/logUser/${typeOfUser}`);
    })

    const StudentValue = (event)=> settypeOfUser((event.target.value));
    const TeacherValue = (event)=> settypeOfUser((event.target.value));
    const handleEmail = (event) => {
        event.preventDefault();
        if(!email) return;    
        setEmail(event.target.value)};
    const handlePass = (event) => {
        event.preventDefault();
        if(!pass) return;
        setPass(event.target.value)};
    
    return (
        <form>
            <h4>Tipo de cuenta:</h4>
            <input type="radio" id="Estudiante" name="user" value="estudiantes" onClick={StudentValue}/>
            <label for="Estudiante">Estudiante</label>
            <input type="radio" id="Docente" name="user" value="docentes" onClick={TeacherValue}/>
            <label for="Docente">Docente</label>            
            <input type="email" onChange={handleEmail} />
            <input type="password" onChange={handlePass} />
            <Button 
                text={text} 
                functionFetch={functionFetch}
                email={email}
                pass={pass}
            />
        </form>
        );

}

export default Login;