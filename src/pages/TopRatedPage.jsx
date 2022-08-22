import Container from "react-bootstrap/Container"
import { useQuery } from "react-query"
import getData from "../services/getData"
import { useSearchParams } from "react-router-dom"
import MovieList from "../components/MovieList"
import Pagination from "../components/Pagination"

const PopularMoviesPage = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    const handleSetSearchParams = (page) => {
        setSearchParams({ page: page })
    }

    // Get the page param from the url
    let page = searchParams.get("page")
    console.log(page)
    // Run the query with the page variable.
    const { data, isLoading, isError, error } = useQuery(['top_rated', page], () => getData.getTopRated(page))

    console.log(data)

    return (
        <>
            <Container>
                <h2>Top Rated Movies</h2>
                {/* Conditionally showing information */}
                {isLoading && (
                    <p>Data is loading...</p>
                )}
                {isError && (
                    <p>An error occured: {error.message}</p>
                )}
                {data && (
                    // Passing data as prop to the movie list component
                    <MovieList data={data} />
                )}
            </Container >
            {data && (
                <Pagination page={page} total_pages={data.data.total_pages} handleSetSearchParams={handleSetSearchParams} />
            )}
        </>
    )
}

export default PopularMoviesPage