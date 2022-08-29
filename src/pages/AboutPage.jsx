import Container from "react-bootstrap/Container"
import Image from "react-bootstrap/Image"

const AboutPage = () => {
    return (
        <>
            <Container>
                <h2>About this app</h2>
                <p>This product uses the TMDB API but is not endorsed or certified by TMDB.</p>
                <Image className="w-25 mt-2" fluid src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg" alt="The logo of TMDB" />
            </Container>
        </>
    )
}

export default AboutPage