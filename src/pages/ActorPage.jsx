import Container from "react-bootstrap/Container"
import { useQuery } from "react-query"
import getData from "../services/getData"
import { useParams } from "react-router-dom"

const ActorPage = () => {
    // Get the actor id param from the url
    const { id } = useParams()
    console.log(id)
    // Run the query with the id variable.
    const { data, isLoading, isError, error } = useQuery(['actor', id], () => getData.getActor(id))

    console.log(data)

    return (
        <>
            <Container>
                <h2>Actor</h2>
                {/* Conditionally showing information */}
                {isLoading && (
                    <p>Data is loading...</p>
                )}
                {isError && (
                    <p>An error occured: {error.message}</p>
                )}
                {data && (
                    <>
                        <h3>{data.data.name}</h3>
                        {data.data.profile_path
                            ? <img
                                className="img-fluid"
                                src={`https://image.tmdb.org/t/p/w500${data.data.profile_path}`}
                                alt={"Picture of actor: " + data.data.name}
                            />
                            : <p>No picture available</p>}
                            <p>Birthday: {data.data.birthday}</p>
                            <p>Known for: {data.data.known_for_department}</p>
                    </>
                )}
            </Container >
        </>
    )
}

export default ActorPage