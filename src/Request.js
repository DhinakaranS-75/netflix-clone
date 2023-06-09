const API_KEY = "f090dc4bb242e91baada0d0df6d64b54"
// const BASE_URL = "https://api.themoviedb.org/3"

const request = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}& language=en-india`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}& language=en-india`,
    fetchActionsMovies:`/discover/tv?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/tv?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/tv?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/tv?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:`/discover/tv?api_key=${API_KEY}&with_genres=99`,
}
export default request;