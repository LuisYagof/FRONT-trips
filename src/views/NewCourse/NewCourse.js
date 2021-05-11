import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ToggleButton from "../../components/ToggleButton/ToggleButton"
import Button from "../../components/Button/Button";
import fetchData from "../../hooks/Fetch";
import Arrow from '../../assets/icons/Arrow.svg'
import './NewCourse.css';

const NewCourse = () => {

    const [name, setName] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [enlace, setEnlace] = useState("");
    const [precio, setPrecio] = useState(0);
    const [duracion, setDuracion] = useState(0);
    const [idioma, setIdioma] = useState(1);
    const [categoria, setCategoria] = useState(0);
    const [bolsaEmpleo, setBolsaEmpleo] = useState(0);
    const [certificado, setCertificado] = useState(0);
    const [imagen, setImagen] = useState("");
    const history = useHistory()

    const handleName= (event) => setName(event.target.value);
    const handleDescription= (event) => setDescripcion(event.target.value);
    const handleLink= (event) => setEnlace(event.target.value);
    const handlePrice= (event) => setPrecio(event.target.value);
    const handleDuration= (event) => setDuracion(event.target.value);
    const handleLanguage= (event) => setIdioma(event.target.value);
    const handleCategory= (event) => setCategoria(event.target.value);
    const handleJob = (boolean) => setBolsaEmpleo(boolean);
    const handleCertificate= (boolean) => setCertificado(boolean);
    const handleImage= (event) => setImagen(event.target.value);
    
    const fetching = async () => {
        let fetchOptions = {
        method: 'POST',
        headers: {
            "content-type": "application/json",
            authorization: `Bearer: ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
            nombre: name,
            descripcion: descripcion,
            enlace: enlace,
            precio: precio,
            duracion: duracion,
            idioma: idioma,
            categoria: categoria,
            bolsaEmpleo: bolsaEmpleo,
            certificado: certificado,
            imagen: imagen
        })
        }
        const content = await fetchData("newCourse", fetchOptions)
        if (content.error) {
        alert(content.error)
        } else {
        await content.ok && history.push({pathname:"/dashboard"});;
        }
    }    

    return(
        <>
            <img src={Arrow} onClick={() => history.goBack()} alt='' />
            <h2>Subir curso</h2>
            <form>
                <label htmlFor="nombre">Nombre del curso</label>
                <input type="text" name="nombre" onChange={handleName}/>

                <label htmlFor="descripcion">Descripción del curso</label>
                <textarea type="text" name="descripcion" onChange={handleDescription}/>

                <label htmlFor="categoria">Categoría</label>
                    <select name="categoria" id="categoria" onChange={handleCategory}>
                        <option value="1">Desarrollo web</option>
                        <option value="2">FrontEnd</option>
                        <option value="3">BackEnd</option>
                        <option value="4">Marketing Digital</option>
                        <option value="5">UX/UI</option>
                        <option value="6">Data science</option>
                    </select>

                <label htmlFor="precio">Precio</label>
                <textarea type="text" name="precio" onChange={handlePrice}/>

                <label htmlFor="duracion">Duración</label>
                <textarea type="text" name="duracion" onChange={handleDuration}/>

                <ToggleButton toggleBtnText={"Bolsa de empleo"} updateTriggerBtn={handleJob} />
                <ToggleButton toggleBtnText={"Certificado oficial"} updateTriggerBtn={handleCertificate} />

                <label htmlFor="idioma">Idioma</label>
                    <select name="idioma" id="idioma" onChange={handleLanguage}>
                        <option value="1">Español</option>
                        <option value="2">Inglés</option>
                    </select>

                <label htmlFor="enlace">Link del curso</label>
                <textarea type="text" name="enlace" onChange={handleLink}/>

                <label htmlFor="imagen">Imagen del curso</label>
                <textarea type="text" name="imagen" onChange={handleImage}/>

                <Button onClick={fetching} text={"Publicar curso"}/>
            </form>
        </>
    );
};

export default NewCourse;