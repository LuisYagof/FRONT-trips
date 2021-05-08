import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import './ItemLista.css'
import '../TinyBtn/TinyBtn'
import TinyBtn from '../TinyBtn/TinyBtn';

const ItemLista = (props) => {
  const [curso, setCurso] = useState({})
  const history = useHistory()

  useEffect(() => {
    setCurso(props.elem)
  }, [])

  return (
    <div className="listItem">
      <div className="imgBox">
        <img className="courseImg" src={curso.imagen} alt="" />
      </div>
      <div className="courseInfo">
        <h4 onClick={() => history.push({
          pathname: `/cursos/${curso.id}`,
          state: { curso: curso, docente: props.docente }
        })}>{curso.nombre}</h4>
        <div className="courseSubInfo">
          <TinyBtn text={`${curso.precio} €`} color={"green list"} />
          <TinyBtn text={props.docente.nombre} color={"orange list"} />
          <h5>{curso.media}#</h5>
        </div>
      </div>
    </div>
  )
}

export default ItemLista