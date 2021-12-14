import { apiService } from "../services/ApiService";
import { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
import RenderList from "../components/RenderList/RenderList";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    apiService()
      .then((data) => setMovies(data.results))
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <h2>TRENDING TODAY</h2>
      <RenderList movies={movies} />
    </>
  );
}
