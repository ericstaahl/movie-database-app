import { NavLink, Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const Navigation = () => {
    return (
        <Navbar bg="dark" variant='dark' collapseOnSelect expand="md">
            <Container>
                <Navbar.Brand as={Link} to={'/'}>Movie Database App</Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link as={NavLink} to={"/latest"} className='text-light'>Latest Movies</Nav.Link>
                        <Nav.Link as={NavLink} to={"/movie/popular"} className='text-light'>Most Popular Movies</Nav.Link>
                        <Nav.Link as={NavLink} to={"/top_rated"} className='text-light'>Top Rated Movies</Nav.Link>
                        <Nav.Link as={NavLink} to={"/trending"} className='text-light'>Trending Movies</Nav.Link>
                        <Nav.Link as={NavLink} to={"/genres"} className='text-light'>Genres</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation