import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Arrow from '../../assets/icons/Arrow.svg'
import HeartBold from '../../assets/icons/HeartBold.svg'
import ItemLista from '../../components/ItemLista/ItemLista'
import { useLocation } from "react-router-dom";
import fetchData from "../../hooks/Fetch";

const MyFavorites = () => {

    const [cursos, setCursos] = useState([])
    const [docentes, setDocentes] = useState(["Profesor"])
    const history = useHistory()

    // useEffect(() => {
    //     setDocentes(location.state.docentes)
    // }, [])

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
            await content.ok && setCursos([...cursos, ...content.data]);
            }
        }
        fetching()
        }, [])

    const drawList = () => {
        return cursos.map(el => <ItemLista key={el.id} elem={el} docente={docentes.filter(e => e.id == el.docente)[0]} />)
      }

      const goBack = () => {
        history.push("/dashboard")
      }

    return (
        <>
            <img onClick={goBack} src={Arrow} alt="" />
            <img src={HeartBold} alt="" />
            <h2>Mis cursos favoritos</h2>
            <div>
                {drawList()}
            </div>
        </>
    )
}

export default MyFavorites;