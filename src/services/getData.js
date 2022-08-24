import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3"
const API_KEY = import.meta.env.VITE_TMDB_API_KEY

const getLatestMovies = async (pageNumber) => {
    console.log("pageNumber: ", pageNumber)
    // If pageNumber is truthy, run the below function, otherwise run the function without page as url param.
    // Did seem to work even though pageNumber was null though
    if (pageNumber) {
        const res = await axios.get(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}&include_adult=false&page=${pageNumber}`)
        return res
    } else {
        const res = await axios.get(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}&include_adult=false`)
        return res
    }
}

const getPopularMovies = async (pageNumber) => {
    console.log("pageNumber: ", pageNumber)
    // If pageNumber is truthy, run the below function, otherwise run the function without page as url param.
    if (pageNumber) {
        const res = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&include_adult=false&page=${pageNumber}`)
        return res
    } else {
        const res = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&include_adult=false`)
        return res
    }
}

const getTopRated = async (pageNumber) => {
    console.log("pageNumber: ", pageNumber)
    // If pageNumber is truthy, run the below function, otherwise run the function without page as url param.
    if (pageNumber) {
        const res = await axios.get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&include_adult=false&region=SE&page=${pageNumber}`)
        return res
    } else {
        const res = await axios.get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&include_adult=false&region=SE`)
        return res
    }
}

const getMovie = async (movieId) => {
    console.log("MovieId: ", movieId)
    if (movieId) {
        const res = await axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&include_adult=false&append_to_response=credits,similar`)
        return res
    }
}

const getActor = async (actorId) => {
    if (actorId) {
        const res = await axios.get(`${BASE_URL}/person/${actorId}?api_key=${API_KEY}&include_adult=false`)
        return res
    }
}

const getMoviesOfActor = async (actorId) => {
    if (actorId) {
        const res = await axios.get(`${BASE_URL}/discover/movie/?api_key=${API_KEY}&include_adult=false&with_people=${actorId}`)
        return res
    }
}

const getGenre = async () => {
    const res = await axios.get(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`)
    return res
}

const getMoviesByGenre = async (pageNumber, id) => {
    if (pageNumber) {
        const res = await axios.get(`${BASE_URL}/discover/movie/?api_key=${API_KEY}&include_adult=false&with_genres=${id}&page=${pageNumber}`)
        return res
    } else {
        const res = await axios.get(`${BASE_URL}/discover/movie/?api_key=${API_KEY}&include_adult=false&with_genres=${id}`)
        return res
    }
}

export default {
    getLatestMovies,
    getPopularMovies,
    getTopRated,
    getMovie,
    getActor,
    getMoviesOfActor,
    getGenre,
    getMoviesByGenre,
}