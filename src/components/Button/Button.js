import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const Button = (props) => {

    useEffect(() => {
        const data = async () => {
          const newData = await fetch(`http://localhost:8080/${props.functionFetch}`)
          .then(response => response.json())
          .then(res => setData([...data, ...res.data]));
        }
        console.log("Retrieving data...")
        data();
    }, [])

    return (
        <button>{`${props.text}`}</button>
        );
}

export default Button;