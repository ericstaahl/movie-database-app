import { useState } from "react"
import Container from "react-bootstrap/Container"
import { useQuery } from "react-query"
import { useSearchParams } from "react-router-dom"
import MovieList from "../components/MovieList"
import Pagination from "../components/Pagination"
import getData from "../services/getData"
import Button from 'react-bootstrap/Button'

const TrendingPage = () => {
    // Recieving name of page, the query key to differentiate the query and the function to be used with react query.
    const [searchParams, setSearchParams] = useSearchParams()
    const [timeFrame, setTimeFrame] = useState('day')
    console.log('Timeframe: ', timeFrame)

    const handleSetSearchParams = (page) => {
        setSearchParams({ page: page })
    }

    // Get the page param from the url
    let page = searchParams.get("page")
    console.log(page)
    console.log("Trending page running!")

    // Run the query with the page variable.
    // If id does not exist, only use page as the query key
    // React Query does seem to remove id when it isn't available automatically though.
    const { data, isLoading, isError, error } = useQuery(['trending', { page, timeFrame }], () => getData.getTrending(page, timeFrame))

    console.log(data)

    return (
        <>
            <Container>
                <Button onClick={() => timeFrame === 'day' ? setTimeFrame('week') : setTimeFrame('day')}>Toggle</Button>
                <h2>Trending Page</h2>
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

export default TrendingPage