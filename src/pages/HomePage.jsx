import Container from "react-bootstrap/Container"
import RecentlyViewedMovies from "../components/RecentlyViewedMovies"

const HomePage = () => {
  return (
    <Container className="d-flex justify-content-center flex-wrap align-items-center min-vh-100">
      <h2>Welcome to the Movie Database</h2>
      <RecentlyViewedMovies />
    </Container>
  )
}

export default HomePage