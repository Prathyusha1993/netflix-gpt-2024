import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../utils/movieSlice';
import { API_OPTIONS } from '../utils/constants';

const usePopularMovies = () => {
    const dispatch = useDispatch();

    const getpopularMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
        const jsonData = await data.json();
         console.log('popular movie', jsonData.results);
         dispatch(addPopularMovies(jsonData.results));
    };

    useEffect(() => {
        getpopularMovies();
    }, []);
}

export default usePopularMovies;