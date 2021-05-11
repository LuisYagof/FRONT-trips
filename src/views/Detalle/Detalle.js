import React, { useState, useEffect } from 'react'
import './Detalle.css';
import { useLocation, useHistory } from "react-router-dom";
import fetchData from '../../hooks/Fetch'
import ArrowWhite from '../../assets/icons/ArrowWhite.svg'
import Heart from '../../assets/icons/Heart.svg'
import TinyBtn from '../../components/TinyBtn/TinyBtn'

const Detalle = (props) => {
  const [curso, setCurso] = useState({})
  const [jobs, setJobs] = useState([])
  const [tags, setTags] = useState([])
  const [salaries, setSalaries] = useState([])
  const [professions, setProfessions] = useState([])
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
    } else if (content.ok) {
      await content.ok && setJobs(content.APIresponse.tags)
      await content.ok && setSalaries(content.APIresponse.professions)
      await content.ok && setTags(content.keywords)
      await content.ok && setProfessions(content.professions)
    } else if (!content.ok) {
      alert(content.msg)
    }
  }

  const goBack = () => {
    history.goBack()
  }

  const scraping = () => {
    let job = jobs.map((el, i) => <p>Para {tags[i]} hay {el} ofertas de trabajo semanales en España.</p>)
    let sals = salaries.map((el, i) => <p>El trabajo de {professions[i]} tiene un salario medio de {el}€ en Madrid. </p>)

    return (
      <>
        <h3 className="whiteH3">Datos de empleo</h3>
        {job}
        {sals}
      </>
    )
  }

  const extra = () => {
    return (
      <>
        <p>{curso.duracion} horas</p>
        <p>{curso.idioma} idioma</p>
        <p>{curso.bolsaEmpleo} bolsa</p>
        <p>{curso.certificado} certificado</p>
      </>
    )
  }

  return (
    <>
      <div className="imgDetail">
        <img className="arrowImg" onClick={goBack} src={ArrowWhite} alt="" />
        <img className="heartImg" onClick={() => console.log("Favorito")} src={Heart} alt="" />
        <div className="infoBox">
          <TinyBtn text={`${curso.media} #`} color={"blue"} />
          <div className="subInfo">
            <TinyBtn text={location.state.docente.nombre} color={"orange"} />
            <TinyBtn text={curso.precio} color={"green"} />
          </div>
        </div>
        <img className="courseImg" src={curso.imagen} alt="" />
      </div>
      <div className="courseDescription">
        <h2>{curso.nombre}</h2>
        <p>{curso.descripcion}. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, officia. Inventore laudantium tempore obcaecati sequi iure nisi odio, quia culpa quisquam possimus aliquam ducimus magnam harum recusandae voluptatibus a cum!</p>
      </div>
      <div className="jobsInfo">
        {jobs ? scraping() : <p>No hay datos</p>}
      </div>
      <div className="extraInfo">
        {extra()}
      </div>
    </>
  )
}

export default Detalle