import React, { useState, useEffect } from 'react'
// import './Categoria.css';
import { useHistory, useLocation, useParams } from "react-router-dom";
import ItemLista from '../../components/ItemLista/ItemLista'
import Menu from '../../components/Menu/Menu'
import Burger from '../../assets/icons/Burger.svg'
import Arrow from '../../assets/icons/Arrow.svg'

const Categoria = (props) => {
  const [cursos, setCursos] = useState([])
  const [docentes, setDocentes] = useState([])
  const [menu, setMenu] = useState(false)
  const history = useHistory()
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

  const goBack = () => {
    history.goBack()
  }

  return (
    <>
      <Menu toggle={toggleMenu} menu={menu} />
      <div className="navHeader">
        <img onClick={goBack} src={Arrow} alt="" />
        <input type="text" placeholder="Haz tu búsqueda" />
        <img onClick={toggleMenu} src={Burger} alt="" />
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