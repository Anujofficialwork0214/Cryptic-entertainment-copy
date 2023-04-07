import React from 'react'
import { useParams } from 'react-router-dom';

const YoutubeVideo = () => {

    const { videoId } = useParams();

  return (
    <div className='bg-slate-100 dark:bg-slate-900 pb-8'>
         <iframe width="100%" height="100vh" className='md:h-screen h-full' src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  )
}

export default YoutubeVideo