import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Navigation from './components/Navigation'
import MoviePage from './pages/MoviePage';
import ActorPage from './pages/ActorPage';
import GenrePage from './pages/GenrePage';
import PageWithPagination from './pages/PageWithPagination';
import getData from './services/getData';
import TrendingPage from './pages/TrendingPage';
import MovieSearchPage from './pages/MovieSearchPage';

function App() {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/latest"
          element={<PageWithPagination
            pageName={"Latest Movies"}
            queryKey={"latest-movies"}
            queryFunction={getData.getLatestMovies}
          />}
        />
        <Route path="/movie/popular"
          element={<PageWithPagination
            pageName={"Popular Movies"}
            queryKey={"popular-movies"}
            queryFunction={getData.getPopularMovies}
          />}
        />
        <Route path="/top_rated"
          element={<PageWithPagination
            pageName={"Top Rated Movies"}
            queryKey={"top-rated'"}
            queryFunction={getData.getTopRated}
          />}
        />
        <Route path="/trending"
          element={<TrendingPage
          />}
        />
        <Route path="/movies/search"
          element={<MovieSearchPage
          />}
        />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/people/:id" element={<ActorPage />} />
        <Route path="/genres" element={<GenrePage />} />
        <Route path="/genres/movies/:id"
          element={<PageWithPagination
            pageName={"Movies by genre"}
            queryKey={"movies-by-genre"}
            queryFunction={getData.getMoviesByGenre}
          />}
        />
      </Routes>
    </>
  )
}

export default App
