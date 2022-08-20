import Container from "react-bootstrap/Container"
import { useQuery } from "react-query"
import getData from "../services/getData"
import { useParams } from "react-router-dom"

const MoviePage = () => {
    // Get the id param from the url
    const { id } = useParams()
    console.log(id)
    // Run the query with the id.
    const { data, isLoading, isError, error } = useQuery(['latest-movies', id], () => getData.getMovie(id))

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
                    <div>
                        <h2>{data.data.original_title}</h2>
                        {data.data.poster_path
                            ? <img className="img-fluid"
                                src={`https://image.tmdb.org/t/p/w500${data.data.poster_path}`}
                                alt={"Poster of movie: " + data.data.title} />
                            : <p>No poster available</p>}
                        <p>{data.data.release_date}</p>
                        <p>{data.data.overview}</p>
                    </div>
                )}
            </Container >
        </>
    )
}

export default MoviePage