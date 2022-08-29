import Button from 'react-bootstrap/Button'
import Container from "react-bootstrap/Container"
import { useQuery } from "react-query"
import { useSearchParams } from "react-router-dom"
import MovieList from "../components/MovieList"
import Pagination from "../components/Pagination"
import getData from "../services/getData"
import Form from 'react-bootstrap/Form'
import { useState } from "react"

const MovieSearchPage = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    // Initially see if there is a search parameter in the url
    let searchQuery = searchParams.get('search')
    console.log(searchQuery)

    // State to save input from search form
    // If searchQuery is truthy, set initial state to the value of SearchQuery
    // Else, set it to an empty string.
    const [formValue, setFormValue] = useState(() => searchQuery ? searchQuery : "")

    const handleSetSearchParams = (page) => {
        // If page is truthy, include it in the url params
        if (page) {
            setSearchParams({ page: page, search: searchQuery })
            return
        } else {
            setSearchParams({ search: searchQuery })
            return
        }
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        // Set search query to the value of the form so that the query runs
        searchQuery = formValue
        // Set the url params so that the query is saved to browser history
        // Excluding page as param so that the value of page is reset when a new search is made.
        handleSetSearchParams()
    }

    // Get the page param from the url
    let page = searchParams.get("page")

    // Run the query with the page variable and search query.
    // The "enabled" property makes sure that the query only runs if searchQuery has been set to something truthy
    // This way a search is only triggered after a search has been made (or there is a query in the url)
    const { data, isLoading, isError, error } = useQuery(['movie-search', { page, searchQuery }], () => getData.getSearchedMovies(page, searchQuery), { enabled: searchQuery ? true : false })

    console.log(data)

    return (
        <>
            <Container>
                <h2 className='mt-2'>Movie search</h2>
                <Form className='d-flex justify-content-center align-items-center' onSubmit={handleFormSubmit}>
                    <Form.Group className="d-flex my-2">
                        <Form.Label className="mx-2 p-1 d-none d-lg-block">Search</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your search query"
                            value={formValue}
                            // Setting the value as the user types
                            onChange={(e) => setFormValue(e.target.value)}
                        />
                    </Form.Group>
                    <Button className='mx-2' type='submit'>Search</Button>
                </Form>
                {/* Conditionally showing information */}
                {isLoading && (
                    <p>Data is loading...</p>
                )}
                {isError && (
                    <p>An error occured: {error.message}</p>
                )}
                {data && (
                    <>
                        <p className='fs-4 mt-2'>{`Searched for "${searchQuery}"`}</p>
                        <MovieList data={data} />
                    </>
                )}
                {data?.data.results.length === 0 && (
                    <p>No results where found</p>
                )}
            </Container >
            {data && (
                <Pagination page={page} total_pages={data.data.total_pages} handleSetSearchParams={handleSetSearchParams} />
            )}
        </>
    )
}

export default MovieSearchPage