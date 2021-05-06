import React, { useState, useEffect } from 'react'
import fetchData from '../../hooks/Fetch'
import { useHistory } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
SwiperCore.use([Navigation, Pagination]);

const Homepage = () => {
  const [data, setData] = useState([])
  const history = useHistory()

  useEffect(() => {
    const fetching = async () => {
      let fetchOptions = {
        method: 'GET'
      }
      const content = await fetchData("searchAll", fetchOptions)
      await content.ok && setData([...data, ...content.data]);
    }
    fetching()
  }, [])

  const Slider = () => {
    const cards = data.map(el => {
      return (
        <SwiperSlide key={el.id}>
          <div className={"slideCard"} onClick={() => history.push({
            pathname: `/cursos/${el.id}`,
            state: { el: el }
          })}>

            <img src={el.imagen} alt="" />
            <div className="slideMiniCard">
              <h5>{el.nombre}</h5>
              <h5>{el.media}#</h5>
            </div>
          </div>
        </SwiperSlide>
      )
    })
    return (
      <Swiper
        spaceBetween={5}
        slidesPerView={1.5}
        loop={true}
        navigation
        // pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {cards}
      </Swiper>
    );
  };

  // const handleClick = (cat) => {
  //   if (typeof (cat) == "number") {
  //     const filtrados = data.filter(el => el.categoria == cat)
  //     history.push({
  //       pathname: `/categorias/${cat}`,
  //       state: { items: filtrados }
  //     })
  //   } else {
  //     history.push({
  //       pathname: `/categorias/${cat}`,
  //       state: { items: data }
  //     })
  //   }
  // }
  const handleClick = (cat) => {
    history.push({
      pathname: `/categorias/${cat}`,
      state: { items: typeof (cat) == "number" ? data.filter(el => el.categoria == cat) : data }
    })
  }

  return (
    <>
      <div style={{ "display": "flex", "justifyContent": "space-evenly" }}>
        <h1>HOME</h1>
        <input type="text" />
      </div>
      <hr />

      <div>
        <div className="slideHeader">
          <h3>Cursos más valorados</h3>
          <button type="button" onClick={() => handleClick('valorados')}>Ver todo</button>
        </div>
        {Slider()}
      </div>

      <div>
        <h3>Categorías</h3>
        <div className="gridCategorias">
          <div><img src="https://picsum.photos/175/100" alt="" onClick={() => handleClick(1)} /></div>
          <div><img src="https://picsum.photos/175/100" alt="" onClick={() => handleClick(2)} /></div>
          <div><img src="https://picsum.photos/175/100" alt="" onClick={() => handleClick(3)} /></div>
          <div><img src="https://picsum.photos/175/100" alt="" onClick={() => handleClick(4)} /></div>
          <div><img src="https://picsum.photos/175/100" alt="" onClick={() => handleClick(5)} /></div>
          <div><img src="https://picsum.photos/175/100" alt="" onClick={() => handleClick(6)} /></div>
        </div>
      </div>
    </>
  )
}

export default Homepage;