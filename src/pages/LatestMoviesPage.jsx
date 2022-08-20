import Container from "react-bootstrap/Container"
import ListGroup from "react-bootstrap/ListGroup"
import Button from "react-bootstrap/Button"
import { useQuery } from "react-query"
import getData from "../services/getData"
import { useSearchParams } from "react-router-dom"

const LatestMoviesPage = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    let page = searchParams.get("page")
    console.log(page)
    const { data, isLoading, isError, error } = useQuery(['latest-movies', page], () => getData.getLatestMovies(page))

    console.log(data)

    return (
        <>
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
                        {data.data.results.map(movie =>
                            <ListGroup.Item key={movie.id}>
                                <h3>{movie.title}</h3>
                                <p>{movie.release_date}</p>
                                {movie.poster_path
                                    ? <img
                                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                        alt={"Poster of movie: " + movie.title}
                                    />
                                    : <p>No poster available</p>}
                            </ListGroup.Item>
                        )}
                    </ListGroup>
                )}
            </Container >
            {data && (
                <div className="d-flex justify-content-center sticky-bottom bg-dark">
                    <Button className="mx-2 my-2" disabled={page <= 1} onClick={() => {
                        if (page && page != 1) {
                            page--
                        } else {
                            page = 1
                        }
                        setSearchParams({ page: page })
                    }
                    }>←</Button>
                    <Button className="mx-2 my-2" disabled={page >= data.data.total_pages} onClick={() => {
                        if (page) {
                            page++
                        } else {
                            page = 2
                        }
                        console.log(page)
                        setSearchParams({ page: page })
                    }
                    }>→</Button>
                </div>
            )}
        </>
    )
}

export default LatestMoviesPage