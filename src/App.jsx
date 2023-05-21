import '../style.css';
import { Movies } from './Movies';
import { useMovies } from './hooks/useMovies';

export function App(){
    const {responseMovies,handleSubmit,error,handleSort,handleChange} = useMovies();
    return(
        <div className='page'>
            <div className="row">
                <header>
                    <h1>React Movies App</h1>
                    <form className='form' onSubmit={handleSubmit}>
                        <input style={{borderColor:error ? 'rgb(204, 106, 106)' : ''}} name='query' className='search-input' placeholder='Avengers,Star Wars,The Matrix....' onChange={handleChange}/>
                        <input type="checkbox" name="sort" onChange={handleSort}/>
                        <button type='submit'>Search</button>
                    </form>
                    <p className='error'>{error}</p>
                </header>
                <main>
                   <Movies movies={responseMovies}/>
                </main>
            </div>
        </div>
    )
}