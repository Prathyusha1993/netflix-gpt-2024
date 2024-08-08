import React from 'react';
import lang from '../utils/languageConstants';

const GPTSearchBar = () => {
  return (
    <div className='pt-[7%] flex justify-center' >
        <form className='w-1/2 bg-black grid grid-cols-12'>
            <input type='text' className='p-4 m-4 col-span-9 rounded-lg' placeholder={lang.hindi.gptSearchPlaceholder} />
            <button className='py-2 px-4 m-4 col-span-3 bg-red-700 rounded-lg text-white'>{lang.hindi.search}</button>
        </form>
    </div>
  )
}

export default GPTSearchBar;