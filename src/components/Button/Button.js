import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const Button = (props) => {

    return (
        <button>{`${props.text}`}</button>
        );

}

export default Button;