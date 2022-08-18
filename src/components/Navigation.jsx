import { NavLink, Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

const Navigation = () => {
    return (
        <Navbar bg="dark" variant='dark' collapseOnSelect expand="md">
            <Container>
                <Navbar.Brand as={Link} to={'/'} >React Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link as={NavLink} to={"/"} className='text-light'>Top Rated Movies</Nav.Link>
                        <Nav.Link as={NavLink} to={"/"} className='text-light'>Most Popular Movies</Nav.Link>
                        <Nav.Link as={NavLink} to={"/"} className='text-light'>Latest Movies</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation