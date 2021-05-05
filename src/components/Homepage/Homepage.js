import React, { useState, useEffect } from 'react'
import fetchData from '../../hooks/Fetch'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/swiper-bundle.css';
// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

const Homepage = () => {
  const [data, setData] = useState([])

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
        <SwiperSlide>
          <div>
            <h2>{el.nombre}</h2>
            <p>{el.descripcion}</p>
            <h5>{el.precio}€</h5>
          </div>
        </SwiperSlide>
      )
    })

    return (
      <Swiper
        spaceBetween={50}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {cards}
        {/* <SwiperSlide><img src="https://picsum.photos/id/1/250/300" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://picsum.photos/id/2/250/300" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://picsum.photos/id/3/250/300" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://picsum.photos/id/4/250/300" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://picsum.photos/id/1/250/300" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://picsum.photos/id/2/250/300" alt="" /></SwiperSlide> */}
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
      {/* <div>
        <h2>{data[0].nombre}</h2>
        <p>{data[0].descripcion}</p>
        <h5>{data[0].precio} €</h5>
      </div> */}

      <div>
        <h3>Los más recomendados</h3>
        {Slider()}
      </div>
    </>
  )
}

export default Homepage;