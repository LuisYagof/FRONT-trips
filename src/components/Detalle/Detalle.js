import React, { useState, useEffect } from 'react'
import './Detalle.css';
import { Link, useLocation, useParams, useHistory } from "react-router-dom";

const Detalle = (props) => {
  const [curso, setCurso] = useState({})
  const location = useLocation()
  const params = useParams()

  useEffect(() => {
    setCurso(location.state.curso)
  }, [])

  return (
    <>
      <div style={{ "display": "flex" }}>
        <h1>HOME</h1>
        <input type="text" />
      </div>
      <hr />

      <h2>{curso.nombre}</h2>
      <p>{curso.descripcion}</p>
      <p>{location.state.docente.nombre}</p>
    </>
  )
}

export default Detalle