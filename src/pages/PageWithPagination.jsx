import Container from "react-bootstrap/Container"
import { useQuery } from "react-query"
import { useParams, useSearchParams } from "react-router-dom"
import MovieList from "../components/MovieList"
import Pagination from "../components/Pagination"

const PageWithPagination = ({ pageName, queryKey, queryFunction }) => {
    // Recieving name of page, the query key to differentiate the query and the function to be used with react query.
    const [searchParams, setSearchParams] = useSearchParams()

    const handleSetSearchParams = (page) => {
        setSearchParams({ page: page })
    }

    // Get the genre id param from the url
    const { id } = useParams()

    // Get the page param from the url
    let page = searchParams.get("page")
    console.log(page)
    console.log("Im running!")

    // Run the query with the page variable.
    // If id does not exist, only use page as the query key
    // React Query does seem to remove id when it isn't available automatically though.
    const { data, isLoading, isError, error } = useQuery([queryKey, id ? { page, id } : { page }], () => id ? queryFunction(page, id) : queryFunction(page))

    console.log(data)

    return (
        <>
            <Container>
                <h2>{pageName}</h2>
                {/* Conditionally showing information */}
                {isLoading && (
                    <p>Data is loading...</p>
                )}
                {isError && (
                    <p>An error occured: {error.message}</p>
                )}
                {data && (
                    <MovieList data={data} />
                )}
            </Container >
            {data && (
                <Pagination page={page} total_pages={data.data.total_pages} handleSetSearchParams={handleSetSearchParams} />
            )}
        </>
    )
}

export default PageWithPagination