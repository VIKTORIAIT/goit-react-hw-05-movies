const API_KEY = "87f9885ae1efa5e26738121aab64796c";
// const BASE_URL =
export default async function ApiService() {
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

// export function fetchAuthors() {
//   return ApiService(`${BASE_URL}/authors?_embed=books`);
// }

// export function fetchBooks() {
//   return ApiService(`${BASE_URL}/books`);
// }

// export function fetchBookById(bookId) {
//   return ApiService(`${BASE_URL}/books/${bookId}?_expand=author`);
// }
