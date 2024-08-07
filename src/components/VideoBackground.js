import React from 'react'
import { useSelector } from 'react-redux';
import useMovieTrailer from '../customHooks/useMovieTrailer';

const VideoBackground = ({movieId}) => {
    const  trailer = useSelector(store => store.movies?.trailerVideo);
    useMovieTrailer(movieId);

  return (
    <div>
        <iframe 
        width="560" 
        height="315" 
        src={"https://www.youtube.com/embed/" + trailer?.key} 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        ></iframe>
    </div>
  )
}

export default VideoBackground;