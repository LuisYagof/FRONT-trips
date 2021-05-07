import React, { useState, useEffect } from 'react'
import './Menu.css'

export default function Menu (props) {
  return(
    <div className={`menu-desplegable ${props.menu}`}>
      {/* <div>
        <svg></svg>
        <svg></svg>
      </div> */}
      <div>
        <h1>Mi perfil</h1>
        <h1>Cursos</h1>
        <h1>Profesores</h1>
        <h1 onClick={props.toggle}>Atrás</h1>
      </div>
    </div>
  )
}