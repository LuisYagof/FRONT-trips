import { useState, useEffect } from 'react';
import Button from "../Button/Button";
import { Link, useHistory } from 'react-router-dom';
import fetchData from '../../hooks/Fetch'

const SignupTeacher = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [text, setText] = useState("Comencemos");
    const [functionFetch, setfunctionFetch] = useState('newTeacher');
    const [data, setData] = useState([]);
    const history = useHistory();

    const handleName = (event) => {
        setName(event.target.value);
    };
    const handleEmail = (event) => {
        setEmail(event.target.value);
    };
    const handlePass = (event) => {
        setPass(event.target.value);
    };

    const fetching = async () => {
        let fetchOptions = {
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                nombre: name,
                email: email,
                pass: pass
            }),
        };
        const content = await fetchData(functionFetch, fetchOptions);
        console.log(fetchOptions);

        if (content.error) {
            alert(content.error)
        };
        if (content.ok) {
            localStorage.setItem('token', content.token);
            history.push('/EnterApp')
        } else {
            alert(content.msg)
        }
    };

    return (
        <form>
            <div>
                <image src='' alt='' />
            </div>
            <h2>Registrarse</h2>
            <div className="userType">
                <input onClick={handleUser} type="radio" name="userType" id="docente" value="docentes" />
                <label htmlFor="docente" className="label-radio docente">Docente</label>

                <input onClick={handleUser} type="radio" name="userType" id="estudiante" value="estudiantes" />
                <label htmlFor="estudiante" className="label-radio estudiante">Estudiante</label>
            </div>
            <input
                className=''
                type="text"
                placeholder="Nombre de Escuela/Profesor"
                onChange={handleName}
                required
            />
            <input
                className=''
                type="email"
                placeholder="Correo electrónico"
                onChange={handleEmail}
                required
            />
            <input
                className=''
                type="password"
                placeholder="Contraseña"
                onChange={handlePass}
                required
            />
            <Link to="/newTeacher">¿No recuerdas tu contraseña? <span className="">Recuperar</span></Link>
            <Button onClick={fetching} text={text} />
            <Link to="/newTeacher">¿Aún no estás registrado? <span className="">Crear cuenta</span></Link>
        </form>
    );
};

export default SignupTeacher;