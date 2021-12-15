import React, { useEffect, useState } from "react";
import { useParams, useRouteMatch } from "react-router";
import { getMoviesCast } from "../../services/ApiService";

export default function CastBlock() {
  const { url } = useRouteMatch();
  const { id: movieId } = useParams();
  const [movie, setMovie] = useState(null);
  // console.log(movie);
  let ID = url.replace(/\D/g, "");

  useEffect(() => {
    getMoviesCast(ID)
      .then((data) => {
        // console.log(data);
        setMovie(data);
      })
      .catch((e) => {
        console.error();
      });
    return () => {};
  }, [ID]);

  return (
    <ul>
      {movie.map((el) => {
        const ImageAvailable = `https://image.tmdb.org/t/p/w500${el.profile_path}`;
        if (!!el.profile_path) {
          return (
            <li key={el.id}>
              <img width="150px" src={ImageAvailable} alt={el.name} />
              <p>Name: {el.name}</p>
              <p>Character: {el.character}</p>
            </li>
          );
        } else return <p key={el.id}> {el.name}:No image found</p>;
      })}
    </ul>
  );
}
