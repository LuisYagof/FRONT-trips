import React, { useState } from "react";
import Modal from "./Modal";
import useModal from "../../hooks/useModal";
import ToggleButton from "../ToggleButton/ToggleButton"


const Modals = () => {
  const [isOpenModal1, OpenModal1, closeModal1] = useModal(false);
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
  

  return (
    <div>
      <h2>Modales</h2>
      <button onClick={OpenModal1}>Modal 1</button>

      
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
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
      </Modal>
    </div>
  );
};

export default Modals;
