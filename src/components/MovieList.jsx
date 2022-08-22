import ListGroup from "react-bootstrap/ListGroup"
import { Link } from "react-router-dom"

const MovieList = ({ data }) => {
    return (
        <ListGroup>
            {data.data.results.map(movie =>
                <ListGroup.Item key={movie.id}>
                    <h3>{movie.title}</h3>
                    <p>Release date: {movie.release_date}</p>
                    <p>Average score: {movie.vote_average}</p>
                    {movie.poster_path
                        ? <img
                            className="img-fluid"
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={"Poster of movie: " + movie.title}
                        />
                        : <p>No poster available</p>}
                    <Link to={`/movies/${movie.id}`}>Read more</Link>
                </ListGroup.Item>
            )}
        </ListGroup>)
}

export default MovieList