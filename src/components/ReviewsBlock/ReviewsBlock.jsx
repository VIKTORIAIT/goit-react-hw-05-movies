import React, { useEffect, useState } from "react";
import { getMoviesReview } from "../../services/ApiService";

export default function ReviewsBlock({ movieId }) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    getMoviesReview(movieId)
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
      {!!movie.results && !!movie.results.length ? (
        <ul>
          {movie.results.map((el) => {
            return (
              <li key={el.id}>
                <b>Author: {el.author}</b>
                <p>{el.content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>We don't have any reviwes for this movie</p>
      )}
    </>
  );
}
