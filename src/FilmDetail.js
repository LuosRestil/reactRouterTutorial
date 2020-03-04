import React, { useState, useEffect } from "react";
import "./App.css";

function FilmDetail({ match }) {
  useEffect(() => {
    fetchFilm(match.params.id);
  }, []);

  const [film, setFilm] = useState({});

  const fetchFilm = async id => {
    fetch(`https://ghibliapi.herokuapp.com/films/${id}`)
      .then(data => data.json())
      .then(json => {
        console.log(json);
        setFilm(json);
      });
  };

  return (
    <div>
      <h1>Film Detail</h1>
      <h3>{film.title}</h3>
      <p>{film.description}</p>
    </div>
  );
}

export default FilmDetail;
