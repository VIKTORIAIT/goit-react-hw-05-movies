import { NavLink } from "react-router-dom";

const RenderList = ({ movies }) => {
  return (
    <>
      {movies && !!movies.length && (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <NavLink to={`/movies/${movie.id}`}>
                {movie.original_title}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default RenderList;
