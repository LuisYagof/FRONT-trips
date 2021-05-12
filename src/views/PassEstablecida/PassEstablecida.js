import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./PassEstablecida.css";
import Button from "../../components/Button/Button";
import tickSquare from "../../assets/icons/tickSquare.svg";

const RecuperarPass = () => {
  const [text, setText] = useState("Iniciar Sesión");
  const history = useHistory();

  const goUp = () => {
    history.push("/login");
  };

  return (
    <div className="bodyPassEstablecida">
      {/* <div className='onboardingHeader'>
                <img className="arrowOnboarding" src={Arrow} onClick={() => history.push('/login')} alt='' />
            </div> */}
      <div className="illustration">
        <div className="pick">
          <img className="imgPassEstablecida" src={tickSquare} alt="" />
        </div>
        <h2>Nueva contraseña<br/>establecida</h2>
      </div>
      <Button onClick={goUp} text={text} />
    </div>
  );
};

export default RecuperarPass;
