import React, { useEffect, useState } from "react";
import img1 from "../../assets/maxresdefault (4).jpg";
import img2 from "../../assets/WhatsApp-Image-2023-03-20-at-11.37.23-AM.jpeg";
import img3 from "../../assets/ep 1.jpg";
import img4 from "../../assets/ep 2.jpg";
import { IoPlay } from "react-icons/io5";
import { Link } from "react-router-dom";
import ImageShadow from "react-image-shadow";
import "react-image-shadow/assets/index.css";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

const banners = [
  {
    cover: img1,
    video_sample: "/hero/ezgif-5-c900b725d7.gif",
    videoId: "kl5JgeR7LgI",
  },
  {
    cover: img2,
    video_sample: "/hero/ezgif-5-dbf9421843.gif",
    videoId: "JQUr46o5EOg",
  },
  {
    cover: img3,
    video_sample: "/hero/ezgif-5-0875e29b53.gif",
    videoId: "tLTK5s_Q6AY",
  },
  {
    cover: img4,
    video_sample: "/hero/ezgif-5-89abffe158.gif",
    videoId: "ynxDNBvxZuc",
  },
];

const marqueeContent = [
  { content: "PERSONAL BRAND BUILDING" },
  { content: "CONTENT STRATEGY DEVELOPMENT" },
  { content: "BRAND IDENTITY" },
  { content: "360° PROFILE MAKEOVER" },
  { content: "INTENT BASED PERFORMANCE MARKETING" },
  { content: "SOCIAL MEDIA GROWTH" },
  { content: "BRAND CONSULTATION" },
];



const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(
    Math.floor(Math.random() * banners.length)
  );
  const changeImage = () => {
    const randomNumber = Math.floor(Math.random() * banners.length);
    setCurrentImageIndex(randomNumber);
  };
  useEffect(() => changeImage(), []);

  const [fullSize, setFullSIze] = useState(
    banners[currentImageIndex].video_sample
  );
  const [videoPre, setVideoPre] = useState(banners[currentImageIndex].videoId);

  const getImage = (image, video) => {
    //console.log(image);
    setFullSIze(image);
    setVideoPre(video);
  };

  return (
    <div className="w-full relative z-10 mb-10 md:mb-0">
      {/* <div className="pt-0 w-full gradient-bg box-shadow">
        <img src={banners[currentImageIndex]} alt='Banner' className='w-full' />
        <img src={fullSize} alt='Banner' className='w-full image' once />
        <img
          src="/hero/bgimage5.jpg"
          alt="Banner"
          className="w-full image  "
          once
        />
      </div> */}
      <div className="relative  w-full h-screen sm:h-auto pt-0 gradient-bg box-shadow">
        <img
          src="/hero/bgimage5.jpg"
          alt="Banner"
          className="w-full image h-full object-fill"
          once
        />
        {/* Black fade at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      </div>

      {/* <Link to={`/video/${videoPre}`}>
            <div className="group absolute md:top-[40%] top-[30%] md:left-[50%] left-[40%] bg-rose-500/20 backdrop-blur-md rounded-full p-3 cursor-pointer">
                <div className='ripple'><IoPlay className="h-12 w-12 text-rose-500 dark:text-rose-500 " /></div>
                <span className='mt-5 group-hover:block hidden absolute bottom--4 bg-rose-500/20 text-rose-500 px-4  text-lg w-max left-[50%] translate-x-[-50%] rounded-xl backdrop-blur-md transition-all duration-500 delay-150 ease-in-out font-medium'>Watch Full Video</span>
            </div>
            </Link> */}
      <div className="flex flex-col items-center justify-center absolute inset-0 top-[-20%] md:top-[-20%] xl:top-[-30%] text-center p-3 cursor-pointer leading-[1.2]">
        <p className="text-[35px] md:text-[55px] xl:text-[135px] text-white font-[300]">
          TRUST. <span className="font-[500]">BUILT IN.</span>
        </p>

        <p className="text-[25px] md:text-[45px] xl:text-[114px] text-white font-[300]">
          FUELING <span className="font-[500]">LEADERSHIP.</span>
        </p>

        <p className="text-[20px] md:text-[25px] xl:text-[39px] text-white font-[500]">
          BUILDING PERSONAL BRANDS THAT INSPIRE.
        </p>

        <p className="text-[15px] md:text-[20px] xl:text-[27px] text-white font-[500] leading-snug">
          Trust turns audiences into believers.
          <br className="block md:hidden" />
          We help you earn it.
        </p>

        <p className="text-[15px] md:text-[20px] xl:text-[27px] text-white font-[500] mt-2">
          “Your brand. Your people.”
        </p>

        <p className="text-[13px] md:text-[15px] xl:text-[22px] text-white font-[300] mt-3">
          Empowering professionals and founders to grow with trust, visibility,
          and impact.
        </p>
      </div>

      <div className="absolute bg-black xl:bottom-[40px] w-full md:h-60 flex justify-center items-center">
        <Marquee loop={0} speed={50} pauseOnHover={true}>
          <div className="flex justify-center items-center  ">
            {" "}
            {marqueeContent.map((item, idx) => (
              <div key={idx} className="flex items-center gap-8 px-4">
                {/* Small screen icon */}
                <span className="block md:hidden">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="2" />
                    <path d="M12 1v2" />
                    <path d="M12 21v2" />
                    <path d="M4.22 4.22l1.42 1.42" />
                    <path d="M18.36 18.36l1.42 1.42" />
                    <path d="M1 12h2" />
                    <path d="M21 12h2" />
                    <path d="M4.22 19.78l1.42-1.42" />
                    <path d="M18.36 5.64l1.42-1.42" />
                    <circle cx="12" cy="12" r="8" />
                  </svg>
                </span>


                {/* Medium screen icon */}
                <span className="hidden md:block lg:hidden">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="2" />
                    <path d="M12 1v2" />
                    <path d="M12 21v2" />
                    <path d="M4.22 4.22l1.42 1.42" />
                    <path d="M18.36 18.36l1.42 1.42" />
                    <path d="M1 12h2" />
                    <path d="M21 12h2" />
                    <path d="M4.22 19.78l1.42-1.42" />
                    <path d="M18.36 5.64l1.42-1.42" />
                    <circle cx="12" cy="12" r="8" />
                  </svg>
                </span>

                {/* Large screen icon */}
                <span className="hidden lg:block xl:hidden">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="2" />
                    <path d="M12 1v2" />
                    <path d="M12 21v2" />
                    <path d="M4.22 4.22l1.42 1.42" />
                    <path d="M18.36 18.36l1.42 1.42" />
                    <path d="M1 12h2" />
                    <path d="M21 12h2" />
                    <path d="M4.22 19.78l1.42-1.42" />
                    <path d="M18.36 5.64l1.42-1.42" />
                    <circle cx="12" cy="12" r="8" />
                  </svg>
                </span>

                {/* Extra large screen icon */}
                <span className="hidden xl:block">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="2" />
                    <path d="M12 1v2" />
                    <path d="M12 21v2" />
                    <path d="M4.22 4.22l1.42 1.42" />
                    <path d="M18.36 18.36l1.42 1.42" />
                    <path d="M1 12h2" />
                    <path d="M21 12h2" />
                    <path d="M4.22 19.78l1.42-1.42" />
                    <path d="M18.36 5.64l1.42-1.42" />
                    <circle cx="12" cy="12" r="8" />
                  </svg>
                </span>
                <p className="text-white md:text-[60px]">{item?.content}</p>
              </div>
            ))}
          </div>
        </Marquee>
      </div>

      {/* <div className="absolute bottom-[50px] bg-gray-500/30 p-3 mx-20 my-5 rounded-3xl backdrop-blur-md md:block hidden">
        <div className="grid grid-cols-4 gap-4 ">
          {banners.map((item, i) => (
            <div className="w-full rounded-2xl" key={i}>
              <img
                src={item.cover}
                alt="Banner"
                className={`w-full rounded-2xl cursor-pointer hover:grayscale-0 transition-all ease-in-out duration-500 delay-300 ${
                  fullSize === item.video_sample ? "grayscale-0" : "grayscale"
                }`}
                onClick={() => {
                  getImage(item.video_sample, item.videoId);
                }}
              />
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
