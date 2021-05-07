import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Onboarding = () => {

    const [text, setText] = useState("X");

    return (
        <>
            <Link>
                <div>
                    <image src='' alt=''/>
                </div>
                <div>
                    <image src='' alt=''/> ---------logotipo--------
                </div>
            </Link>
        </>
        );
}

export default Onboarding;