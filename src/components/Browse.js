import React, { useEffect } from 'react'
import Header from './Header';
import useNowPlayingMovies from '../customHooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../customHooks/usePopularMovies';
import useTopRatedMovies from '../customHooks/useTopRatedMovies';
import useUpcomingMovies from '../customHooks/useUpcomingMovies';
import useTrendingMovies from '../customHooks/useTrendingMovies';
import GPTSearchPage from './GPTSearchPage';
import { useSelector } from 'react-redux';

const Browse = () => {
    const showGptSearchView = useSelector(store => store.gpt.showGptSearch);
 useNowPlayingMovies();
 usePopularMovies();
 useTopRatedMovies();
 useUpcomingMovies();
 useTrendingMovies();

  return (
    <div>
        <Header />
        {showGptSearchView ? (<GPTSearchPage />) : (<><MainContainer />
            <SecondaryContainer /></>)}
        
        {/* 
        main video container
            -video bg
            -video title
        secondary container
            -movie lists with category * n
                -movie cards * n
         */}
    </div>
  )
}

export default Browse;