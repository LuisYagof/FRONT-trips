import React, { useState, useEffect } from 'react'
// import './Categoria.css';
import { useLocation, useParams } from "react-router-dom";
import ItemLista from '../ItemLista/ItemLista'
import Menu from '../Menu/Menu'

const Categoria = (props) => {
  const [cursos, setCursos] = useState([])
  const [docentes, setDocentes] = useState([])
  const [menu, setMenu] = useState(false)
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
    setCursos(location.state.cursos)
    setDocentes(location.state.docentes)
  }, [])

  const drawList = () => {
    return cursos.map(el => <ItemLista elem={el} docente={docentes.filter(e => e.id == el.docente)[0]} />)
  }

  const matchCategoria = () => {
    return categorias.filter((el, i) => i + 1 == params.categoria)[0]
  }

  const toggleMenu = () => {
    setMenu(!menu)
  }

  return (
    <>
      <Menu toggle={toggleMenu} menu={menu}/>
      <div className="navHeader">
        <input type="text" placeholder="Haz tu búsqueda"  />
        <img onClick={toggleMenu} src={`http://localhost:3000/icons/burger.svg`} alt="" />
      </div>

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