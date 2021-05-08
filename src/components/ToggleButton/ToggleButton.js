import React, { useState, useEffect} from "react";

const ToggleButton = (props) => {

const [toggleBtn, setToggleBtn] = useState(false);
const handletriggerToggle = () => { 
    setToggleBtn( !toggleBtn )
    props.updateTriggerBtn ( !toggleBtn ) 
}

return (
    <>
    <div>
     <div onClick={handletriggerToggle} className={`wrg-toggle ${toggleBtn ? 'wrg-toggle--checked' : ''}`}>
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
     <label>{props.toggleBtnText}</label>
    </div>
   </>
    )
}

export default ToggleButton;