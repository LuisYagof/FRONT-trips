import React, { useState, useEffect } from "react";
import Arrow from '../../assets/icons/Arrow.svg'
import ItemLista from '../../components/ItemLista/ItemLista'
import Button from "../../components/Button/Button";
import { useHistory, useLocation } from "react-router-dom";
import fetchData from "../../hooks/Fetch";

const MyFavorites = () => {
    const history = useHistory()
    const location = useLocation()
    const [cursos, setCursos] = useState([])
    const [docentes, setDocentes] = useState([])

    //  useEffect(() => {
    //      setDocentes(location.state.docentes)
    //    }, [])

    useEffect(() => {
        const fetching = async () => {
            let fetchOptions = {
            method: 'GET',
            headers: {
                "content-type": "application/json",
                authorization: `Bearer: ${localStorage.getItem("token")}`,
            }
            }
            const content = await fetchData("showFavs", fetchOptions)
            if (content.error) {
            alert(content.error)
            } else {
            await content.ok && setCursos([...cursos, ...content.data.cursos]);
            }
        }
        fetching()
        }, [])

    const drawList = () => {
        return cursos.map(el => <ItemLista elem={el} docente={docentes.filter(e => e.id == el.docente)[0]} />)
      }

    const goBack = () => {
        history.goBack()
      }

    return (
        <>
            <img onClick={goBack} src={Arrow} alt="" />
            <h2>Mis cursos favoritos</h2>
            <div>
                {drawList()}
            </div>
        </>
    )
}

export default MyFavorites;