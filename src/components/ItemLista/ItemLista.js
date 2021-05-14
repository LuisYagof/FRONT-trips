import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import './ItemLista.css'
import '../TinyBtn/TinyBtn'
import TinyBtn from '../TinyBtn/TinyBtn';
import Media from '../Media/Media';

const ItemLista = (props) => {
  const [curso, setCurso] = useState({})
  const history = useHistory()

  useEffect(() => {
    setCurso(props.elem)
  }, [])

  return (
    <div onClick={() => history.push({
      pathname: `/cursos/${curso.id}`,
      state: { curso: curso, docente: props.docente }
    })} className="listItem">
      <div className="imgBox">
        <img className="courseImg" src={curso.imagen} alt="" />
      </div>
      <div className="courseInfo">
        <div className="courseTitle">
          <h4>{curso.nombre}</h4>
        </div>
        <div className="courseSubInfo">
          <TinyBtn text={`${curso.precio} €`} color={"green list"} />
          <TinyBtn text={props.docente.nombre} color={"orange list"} />
          <Media media={curso.media} />
        </div>
      </div>
    </div>
  )
}

export default ItemLista