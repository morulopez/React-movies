const URL_API = 'http://www.omdbapi.com/?apikey=2739c3ec&s=';

export function getMoviesService(query){
    if(query==='') return null;
    try{
        return fetch(`${URL_API}${query}`)
        .then(res=>res.json())
        .then(json=>{
            return mapMovies(json);
        })
    }catch(e){
        throw new Error('Error Searching Movies')
    }
}

const mapMovies=(movies)=>{
    return movies.Search?.map(movie=>({
        id:movie.imdbID,
        title:movie.Title,
        year:movie.Year,
        poster:movie.Poster
    }));
}