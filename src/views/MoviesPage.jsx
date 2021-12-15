import { useEffect, useRef, useState } from "react";
import { useHistory, useRouteMatch } from "react-router";
import RenderList from "../components/RenderList/RenderList";
import { getMoviesBySearch } from "../services/ApiService";
import s from "./MoviesPage.module.css";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const inputRef = useRef(null);
  const match = useRouteMatch();

  const history = useHistory();
  const {
    location: { search },
  } = history;

  useEffect(() => {
    if (!search) {
      setMovies([]);
      return;
    }
    const query = search.split("?query=").join("");

    getMoviesBySearch(query)
      .then((data) => {
        setMovies(data.results);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [search]);

  // console.log(history);
  const onSearchClick = () => {
    history.push(match.url + `?query=` + inputRef.current.value);

    inputRef.current.value = "";
  };

  return (
    <>
      <input type="text" ref={inputRef} placeholder="Search your movie" />
      <button className={s.btn} type="button" onClick={onSearchClick}>
        Search
      </button>
      <RenderList movies={movies} />
    </>
  );
}
