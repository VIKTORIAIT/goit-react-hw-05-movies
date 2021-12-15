import React, { useEffect, useState } from "react";
// import { useParams, useRouteMatch } from "react-router";
import { getMoviesCast } from "../../services/ApiService";
import s from "./CastBlock.module.css";

export default function CastBlock({ movieId }) {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMoviesCast(movieId)
      .then((data) => {
        setMovie(data);
      })
      .catch((e) => {
        console.error();
      });
    return () => {};
  }, [movieId]);

  return (
    <>
      {movie && (
        <ul className={s.list}>
          {movie.cast.map((el) => {
            const ImageAvailable = `https://image.tmdb.org/t/p/w500${el.profile_path}`;
            if (!!el.profile_path) {
              return (
                <li className={s.item} key={el.id}>
                  <img width="200px" src={ImageAvailable} alt={el.name} />
                  <p>Name: {el.name}</p>
                  <p>Character: {el.character}</p>
                </li>
              );
            } else return <p key={el.id}> {el.name}:No image found</p>;
          })}
        </ul>
      )}
    </>
  );
}
