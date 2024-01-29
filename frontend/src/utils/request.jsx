const API_KEY = import.meta.env.VITE_API_KEY
const fetchData = {
  getUpcommingMovies: `/movie/now_playing?language=en-US&page=1&api_key=${API_KEY}`,
  getTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  getNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  getTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  getActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  getComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  getHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  getRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  getDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  getTvShow: `tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
};

export default fetchData;