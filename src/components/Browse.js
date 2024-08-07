import React, { useEffect } from 'react'
import Header from './Header';
import useNowPlayingMovies from '../customHooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
 useNowPlayingMovies();

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