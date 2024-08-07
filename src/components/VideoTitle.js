import React from 'react'

const VideoTitle = ({ title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from black'> 
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/2'>{overview}</p>
      <div > 
        <button className='bg-gray-500 text-white p-4 px-12 text-xl rounded-lg hover:bg-opacity-80'>▶️ Play</button>
        <button className='bg-gray-500 text-white p-4 px-12 text-xl m-2 rounded-lg hover:bg-opacity-80'>ℹ️ More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle;