// https://api.themoviedb.org/3/trending/movie/day


import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTrendingMovies } from '../utils/movieSlice';
import { API_OPTIONS } from '../utils/constants';

const useTrendingMovies = () => {
    const dispatch = useDispatch();

    const getTrendingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/trending/movie/day', API_OPTIONS);
        const jsonData = await data.json();
         console.log('trending movies', jsonData.results);
         dispatch(addTrendingMovies(jsonData.results));
    };

    useEffect(() => {
        getTrendingMovies();
    }, []);
}

export default useTrendingMovies;