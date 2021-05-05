import { useState, useEffect } from 'react';

const Button = (props) => {
    return (
        // {if (props.father === "login")}
        <button onClick={() => props.onClick(props.email, props.pass)}>{`${props.text}`}</button>
        );
}

export default Button;