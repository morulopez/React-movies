import whithoutResults from '../mocks/no-results.json';
import { getMoviesService } from '../services/movieService';
import { useState,useRef,useMemo,useCallback } from 'react';
import debounce from 'just-debounce-it';

export function useMovies(){
    const [responseMovies,setResponseMovies] = useState([]);
    const [error,setError]  = useState('');
    const previousSearch = useRef();
    const [sort,setSort] = useState(false);
    const [queryOnChange,setQueryOnChange] = useState('');

    const debauncedGetMovies = useCallback(
        debounce(search=>{
            console.log('search');
            getMovies(search)
        },500)
    ,[])

    const handleSubmit = (e)=>{
        e.preventDefault();
        const {query} = Object.fromEntries(new FormData(e.target));
        if(query.length<3){
            setError('You have to inserts at least 3 characters');
            return setTimeout(()=>setError(''),4000);
        }
        getMovies(query);

    }

    const handleChange = (event)=>{
        setQueryOnChange(event.target.value);
        debauncedGetMovies(queryOnChange);
    }

    const handleSort = (e)=>{
        setSort(!sort)
    }
    const getMovies = useCallback(async (query)=>{
        if(query===previousSearch.current) return;
        if(query){
            try{
                previousSearch.current=query;
                const movies = await getMoviesService(query);
                setResponseMovies(movies);
            }catch(e){
                setError('Problem arise');
            }
        }
        else setResponseMovies(whithoutResults)
    },[])

    const sortMovies = useMemo(()=>{
        return sort ? [...responseMovies].sort((a,b)=>a.title.localeCompare(b.title)):responseMovies
    },[sort,responseMovies])
    return {responseMovies:sortMovies,handleSubmit,error,handleSort,handleChange}
}