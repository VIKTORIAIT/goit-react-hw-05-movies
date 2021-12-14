import fetch from "../services/ApiService";
import { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
import RenderList from "../components/RenderList/RenderList";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch().then((data) => setMovies(data.results));
  }, []);

  return (
    <>
      <h2>TRENDING TODAY</h2>
      <RenderList movies={movies} />
    </>
  );
}
