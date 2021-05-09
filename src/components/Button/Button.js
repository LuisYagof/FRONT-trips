<<<<<<< HEAD
import './Button.css'

const Button = (props) => {
    return (
        <button className="enterBtn" onClick={() => props.onClick()} type="button">{`${props.text}`}</button>
        );
=======
import React from "react";
import "./Button.css";
const Button = (props) => {
    return (
        <button className="button" onClick={() => props.onClick()} type="button">{`${props.text}`}</button>
    );
>>>>>>> signup
}

export default Button;