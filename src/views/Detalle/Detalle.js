import React, { useState, useEffect } from 'react'
import './Detalle.css';
import { useLocation, useHistory } from "react-router-dom";
import fetchData from '../../hooks/Fetch'
import ArrowWhite from '../../assets/icons/ArrowWhite.svg'
import Heart from '../../assets/icons/Heart.svg'
import TinyBtn from '../../components/TinyBtn/TinyBtn'

const Detalle = (props) => {
  const [curso, setCurso] = useState({})
  const location = useLocation()
  const history = useHistory()

  useEffect(() => {
    setCurso(location.state.curso)
    fetching()
  }, [])

  const fetching = async () => {
    let fetchOptions = {
      method: 'GET'
    }
    const content = await fetchData(`keywords/${location.state.curso.id}`, fetchOptions)
    if (content.error) {
      alert(content.error)
    } else {
      await content.ok && console.log(content);
      // await content.ok && setDocentes([...docentes, ...content.data.docentes]);
    }
  }

  const goBack = () => {
    history.goBack()
  }

  return (
    <>
      <div className="imgDetail">
        <img className="arrowImg" onClick={goBack} src={ArrowWhite} alt="" />
        <img className="heartImg" onClick={console.log("Favorito")} src={Heart} alt="" />
        <div className="infoBox">
          <TinyBtn text={`${curso.media} #`} color={"blue"} />
          <div className="subInfo">
            <TinyBtn text={location.state.docente.nombre} color={"orange"} />
            <TinyBtn text={curso.precio} color={"green"} />
          </div>
        </div>
        <img className="courseImg" src={curso.imagen} alt="" />
      </div>
      <h2>{curso.nombre}</h2>
      <p>{curso.descripcion}</p>
    </>
  )
}

export default Detalle