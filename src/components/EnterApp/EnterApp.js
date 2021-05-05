import { useState, useEffect } from 'react';
// import Button from "../Button/Button";
// import { Link } from 'react-router-dom';

const EnterApp = () => {
    const [text, setText] = useState("Abrir App");
   
    return (
        <>
            <div>--------------------IMAGEN ICONO-------------------</div>
            <h1>CUENTA CREADA CORRECTAMENTE</h1>
            <Link to="/Homepage">
                <button className="largeButton">{text}</button>
            </Link>
        </>
        );
}

export default EnterApp;