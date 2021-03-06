const API_KEY = '4a4cb8b50063a6ac58397cd840272cb8';

const BASE_URL = 'https://api.themoviedb.org';

async function ApiService(url) {
  const response = await fetch(url);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function fetchPopularMovies() {
  return ApiService(`${BASE_URL}/3/trending/all/day?api_key=${API_KEY}`);
}

export function fetchMoviesByQuery(query) {
  return ApiService(
    `${BASE_URL}/3/search/movie?api_key=${API_KEY}&query=${query}`,
  );
}

export function fetchMovieDetails(movieId) {
  return ApiService(`${BASE_URL}/3//movie/${movieId}?api_key=${API_KEY}`);
}

export function fetchAboutActors(movieId) {
  return ApiService(
    `${BASE_URL}/3//movie/${movieId}/credits?api_key=${API_KEY}`,
  );
}

export function fetchReviews(movieId) {
  return ApiService(
    `${BASE_URL}/3//movie/${movieId}/reviews?api_key=${API_KEY}`,
  );
}