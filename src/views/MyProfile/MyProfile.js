import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button/Button";
import fetchData from "../../hooks/Fetch";
import Arrow from '../../assets/icons/Arrow.svg'
import './MyProfile.css';

const MyProfile = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [rePass, setRepass] = useState("");
    const history = useHistory()

    const handleName= (event) => setName(event.target.value);
    const handleEmail= (event) => setEmail(event.target.value);
    const handlePass= (event) => setPass(event.target.value);
    const handleRepass= (event) => setRepass(event.target.value);
    
    const fetching = async () => {
        if (pass === rePass){
            let fetchOptions = {
            method: 'PUT',
            headers: {
                "content-type": "application/json",
                authorization: `Bearer: ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify({
                nombre: name,
                email: email,
                pass: pass,
            })
            }
            const content = await fetchData("updateUser", fetchOptions)
            if (content.error) {
            alert(content.error)
            } else {
            await content.ok && history.push({pathname:"/dashboard"});;
            }
        }
        else
        {alert("Las contraseñas no coinciden")}
    }    

    return(
        <>
        <div className='bodyMyProfile'>
            <div className='newMyProfileHeader'>
                <img className="arrowOnboarding" src={Arrow} onClick={() => history.goBack()} alt='' />
            </div>

            <div className='textCabecera'>
                <h3>Mi perfil</h3>
            </div>
            <form className='formMyProfile'>
                <label className='textLabel' htmlFor="nombre">Nombre y apellidos</label>
                <input className='inputForm' type="text" name="nombre" onChange={handleName}/>

                <label className='textLabel' htmlFor="email">Email</label>
                <input className='inputForm' type="email" name="email" onChange={handleEmail}/>

                <label className='textLabel' htmlFor="pass">Password</label>
                <input className='inputForm' type="password" name="pass" onChange={handlePass}/>

                <label className='textLabel' htmlFor="rePass">Repetir password</label>
                <input className='inputForm' type="password" name="rePass" onChange={handleRepass}/>
            </form>
                <Button onClick={fetching} text={"Modificar perfil"}/>
        </div>
        </>
    );
};

export default MyProfile;