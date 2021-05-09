import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import fetchData from '../../hooks/Fetch'
import './Homepage.css'
import Menu from '../../components/Menu/Menu'
import Burger from '../../assets/icons/Burger.svg'
import Arrow from '../../assets/icons/Arrow.svg'
import Search from '../../assets/icons/Search.svg'
import TinyBtn from '../../components/TinyBtn/TinyBtn'
import Media from '../../components/Media/Media'

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
SwiperCore.use([Navigation, Pagination]);

const Homepage = () => {
  const [cursos, setCursos] = useState([])
  const [docentes, setDocentes] = useState([])
  const [search, setSearch] = useState("")
  const [menu, setMenu] = useState(false)
  const history = useHistory()

  useEffect(() => {
    const fetching = async () => {
      let fetchOptions = {
        method: 'GET'
      }
      const content = await fetchData("searchAll", fetchOptions)
      if (content.error) {
        alert(content.error)
      } else {
        await content.ok && setCursos([...cursos, ...content.data.cursos]);
        await content.ok && setDocentes([...docentes, ...content.data.docentes]);
      }
    }
    fetching()
  }, [])

  const Slider = () => {
    const cards = cursos.map(el => {
      return (
        <SwiperSlide key={el.id}>
          <div className={"slideCard"} onClick={() => history.push({
            pathname: `/cursos/${el.id}`,
            state: { curso: el, docente: docentes.filter(e => e.id == el.docente)[0] }
          })}>

            <div className="slideImg">
              <img className="courseImg" src={el.imagen} alt="" />
              <div className="slideMiniCard1">
                <TinyBtn text={docentes[0] && docentes.filter(e => e.id == el.docente)[0].nombre} color={"orange"} />
                <TinyBtn text={`${el.precio} €`} color={"green"} />
              </div>
            </div>
            <div className="slideMiniCard2">
              <h5>{el.nombre}</h5>
              {/* <h5>{el.media}#</h5> */}
              <Media media={el.media}/>
            </div>
          </div>
        </SwiperSlide>
      )
    })
    return (
      <Swiper
        spaceBetween={3}
        slidesPerView={1.5}
        loop={true}
        initialSlide={5}
        // navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {cards}
      </Swiper>
    );
  };

  const handleClick = (cat) => {
    history.push({
      pathname: `/categorias/${cat}`,
      state: {
        cursos: typeof (cat) == "number" ? cursos.filter(el => el.categoria == cat) : cursos,
        docentes: docentes
      }
    })
  }

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const goSearch = () => {
    if (search !== "") {
      const filtered = cursos
        .filter(item => item.nombre.toLowerCase().includes(search.toLowerCase()))
      history.push({
        pathname: `/categorias/${search}`,
        state: {
          cursos: filtered,
          docentes: docentes,
          // searchTotal: goSearch
        }
      })
    }
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
        <input type="text" placeholder="Haz tu búsqueda" onChange={handleSearch} />
        <img src={Search} alt="" onClick={goSearch} />
        <img onClick={toggleMenu} src={Burger} alt="" />
      </div>

      <div>
        <div className="slideHeader">
          <h3>Cursos más valorados</h3>
          <button type="button" onClick={() => handleClick('valorados')}>Ver todo</button>
        </div>
        {Slider()}
      </div>

      <div>
        <h3 className="gridTitle">Categorías</h3>
        <div className="gridCategorias">
          <div><img src="https://picsum.photos/id/1/175/100" alt="" onClick={() => handleClick(1)} style={{ "border-radius": "10px" }} /><p>Desarrollo Web</p></div>
          <div><img src="https://picsum.photos/id/2/175/100" alt="" onClick={() => handleClick(2)} style={{ "border-radius": "10px" }} /><p>FrontEnd</p></div>
          <div><img src="https://picsum.photos/id/3/175/100" alt="" onClick={() => handleClick(3)} style={{ "border-radius": "10px" }} /><p>BackEnd</p></div>
          <div><img src="https://picsum.photos/id/4/175/100" alt="" onClick={() => handleClick(4)} style={{ "border-radius": "10px" }} /><p>Marketing Digital</p></div>
          <div><img src="https://picsum.photos/id/5/175/100" alt="" onClick={() => handleClick(5)} style={{ "border-radius": "10px" }} /><p>UX/UI</p></div>
          <div><img src="https://picsum.photos/id/6/175/100" alt="" onClick={() => handleClick(6)} style={{ "border-radius": "10px" }} /><p>Data Science</p></div>
        </div>
      </div>
    </>
  )
}

export default Homepage;