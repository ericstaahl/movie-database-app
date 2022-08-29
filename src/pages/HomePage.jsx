import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import RecentlyViewedMovies from "../components/RecentlyViewedMovies"
import Row from "react-bootstrap/Row"

const HomePage = () => {
  return (
    <Container className="">
      <Row className="d-flex justify-content-center align-items-cente text-center">
        <Col className="mt-5" xs={12}>
          <h2>Welcome to the app!</h2>
        </Col>
        <Col className="mt-5" xs={12}>
          <RecentlyViewedMovies />
        </Col>
      </Row>
    </Container>
  )
}

export default HomePage