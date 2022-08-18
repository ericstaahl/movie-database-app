import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3" 
const API_KEY = import.meta.env.VITE_TMDB_API_KEY

const getLatestMovies = async (pageNumber) => {
    const res = await axios.get(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}&include_adult=false&page=${pageNumber}`)
    return res
}

export default {
    getLatestMovies,
}