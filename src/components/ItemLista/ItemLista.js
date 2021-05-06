import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";

const ItemLista = (props) => {
  const [curso, setCurso] = useState({})
  const history = useHistory()

  useEffect(() => {
    setCurso(props.elem)
  }, [])

  return (
    <div>
      <img src={curso.imagen} alt="" />
      <div>
        <h2 onClick={() => history.push({
          pathname: `/cursos/${curso.id}`,
          state: { curso: curso, docente: props.docente }
        })}>{curso.nombre}</h2>
        <p>{curso.descripcion}</p>
        <p>{props.docente.nombre}</p>
        <h5>{curso.media}#</h5>
        <h5>{curso.precio}€</h5>
      </div>
    </div>
  )
}

export default ItemLista