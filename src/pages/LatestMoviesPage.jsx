import Container from "react-bootstrap/Container"
import ListGroup from "react-bootstrap/ListGroup"
import { useQuery } from "react-query"
import getData from "../services/getData"
ListGroup

const LatestMoviesPage = () => {

    const { data, isLoading, isError, error } = useQuery(['latest-movies'], getData.getLatestMovies)

    console.log(data)

    return (
        <Container>
            <h2>Latest Movies</h2>
            {isLoading && (
                <p>Data is loading...</p>
            )}
            {isError && (
                <p>An error occured: {error.message}</p>
            )}
            {data && (
                <ListGroup>
                    {data.data.results.map( movie =>
                        <ListGroup.Item key={movie.id}>
                            <h3>{movie.title}</h3>
                            <p>{movie.release_date}</p>
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={"Poster of movie: " + movie.title} />
                        </ListGroup.Item>
                    )}
                </ListGroup>

            )}
        </Container>
    )
}

export default LatestMoviesPage