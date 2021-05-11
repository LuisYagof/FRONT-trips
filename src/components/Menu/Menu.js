import React from 'react'
import { useHistory } from "react-router-dom";
import './Menu.css'
import ArrowWhite from '../../assets/icons/ArrowWhite.svg'
import Off from '../../assets/icons/Off.svg'

export default function Menu(props) {
   const history = useHistory()
   const myFavorites = () => {
     history.push({pathname:"/misFavoritos"});
   }

  return (
    <div className={`menu-desplegable ${props.menu}`}>
      <div className="menuIcons">
        <img className="arrowImg" onClick={props.toggle} src={ArrowWhite} alt="" />
        <img className="offImg" onClick={console.log("Adios")} src={Off} alt="" />
      </div>
      <div className="menuContent">
        <h1 onClick={myFavorites}>Mi perfil</h1>
        <h1>Cursos</h1>
        <h1>Profesores</h1>
        <h1 onClick={props.toggle}>Atrás</h1>
      </div>
    </div>
  )
}