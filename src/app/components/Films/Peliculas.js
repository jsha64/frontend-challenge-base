"use client";
import { useEffect, useState } from "react";

export const Peliculas = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/movies/now_playing")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener los datos de la API");
        }
        return response.json();
      })
      .then((data) => {
        setData(data.results); // Almacenar los datos completos en el estado
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  if (error) {
    return <p style={{ color: "red" }}>Error: {error}</p>;
  }

  if (!data) {
    return <p>Cargando...</p>;
  }

  return (
    <>
      <div className="div-films">
        <ul className="div-films__container">
          {data.map((movie) => (
            <li key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                width={100}
              />
              <h2>{movie.title}</h2>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
