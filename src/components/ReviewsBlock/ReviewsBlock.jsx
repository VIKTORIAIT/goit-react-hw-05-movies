import React, { useEffect, useState } from "react";
import { useParams, useRouteMatch } from "react-router";
import { getMoviesReview } from "../../services/ApiService";

export default function ReviewsBlock() {
  const { url } = useRouteMatch();
  const { id: movieId } = useParams();
  const [movie, setMovie] = useState(null);
  console.log(movie);
  let ID = url.replace(/\D/g, "");

  useEffect(() => {
    getMoviesReview(ID)
      .then((data) => {
        console.log(data);
        setMovie(data);
        console.log(movie.results);
      })
      .catch((e) => {
        console.error();
      });
    return () => {};
  }, [ID]);
  // return movie.results && <ul>movie.results.map(el => )</ul>;
}
