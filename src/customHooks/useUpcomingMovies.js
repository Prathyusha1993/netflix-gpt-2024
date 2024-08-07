import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUpcomingMovies } from '../utils/movieSlice';
import { API_OPTIONS } from '../utils/constants';

const useUpcomingMovies = () => {
    const dispatch = useDispatch();

    const getUpcomingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS);
        const jsonData = await data.json();
         console.log('upcoming movies', jsonData.results);
         dispatch(addUpcomingMovies(jsonData.results));
    };

    useEffect(() => {
        getUpcomingMovies();
    }, []);
}

export default useUpcomingMovies;