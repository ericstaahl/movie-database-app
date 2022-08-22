import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import ListGroup from "react-bootstrap/ListGroup"
import { Link } from "react-router-dom"

const MovieList = ({ data }) => {
    return (
        <ListGroup>
            <div className="row">
                {data.data.results.map(movie =>
                    <Col key={movie.id} xs={12} lg={6} xl={4}>
                        <ListGroup.Item className="d-flex justify-content-center flex-wrap m-1 p-1">
                            <div>
                                <h3>{movie.title}</h3>
                                <p>Release date: {movie.release_date}</p>
                                <p>Average score: {movie.vote_average}</p>
                            </div>
                            {
                                movie.poster_path
                                    ? <img
                                        className="img-fluid"
                                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                        alt={"Poster of movie: " + movie.title}
                                    />
                                    : <p>No poster available</p>
                            }
                            <Col className="d-flex justify-content-center my-2" xs={12}>
                                <Button as={Link} to={`/movies/${movie.id}`}>Read more</Button>
                            </Col>
                        </ListGroup.Item>
                    </Col>
                )}
            </div >
        </ListGroup >)
}

export default MovieList