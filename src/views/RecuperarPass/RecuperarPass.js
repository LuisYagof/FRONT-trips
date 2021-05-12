import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./RecuperarPass.css";
import RecuPass from "../../assets/icons/fluentMail.svg";
import Button from "../../components/Button/Button";
import Arrow from '../../assets/icons/Arrow.svg'

const RecuperarPass = () => {
  const [text, setText] = useState("Volver a inicio");
  const history = useHistory();
  const goUp = () => {
    history.push("/login");
  };

  return (
    <div className="bodyRecuPass">
        <div className='onboardingHeader'>
                <img className="arrowOnboarding" src={Arrow} onClick={() => history.push('/login')} alt='' />
            </div>
      <div className="illustration">
        <div>
          <img className="imgRecuPass" src={RecuPass} alt="" />
        </div>
        <div className="textPresentation"> 
          <p>
            Link de recuperación de contraseña enviada a tu mail
            </p>
        </div>
      </div>
      <Button onClick={goUp} text={text} />
    </div>
  );
};

export default RecuperarPass;
