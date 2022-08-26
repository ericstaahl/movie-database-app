const storedMovies = JSON.parse(localStorage.getItem("recently-viewed-movies"))

const RecentlyViewedMovies = () => {

    return (
        <div>
            <h3>Recently viewed movies</h3>
            {storedMovies && (
                Object.values(storedMovies).map((movie) => (
                    <div key={movie.id}>
                        <p>{movie.title}</p>
                    </div>
                ))
            )}
        </div>
    )
}

export default RecentlyViewedMovies