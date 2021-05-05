import { useState } from 'react';
import { Link } from "react-router-dom";

const Onboarding = () => {

    const [text, setText] = useState("X");

    return (
        <>
            <Link to="/logUser">
                <button>{text}</button> />
            </Link>
            <h4>LOREM</h4>
        </>
        );
}

export default Onboarding;