import React, { useState, useEffect } from 'react'
import './Detalle.css';
import { useLocation } from "react-router-dom";

const Detalle = (props) => {
  const [curso, setCurso] = useState({})
  const location = useLocation()

  useEffect(() => {
    setCurso(location.state.curso)
  }, [])

  return (
    <>
      <div style={{ "display": "flex", "justifyContent": "space-evenly" }}>
        <h1>NAV</h1>
        <input type="text" />
      </div>
      <hr />

      <img className="courseImg" src={curso.imagen} alt="" />
      <h2>{curso.nombre}</h2>
      <p>{curso.descripcion}</p>
      <p>{location.state.docente.nombre}</p>
    </>
  )
}

export default Detalle