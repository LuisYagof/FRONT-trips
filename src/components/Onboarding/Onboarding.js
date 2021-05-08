import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Onboarding = () => {

    const [text, setText] = useState("X");

    return (
        <>
            <Link to="/newStudent">
                <div>
                    <image src='' alt=''/> ---------ilustración--------
                </div>
                <div>
                    <image src='' alt=''/> ---------logotipo--------
                </div>
            </Link>
        </>
        );
}

export default Onboarding;