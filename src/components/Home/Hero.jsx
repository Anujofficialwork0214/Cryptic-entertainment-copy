import React, { useEffect, useState } from "react";
import './Animation.css';
import img1 from "../../assets/maxresdefault (4).jpg";
import img2 from "../../assets/WhatsApp-Image-2023-03-20-at-11.37.23-AM.jpeg";
import img3 from "../../assets/ep 1.jpg";
import img4 from "../../assets/ep 2.jpg";
import { Link } from "react-router-dom";
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
    setFullSIze(image);
    setVideoPre(video);
  };

  useEffect(() => {
    const container = document.getElementById('star-container');
    const starCount = 40;

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 5}s`;
      star.style.animationDuration = `${6 + Math.random() * 5}s`;
      container.appendChild(star);
    }
  }, []);

  return (
    <div className="w-full relative z-10 mb-10 md:mb-0">
      <div className="relative w-full h-screen overflow-hidden">
         {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d] via-[#0a0a0a] to-[#000000] z-0"></div>

      {/* Star Container */}
      <div id="star-container" className="absolute inset-0 z-10"></div>

        {/* <div className="wrapper">
          <div className="box">
            {Array.from({ length: 10 }).map((_, index) => (
              <div key={index}></div>
            ))}
          </div>
        </div> */}
        {/* Black gradient fade at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />

        {/* Custom CSS in the same file */}
        <style>{`
        .star {
          position: absolute;
          bottom: -10px;
          width: 3px;
          height: 3px;
          background-color: white;
          border-radius: 50%;
          box-shadow: 0 0 6px white;
          animation-name: rise;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        @keyframes rise {
          0% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 1;
          }
          50% {
            transform: translateX(30px) translateY(-50vh) rotate(180deg);
            opacity: 0.6;
          }
          100% {
            transform: translateX(-30px) translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>

        {/* Gradient background and animated circles */}
        <div className="wrapper">
          {/* <div className="box">
            {Array.from({ length: 10 }).map((_, index) => (
              <div key={index}></div>
            ))}
          </div> */}
        </div>

        {/* Black fade at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      </div>


      {/* Text Content */}
      <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8 text-center mt-[60px] sm:mt-0 top-[-15%] md:top-[-20%] xl:top-[-30%]">
        <div className="max-w-5xl mx-auto space-y-6">
          <h1 className="text-white font-bold text-lg sm:text-4xl md:text-4xl lg:text-5xl leading-tight">
            More Than a Personal Brand THINK TANK.
          </h1>
          <h1 className="text-white font-bold text-xl sm:text-3xl md:text-4xl lg:text-6xl leading-tight">
            We’re Your Full-Stack Creative POWERHOUSE.
          </h1>
          <p className="text-white text-[16px] sm:text-lg md:text-xl lg:text-3xl font-light leading-relaxed tracking-[0.05em]">
            From Strategy To Storytelling, Video Content Production To Creative Designs –
            We Craft Magnetic Personal Brands With The Full Force Of a Creative Powerhouse Behind Them.
          </p>
          <p className="text-white text-md sm:text-base md:text-xl lg:text-2xl font-semibold italic capitalize mt-5">
            "Think bold. Think branded. Think unforgettable"
          </p>
        </div>
      </div>

      {/* Marquee section */}
      <div className="relative bg-black xl:bottom-[0px] w-full h-20 md:h-60 flex justify-center items-center">
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
    </div>
  );
};

export default Hero;
