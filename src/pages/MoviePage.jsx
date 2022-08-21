import Container from "react-bootstrap/Container"
import { useQuery } from "react-query"
import getData from "../services/getData"
import { Link, useParams } from "react-router-dom"

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
                    <div>
                        <h2>{data.data.original_title}</h2>
                        {data.data.poster_path
                            ? <img className="img-fluid"
                                src={`https://image.tmdb.org/t/p/w500${data.data.poster_path}`}
                                alt={"Poster of movie: " + data.data.title} />
                            : <p>No poster available</p>}
                        <p>{data.data.release_date}</p>
                        <p>{data.data.overview}</p>
                        <h3>Actors</h3>
                        {data.data.credits.cast.map(actor => (
                            <div key={actor.id}>
                                <Link to={`/people/${actor.id}`}>{actor.name}</Link>
                                <p>{actor.character}</p>
                            </div>
                        ))}
                    </div>
                )}
            </Container >
        </>
    )
}

export default MoviePage