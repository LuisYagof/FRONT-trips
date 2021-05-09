import React, { useState, useEffect} from "react";

const ToggleButton = (props) => {
    const [jobBank, setJobBank] = useState(false);
    const [certificate, setToggle] = useState(false);
    const triggerToggleJobBank = () => { setJobBank( !jobBank ) };
    const triggerToggleCertificate = () => { setToggle( !certificate ) }

    return (
    <>
    <div>
        <div onClick={triggerToggleJobBank} className={`wrg-toggle ${jobBank ? 'wrg-toggle--checked' : ''}`}>
            <div className="wrg-toggle-container">
                <div className="wrg-toggle-check">
                    <span></span>
                </div>
                <div className="wrg-toggle-uncheck">
                    <span></span>
                </div>
            </div>
         <div className="wrg-toggle-circle"></div>
         <input className="wrg-toggle-input" type="checkbox" aria-label="Toggle Button" />
        </div>
        <label>Bolsa de empleo</label>
    </div>

    <div>
        <div onClick={triggerToggleCertificate} className={`wrg-toggle ${certificate ? 'wrg-toggle--checked' : ''}`}>
            <div className="wrg-toggle-container">
                <div className="wrg-toggle-check">
                    <span></span>
                </div>
                <div className="wrg-toggle-uncheck">
                    <span></span>
                </div>
            </div>
        <div className="wrg-toggle-circle"></div>
        <input className="wrg-toggle-input" type="checkbox" aria-label="Toggle Button" />
        </div> 
        <label>Certificados</label>
    </div>
   </>
    )
}

export default ToggleButton;