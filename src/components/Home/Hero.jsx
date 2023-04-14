import React, { useEffect, useState } from 'react'
import img1 from '../../assets/maxresdefault (4).jpg'
import img2 from '../../assets/WhatsApp-Image-2023-03-20-at-11.37.23-AM.jpeg'
import img3 from '../../assets/ep 1.jpg'
import img4 from '../../assets/ep 2.jpg'
import { IoPlay } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import ImageShadow from 'react-image-shadow';
import 'react-image-shadow/assets/index.css';


const banners = [
    {
        'cover' : img1,
        'video_sample' : '/hero/ezgif-5-c900b725d7.gif',
        'videoId': 'kl5JgeR7LgI'
    },
    {
        'cover' : img2,
        'video_sample' : '/hero/ezgif-5-dbf9421843.gif',
        'videoId': 'JQUr46o5EOg'
    },
    {
        'cover' : img3,
        'video_sample' : '/hero/ezgif-5-0875e29b53.gif',
        'videoId': 'tLTK5s_Q6AY'
    },
    {
        'cover' : img4,
        'video_sample' : '/hero/ezgif-5-89abffe158.gif',
        'videoId': 'ynxDNBvxZuc'
    }
];

const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(Math.floor(Math.random() * banners.length))
    const changeImage = () => {
        const randomNumber = Math.floor(Math.random() * banners.length);;
        setCurrentImageIndex(randomNumber);
    }
    useEffect(() => changeImage(), [])

    const [fullSize, setFullSIze] = useState(banners[currentImageIndex].video_sample)
    const [videoPre, setVideoPre] = useState(banners[currentImageIndex].videoId)

    const getImage = (image, video) => {
        //console.log(image);
        setFullSIze(image)
        setVideoPre(video)
    }

    return (
        <div className='w-full relative z-10 mb-10 md:mb-0'>
            <div className='pt-0 w-full gradient-bg box-shadow'>
                {/* <img src={banners[currentImageIndex]} alt='Banner' className='w-full' /> */}
                <img src={fullSize} alt='Banner' className='w-full image' once />
            </div>

            <Link to={`/video/${videoPre}`}>
            <div className="group absolute md:top-[40%] top-[30%] md:left-[50%] left-[40%] bg-rose-500/20 backdrop-blur-md rounded-full p-3 cursor-pointer">
                <div className='ripple'><IoPlay className="h-12 w-12 text-rose-500 dark:text-rose-500 " /></div>
                <span className='mt-5 group-hover:block hidden absolute bottom--4 bg-rose-500/20 text-rose-500 px-4  text-lg w-max left-[50%] translate-x-[-50%] rounded-xl backdrop-blur-md transition-all duration-500 delay-150 ease-in-out font-medium'>Watch Full Video</span>
            </div>
            </Link>
            

            <div className='absolute bottom-[50px] bg-gray-500/30 p-3 mx-20 my-5 rounded-3xl backdrop-blur-md md:block hidden'>
                <div className='grid grid-cols-4 gap-4 '>
                {banners.map((item, i) => (
                    <div className='w-full rounded-2xl' key={i}>
                        <img src={item.cover} alt='Banner' className={`w-full rounded-2xl cursor-pointer hover:grayscale-0 transition-all ease-in-out duration-500 delay-300 ${fullSize === item.video_sample ? 'grayscale-0' : 'grayscale'}`} onClick={() => { getImage(item.video_sample, item.videoId) }} />
                    </div>
                ))}
                </div>
            </div>
        </div>

    )
}

export default Hero