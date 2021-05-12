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
        <div className='bodyNewCourse'>
            <div className='newCourseHeader'>
                <img className="arrowOnboarding" src={Arrow} onClick={() => history.goBack()} alt='' />
                {/* <p className='textOmitir' onClick={() => history.push('/login')}>Omitir</p> */}
            </div>

            <div className='textCabecera'>
                <h3>Subir curso</h3>
            </div>
            <form className='formNewCourse'>
                <label className='textLabel' htmlFor="nombre">Nombre del curso</label>
                <input className='inputForm' type="text" name="nombre" onChange={handleName}/>

                <label className='textLabel' htmlFor="descripcion">Descripción del curso</label>
                <textarea className='inputForm' type="text" name="descripcion" onChange={handleDescription}/>

                <label className='textLabel' htmlFor="categoria">Categoría</label>
                <select className='selectForm' name="categoria" id="categoria" onChange={handleCategory}>
                    <option value="1">Desarrollo web</option>
                    <option value="2">FrontEnd</option>
                    <option value="3">BackEnd</option>
                    <option value="4">Marketing Digital</option>
                    <option value="5">UX/UI</option>
                    <option value="6">Data Science</option>
                </select>

                <div className='divPriceAndTime'>
                    <label htmlFor="precio">Precio</label>
                    <input className='inputFormPq' pattern='/[0-9]/' type="text" name="precio" onChange={handlePrice}/>
                </div>

                <div className='divPriceAndTime'>
                    <label htmlFor="duracion">Duración</label>
                    <input className='inputFormPq' type="text" name="duracion" onChange={handleDuration}/>
                </div>

                <div className='divToggle'>
                    <ToggleButton toggleBtnText={"  Bolsa de empleo"} updateTriggerBtn={handleJob} />
                    <br />
                    <ToggleButton toggleBtnText={"  Certificado oficial"} updateTriggerBtn={handleCertificate} />
                </div>

                <label className='textLabel' htmlFor="idioma">Idioma</label>
                <select className='selectForm' name="idioma" id="idioma" onChange={handleLanguage}>
                    <option value="1">Español</option>
                    <option value="2">Inglés</option>
                </select>

                <label className='textLabel' htmlFor="enlace">Link del curso</label>
                <input className='inputForm' type="text" name="enlace" onChange={handleLink}/>

                <label className='textLabel' htmlFor="imagen">Link de imagen</label>
                <input className='inputForm' type="text" name="imagen" onChange={handleImage}/>
            </form>
                <Button onClick={fetching} text={"Publicar curso"}/>
        </div>
        </>
    );
};

export default NewCourse;