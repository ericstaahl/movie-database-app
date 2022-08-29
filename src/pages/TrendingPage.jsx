import Container from "react-bootstrap/Container"
import { useQuery } from "react-query"
import { useSearchParams } from "react-router-dom"
import MovieList from "../components/MovieList"
import Pagination from "../components/Pagination"
import getData from "../services/getData"
import Button from 'react-bootstrap/Button'
import useLocalStorage from "../hooks/useLocalStorage"

const TrendingPage = () => {
    // Recieving name of page, the query key to differentiate the query and the function to be used with react query.
    const [searchParams, setSearchParams] = useSearchParams()
    const [savedValue, setValue] = useLocalStorage('timeFrame', 'day')
    console.log('Timeframe: ', savedValue)

    const handleSetSearchParams = (page) => {
        setSearchParams({ page: page })
    }

    // Get the page param from the url
    let page = searchParams.get("page")
    console.log(page)

    // Run the query with the page variable.
    // If id does not exist, only use page as the query key
    // React Query does seem to remove id when it isn't available automatically though.
    const { data, isLoading, isError, error } = useQuery(['trending', { page, savedValue }], () => getData.getTrending(page, savedValue))

    console.log(data)

    return (
        <>
            <Container>
                <h2 className="mt-2">{savedValue === 'day' ? <p>Trending movies today</p> : <p>Trending movies this week</p>}</h2>
                <Button onClick={() => {
                    setSearchParams({ page: 1 })
                    savedValue === "day"
                        ? setValue("week")
                        : setValue("day")
                }}>Toggle
                </Button>
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
            {
                data && (
                    <Pagination page={page} total_pages={data.data.total_pages} handleSetSearchParams={handleSetSearchParams} />
                )
            }
        </>
    )
}

export default TrendingPage