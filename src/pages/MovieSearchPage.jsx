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
    // State to save input from search form
    const [formValue, setFormValue] = useState('')

    // Initially see if there is a search parameter in the url
    let searchQuery = searchParams.get('search')

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
        // set the url params so that the query is saved to browser history
        handleSetSearchParams()
    }


    // Get the page param from the url
    let page = searchParams.get("page")
    console.log(page)
    console.log("Movie search page is running!")

    // Run the query with the page variable and search query.
    const { data, isLoading, isError, error } = useQuery(['movie-search', { page, searchQuery }], () => getData.getSearchedMovies(page, searchQuery), {enabled: searchQuery ? true : false})

    console.log(data)

    return (
        <>
            <Container>
                <Form onSubmit={handleFormSubmit}>
                    <Form.Group className="d-flex my-2">
                        <Form.Label className="mx-2">Search</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your search query"
                            value={formValue}
                            onChange={(e) => setFormValue(e.target.value)}
                        />
                        <Button className='mx-2' type='submit'>Search</Button>
                    </Form.Group>
                </Form>
                <h2>Movie search</h2>
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

export default MovieSearchPage