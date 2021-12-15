import { NavLink } from "react-router-dom";
import s from "./RenderList.module.css";

const RenderList = ({ movies }) => {
  return (
    <>
      {movies && !!movies.length && (
        <ul className={s.list}>
          {movies.map((movie) => (
            <li key={movie.id} className={s.item}>
              <NavLink to={`/movies/${movie.id}`}>
                {movie.title || movie.name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default RenderList;
