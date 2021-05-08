import { useState, useEffect } from 'react';
// import Button from "../../components/Button/Button";
import { Link } from 'react-router-dom';

const EnterApp = () => {
    const [text, setText] = useState("Abrir App");
   
    return (
        <>
            <div>--------------------IMAGEN ICONO-------------------</div>
            <h2>Cuenta creada <span>correctamente</span></h2>
            {/* <Link to="/dashboard">
                <button className="largeButton">{text}</button>
            </Link> */}
            <div>--------------------SPINER-------------------</div>
            <p>Preparando tu experiencia educativa</p>
        </>
        );
}

export default EnterApp;