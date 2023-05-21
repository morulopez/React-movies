function RenderMovies({movies}){
    return(
        <ul>
        {
            movies.map(movie=>{
                return (
                    <li key={movie.id}>
                        <h3>{movie.title}</h3>
                        <p>{movie.year}</p>
                        <img src={movie.poster} alt={movie.title}/>
                    </li>
                )
            })
        }
        </ul>
    )
}

function NoMoviesResults(){
    return(
        <p>Results No found</p>
    )
}


export function Movies({movies}){
    const hasResults = movies?.length>0;
    return(
        hasResults ? <RenderMovies movies={movies}/> : <NoMoviesResults/>
    )
}


