import { useState, useEffect } from 'react';
import Button from "../Button/Button";
import { useHistory } from 'react-router-dom';

const EnterApp = () => {
    const [text, setText] = useState("Cerrar");
    const history = useHistory();

    function goBack() {
        history.push("/IR A CURSO??????????????");
      }
   
    return (
        <>
            <div>--------------------IMAGEN ICONO Ok-------------------</div>
            <h1>Opinión publicada correctamente</h1>
            <Button onClick={goBack} text={text} />
        </>
        );
    }

export default EnterApp;