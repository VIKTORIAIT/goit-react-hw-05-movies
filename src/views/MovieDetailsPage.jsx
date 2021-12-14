import React, { useEffect, useState } from "react";
import { Route, Switch, useParams, useRouteMatch } from "react-router";
import CastBlock from "../components/CastBlock/CastBlock";
import ReviewsBlock from "../components/ReviewsBlock/ReviewsBlock";
import { apiService, getMoviesByDetailsByID } from "../services/ApiService";

export default function MovieDetailsPage() {
  const { id: movieId } = useParams();
  const { url } = useRouteMatch();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMoviesByDetailsByID(movieId)
      .then((data) => {
        console.log(data, "daaa");
      })
      .catch((e) => {
        console.error();
      });
    return () => {};
  }, [movieId]);

  return (
    <>
      {movie && <div></div>}

      <Switch>
        <Route path={`${url}/reviews`} component={ReviewsBlock} />
        <Route path={`${url}/cast`} component={CastBlock} />
      </Switch>
    </>
  );
}
