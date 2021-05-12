import React from 'react'
import { useHistory } from "react-router-dom";
import fetchData from '../../hooks/Fetch';
import './Menu.css'
import ArrowWhite from '../../assets/icons/ArrowWhite.svg'
import Off from '../../assets/icons/Off.svg'

export default function Menu(props) {
  const history = useHistory()
  const myFavorites = () => {
    history.push({ pathname: "/misFavoritos" });
  }

  const fetching = async () => {
    let fetchOptions = {
      method: 'PUT',
      headers: {
        "content-type": "application/json",
        "authorization": `Bearer: ${localStorage.getItem("token")}`
      },
    }
    const content = await fetchData(`logout`, fetchOptions)
    if (content.error) { alert(content.error) }
    if (content.ok) {
      localStorage.setItem("token", "")
      history.push({ pathname: "/login" });
    } else {
      alert(content.msg)
    }
  }

  const handleFavourites = () => {
    history.push({
      pathname: '/misFavoritos',
      state: { docentes: props.docentes }
    })
  }

  return (
    <div className={`menu-desplegable ${props.menu}`}>
      <div className="menuIcons">
        <img className="arrowImg" onClick={props.toggle} src={ArrowWhite} alt="" />
        <img className="offImg" onClick={fetching} src={Off} alt="" />
      </div>
      <div className="menuContent">
        <h1 onClick={() => console.log("MI PERFIL")}>Mi perfil</h1>
        <h1 onClick={handleFavourites}>Mis cursos <br /> favoritos</h1>
      </div>
    </div>
  )
}