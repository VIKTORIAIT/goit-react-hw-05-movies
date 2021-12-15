import React, { useEffect, useState } from "react";
import { Route, Switch, useParams, useRouteMatch } from "react-router";
import ReviewsBlock from "../components/ReviewsBlock/ReviewsBlock";
import CastBlock from "../components/CastBlock/CastBlock";
import { getMoviesByDetailsByID } from "../services/ApiService";
import { NavLink } from "react-router-dom";
import s from "./MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
  const { id: movieId } = useParams();
  const { url } = useRouteMatch();
  const [movie, setMovie] = useState(null);
  console.log(useParams());
  useEffect(() => {
    getMoviesByDetailsByID(movieId)
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
        <>
          <div>
            <button type="button">Go back</button>
            <div>
              <img
                width="200px"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt="{movie.tagline}"
              />
            </div>
            <div>
              <h3>
                {movie.original_title} (
                {new Date(movie.release_date).getFullYear()})
              </h3>
              <p>User Score: {+movie.vote_average * 10}%</p>
              <b>Overview</b>
              <p>{movie.overview}</p>
              <b>Genres</b>
              <p>
                {movie.genres.map((el) => {
                  return el.name + " ";
                })}
              </p>
            </div>
          </div>
          <div>
            <h3>Additional information</h3>
            <NavLink
              className={s.link}
              activeClassName={s.activeLink}
              to={`${url}/cast`}
            >
              Cast
            </NavLink>
            <NavLink
              className={s.link}
              activeClassName={s.activeLink}
              to={`${url}/reviews`}
            >
              Reviews
            </NavLink>
          </div>
        </>
      )}

      <Switch>
        <Route path={`${url}/cast`} component={CastBlock} />
        <Route path={`${url}/reviews`} component={ReviewsBlock} />
      </Switch>
    </>
  );
}
