import React from 'react'
import GPTSearchBar from './GPTSearchBar';
import GPTMovieSuggestion from './GPTMovieSuggestion';
import { LOGIN_BACKGROUND_IMAGE } from '../utils/constants';

const GPTSearch = () => {
  return (
    <div>
        {/* GPTSearch bar
        gpt moviesuggestion */}
        <div className='absolute -z-10'>
            <img src={LOGIN_BACKGROUND_IMAGE} alt='logo' />
        </div>
        <GPTSearchBar />
        <GPTMovieSuggestion />
    </div>
  )
}

export default GPTSearch;