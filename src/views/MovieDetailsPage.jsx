import React, { Suspense, useEffect, useState } from "react";
import {
  Route,
  Switch,
  useHistory,
  useParams,
  useRouteMatch,
} from "react-router";
import ReviewsBlock from "../components/ReviewsBlock/ReviewsBlock";
import CastBlock from "../components/CastBlock/CastBlock";
import { getMoviesByDetailsByID } from "../services/ApiService";
import { NavLink } from "react-router-dom";
import s from "./MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
  const { id: movieId } = useParams();
  const { url } = useRouteMatch();
  const history = useHistory();
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
  console.log(history.action, "action");

  return (
    <>
      {movie && (
        <>
          <div className={s.mainBlock}>
            <div className={s.secondBlock}>
              <button
                className={s.btn}
                type="button"
                onClick={() => {
                  history.goBack();
                }}
              >
                Go back
              </button>
              <img
                className={s.img}
                width="200px"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt="{movie.tagline}"
              />
            </div>
            <div className={s.textBlock}>
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
              replace
            >
              Cast
            </NavLink>
            <NavLink
              className={s.link}
              activeClassName={s.activeLink}
              to={`${url}/reviews`}
              replace
            >
              Reviews
            </NavLink>
          </div>
        </>
      )}
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route
            path={`${url}/cast`}
            component={(props) => <CastBlock {...props} movieId={movieId} />}
          />
          <Route
            path={`${url}/reviews`}
            component={(props) => <ReviewsBlock {...props} movieId={movieId} />}
          />
        </Switch>
      </Suspense>
    </>
  );
}
