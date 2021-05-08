import React, { useState, useEffect } from "react";
import Button from "../../components/Button/Button";
import { useHistory } from "react-router-dom";
import fetchData from "../../hooks/Fetch";
import { Rating } from "@material-ui/lab";

const Review = () => {
  const [value, setValue] = useState(2);
  const [review, setReview] = useState("");
  const [text, setText] = useState("Enviar review");
  const [functionFetch, setfunctionFetch] = useState("newReview/:");
  const [data, setData] = useState([]);
  const history = useHistory();

  const handleReview = (event) => {
    setReview(event.target.value);
  };

  const fetching = async () => {
    let fetchOptions = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer: ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        descripcion: review,
        valoracion: value,
      }),
    };
    const content = await fetchData(functionFetch, fetchOptions);
    if (content.error) {
      alert(content.error);
    }
    if (content.ok) {
      alert(content.msg);
      history.push("/review-ok");
    } else {
      alert(content.msg);
    }
  };

  return (
    <form>
      <h2>Puntuación</h2>
      <div>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </div>
      <h2>Comentario</h2>
      <textarea
        className=""
        type="text"
        placeholder="Escribe aquí tu comentario"
        onChange={handleReview}
        required
      />
      <p>(Máximo 255 caracteres)</p>
      <Button onClick={fetching} text={text} />
    </form>
  );
};

export default Review;
