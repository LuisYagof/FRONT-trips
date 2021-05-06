import React, { useState, useEffect } from 'react'
// import './Categoria.css';
import { Link, useLocation, useParams, useHistory } from "react-router-dom";
import ItemLista from '../ItemLista/ItemLista'

const Categoria = (props) => {
  const [cursos, setCursos] = useState([])
  const location = useLocation()
  const params = useParams()
  const categorias = [
    "Desarrollo Web",
    "FrontEnd",
    "BackEnd",
    "Marketing Digital",
    "UX/UI",
    "Data Science"
  ]

  useEffect(() => {
    setCursos(location.state.items)
    console.log(typeof (Number(params.categoria)));
  }, [])

  const drawList = () => {
    return cursos.map(el => <ItemLista elem={el} />)
  }

  const matchCategoria = () => {
    return categorias.filter((el, i) => i + 1 == params.categoria)[0]
  }

  return (
    <>
      <div style={{ "display": "flex", "justifyContent": "space-evenly" }}>
        <h1>HOME</h1>
        <input type="text" />
      </div>
      <hr />

      <div>
        {params.categoria == 'valorados' ? <h3>Los más valorados</h3> : <h3>Cursos de {matchCategoria()}</h3>}
        <div>
          {drawList()}
        </div>
      </div>
    </>
  )
}

export default Categoria