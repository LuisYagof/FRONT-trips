import React, { useState, useEffect } from 'react'
import './Categoria.css';
import { useHistory, useLocation, useParams } from "react-router-dom";
import './Categoria.css'
import ItemLista from '../../components/ItemLista/ItemLista'
import Menu from '../../components/Menu/Menu'
import Burger from '../../assets/icons/Burger.svg'
import Arrow from '../../assets/icons/Arrow.svg'
import Search from '../../assets/icons/Search.svg'
import Filter2 from '../../assets/icons/Filter2.svg'

const Categoria = (props) => {
  const [cursos, setCursos] = useState([])
  const [docentes, setDocentes] = useState([])
  const [search, setSearch] = useState("")
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

  const handleTitle = () => {
    if (params.categoria == 'valorados') {
      return <h3>Los más valorados</h3>
    } else if (params.categoria == 1 || params.categoria == 2 || params.categoria == 3 || params.categoria == 4 || params.categoria == 5 || params.categoria == 6) {
      return <h3> Cursos de {matchCategoria()} </h3 >
    } else {
      return <h3> Resultados de búsqueda </h3 >
    }
  }

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const goSearch = () => {
    if (params.categoria == 'valorados' || params.categoria == 1 || params.categoria == 2 || params.categoria == 3 || params.categoria == 4 || params.categoria == 5 || params.categoria == 6) {
      const filtered = cursos
        .filter(item => item.nombre.toLowerCase().includes(search.toLowerCase()))
      setCursos(filtered)
    } else {
      // location.state.searchTotal()
    }
  }

  const filterResults = (toggleBtn1, toggleBtn2, orderBy) => {
    let trimmed = cursos
      .filter(e => e.bolsaEmpleo == toggleBtn1)
      .filter(e => e.certificado == toggleBtn2)
    if (orderBy == 1) {
      let ordered = trimmed.sort((a, b) => {
        if (a.media < b.media) {
          return 1;
        }
        if (a.media > b.media) {
          return -1;
        }
        return 0;
      })
      setCursos(ordered)
    } else if (orderBy == 2) {
      let ordered = trimmed.sort((a, b) => {
        if (a.precio > b.precio) {
          return 1;
        }
        if (a.precio < b.precio) {
          return -1;
        }
        return 0;
      })
      setCursos(ordered)
    }
  }

  return (
    <>
      <Menu toggle={toggleMenu} menu={menu} />
      <div className="navHeader">
        <img onClick={goBack} src={Arrow} alt="" />
        <input type="text" placeholder="Haz tu búsqueda" onChange={handleSearch} />
        <img src={Search} alt="" onClick={goSearch} />
        <img onClick={toggleMenu} src={Burger} alt="" />
      </div>

      <div className="courseList">
        <div className="listHeader">
          {handleTitle()}
          <img onClick={() => filterResults(1, 0, 3)} src={Filter2} alt="" />
        </div>
        <div>
          {drawList()}
        </div>
      </div>
    </>
  )
}

export default Categoria