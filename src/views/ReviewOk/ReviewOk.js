import { useState, useEffect } from 'react';
import Button from "../../components/Button/Button";
import { useHistory } from 'react-router-dom';

const EnterApp = () => {
    const [text, setText] = useState("Cerrar");
    const history = useHistory();

    function goBack() {
        history.go(-2);
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