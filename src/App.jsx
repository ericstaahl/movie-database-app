import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Navigation from './components/Navigation'
import LatestMoviesPage from './pages/LatestMoviesPage';
import MoviePage from './pages/MoviePage';
import ActorPage from './pages/ActorPage';

function App() {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/latest" element={<LatestMoviesPage />} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/people/:id" element={<ActorPage />} />
      </Routes>
    </>
  )
}

export default App
