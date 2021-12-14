const API_KEY = "8f2de738199c7699feec131f404430b7";

export async function apiService() {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
  );
  return response.ok
    ? await response.json()
    : Promise.reject(new Error("Not found"));
}

export async function getMoviesBySearch(query) {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`
  );

  if (!response.ok) throw new Error("Not found");

  return await response.json();
}

export async function getMoviesByDetailsByID(id) {
  console.log("getMoviesByDetailsByID worked");
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`
  );

  if (!response.ok) throw new Error("Not found");

  return await response.json();
}

// export function fetchAuthors() {
//   return ApiService(`${BASE_URL}/authors?_embed=books`);
// }

// export function fetchBooks() {
//   return ApiService(`${BASE_URL}/books`);
// }

// export function fetchBookById(bookId) {
//   return ApiService(`${BASE_URL}/books/${bookId}?_expand=author`);
// }

// /trending/get-trending список самых популярных фильмов на сегодня для создания коллекции на главной странице.
// /search/search-movies поиск кинофильма по ключевому слову на странице фильмов.
// /movies/get-movie-details запрос полной информации о фильме для страницы кинофильма.
// /movies/get-movie-credits запрос информации о актёрском составе для страницы кинофильма.
// /movies/get-movie-reviews запрос обзоров для страницы кинофильма.
