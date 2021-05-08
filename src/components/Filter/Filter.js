import React, { useState } from "react";
import ToggleButton from "../ToggleButton/ToggleButton"
import './Filter.css'

export default function Menu (props) {

  const [toggleBtn1, setToggleBtn1] = useState(false);
  const [toggleBtn2, setToggleBtn2] = useState(false);
  const [orderBy, setOrderBy] = useState("1");

  const btnText = {
    title1: "Bolsa de empleo",
    title2: "Certificado"
  }

  const updateTriggerBtn1 = (boolean) => {
    setToggleBtn1(boolean);
  };
  const updateTriggerBtn2 = (boolean) => {
    setToggleBtn2(boolean);
  };

  const orderByValue = (event) => setOrderBy(event.target.value);

  return(
    <div className={`filtro-desplegable ${props.filter}`}>
        <h3>Ordenado por:</h3>        
        <input
          type="radio"
          id="mPuntuados"
          name="course"
          value="1"
          onClick={orderByValue}
          defaultChecked
        />
        <label htmlFor="mPuntuados">Mejor puntuados</label>
        <input
          type="radio"
          id="mRecientes"
          name="course"
          value="2"
          onClick={orderByValue}
        />
        <label htmlFor="mRecientes">Más recientes</label>
        <input
          type="radio"
          id="mBaratos"
          name="course"
          value="3"
          onClick={orderByValue}
        />
        <label htmlFor="mBaratos">Más baratos</label>
        <h3>Filtrar por:</h3>
        <ToggleButton toggleBtnText={btnText.title1} updateTriggerBtn={updateTriggerBtn1}/>
        <ToggleButton toggleBtnText={btnText.title2} updateTriggerBtn={updateTriggerBtn2}/>
        <h1 onClick={props.toggle}>Atrás</h1>
    </div>
  )
}