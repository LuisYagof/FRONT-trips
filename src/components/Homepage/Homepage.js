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

  // onClick={history.push({
  //   pathname: `/cursos/${el.id}`,
  //   state: { el: el }
  // })}

  const Slider = () => {


    const cards = data.map(el => {
      return (
        <SwiperSlide key={el.id}>
          <div className={"slideCard"}>

            <img src={el.imagen} alt="" />
            <div className="slideMiniCard">
              <h5 onClick={() => history.push({
                pathname: `/cursos/${el.id}`,
                state: { el: el }
              })}>{el.nombre}</h5>
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

  return (
    <>
      <div style={{ "display": "flex" }}>
        <h1>HOME</h1>
        <input type="text" />
      </div>
      <hr />

      <div>
        <div className="slideHeader">
          <h3>Cursos más valorados</h3>
          <button type="button">Ver todo</button>
        </div>
        {Slider()}
      </div>

      <div>
        <h3>Categorías</h3>
        <div className="gridCategorias">
          <div><img src="https://picsum.photos/150/100" alt="" /></div>
          <div><img src="https://picsum.photos/150/100" alt="" /></div>
          <div><img src="https://picsum.photos/150/100" alt="" /></div>
          <div><img src="https://picsum.photos/150/100" alt="" /></div>
          <div><img src="https://picsum.photos/150/100" alt="" /></div>
          <div><img src="https://picsum.photos/150/100" alt="" /></div>
        </div>
      </div>
    </>
  )
}

export default Homepage;