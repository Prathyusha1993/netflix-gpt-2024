import React, { useEffect } from 'react'
import Header from './Header';
import useNowPlayingMovies from '../customHooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../customHooks/usePopularMovies';
import useTopRatedMovies from '../customHooks/useTopRatedMovies';
import useUpcomingMovies from '../customHooks/useUpcomingMovies';
import useTrendingMovies from '../customHooks/useTrendingMovies';

const Browse = () => {
 useNowPlayingMovies();
 usePopularMovies();
 useTopRatedMovies();
 useUpcomingMovies();
 useTrendingMovies();

  return (
    <div>
        <Header />
        {/* 
        main video container
            -video bg
            -video title
        secondary container
            -movie lists with category * n
                -movie cards * n
         */}
         <MainContainer />
         <SecondaryContainer />
    </div>
  )
}

export default Browse;