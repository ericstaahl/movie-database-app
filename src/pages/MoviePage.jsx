import Container from "react-bootstrap/Container"
import { useQuery } from "react-query"
import getData from "../services/getData"
import { Link, useParams } from "react-router-dom"
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const MoviePage = () => {
    // Get the id param from the url
    const { id } = useParams()
    console.log(id)
    // Run the query with the id.
    const { data, isLoading, isError, error } = useQuery(['movie', id], () => getData.getMovie(id))

    console.log(data)

    return (
        <>
            <Container>
                {/* Conditionally showing information */}
                {isLoading && (
                    <p>Data is loading...</p>
                )}
                {isError && (
                    <p>An error occured: {error.message}</p>
                )}
                {data && (
                    <>
                        <Container>
                            <Row>
                                <h2 className="my-3">{data.data.original_title}</h2>
                                <Col lg={6}>
                                    {data.data.poster_path
                                        ? <img className="img-fluid"
                                            src={`https://image.tmdb.org/t/p/w500${data.data.poster_path}`}
                                            alt={"Poster of movie: " + data.data.title} />
                                        : <p>No poster available</p>}
                                </Col>
                                <Col lg={6}>
                                    <h3>Information</h3>
                                    <p>Release date: {data.data.release_date}</p>
                                    <p>Runtime: {data.data.runtime} minutes</p>
                                    <p>Tagline: {data.data.tagline}</p>
                                    <h4>Description</h4>
                                    <p>{data.data.overview}</p>
                                </Col>
                                <h3>Actors</h3>
                                <Col className="d-md-flex flex-md-wrap" md={12} lg={6}>
                                    {data.data.credits.cast.map(actor => (
                                        <Col className="p-2" md={4} lg={3} key={actor.id}>
                                            <Link to={`/people/${actor.id}`}>{actor.name}</Link>
                                            <p>{actor.character}</p>
                                        </Col>
                                    ))}
                                </Col>
                            </Row>
                        </Container>
                        <Row>
                            {data.data.similar && (
                                <div>
                                    <h3>Similar movies</h3>
                                    <Col md={6} className="d-md-flex flex-md-wrap">
                                        {data.data.similar.results.map((movie) => (
                                            <Col key={movie.id} className="d-md-flex p-3" xs={12} md={4}>
                                                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                                            </Col>
                                        ))}
                                    </Col>
                                </div>
                            )}
                        </Row>
                    </>
                )}
            </Container >
        </>
    )
}

export default MoviePage