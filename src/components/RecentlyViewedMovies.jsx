import { Link } from "react-router-dom"


const RecentlyViewedMovies = () => {
    // Get recently viewed movies from Local Storage
    const storedMovies = JSON.parse(localStorage.getItem("recently-viewed-movies"))

    return (
        <div>
            <h3>Recently viewed movies</h3>
            {storedMovies && (
                Object.values(storedMovies).map((movie) => (
                    <div key={movie.id}>
                        <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                    </div>
                ))
            )}
            {!storedMovies && (
                <p className="mt-3">No movies to show</p>
            )}
        </div>
    )
}

export default RecentlyViewedMovies