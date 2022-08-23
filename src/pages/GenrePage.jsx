import React from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import getData from '../services/getData'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const GenrePage = () => {
    const { data, isLoading, isError, error } = useQuery(['genre-list'], () => getData.getGenre())
    console.log(data)

    return (
        <>
            <Container>
                <h2>Genres</h2>
                {/* Conditionally showing information */}
                {isLoading && (
                    <p>Data is loading...</p>
                )}
                {isError && (
                    <p>An error occured: {error.message}</p>
                )}
                {data && (
                    <Row>
                        {data.data.genres.map(genre => (
                            <Col key={genre.id} xs={3}>
                                <Link to={`/genres/movies/${genre.id}`}>{genre.name}</Link>
                            </Col>
                        ))}
                    </Row>
                )}
            </Container >
        </>
    )
}

export default GenrePage