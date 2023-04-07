import React from "react";
import img1 from "../../assets/maxresdefault (4).jpg";
import img2 from "../../assets/WhatsApp-Image-2023-03-20-at-11.37.23-AM.jpeg";
import img3 from "../../assets/ep 1.jpg";
import img4 from "../../assets/ep 2.jpg";
import img5 from "../../assets/ep 3.jpg";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { IoPlay } from "react-icons/io5";
import AnimatedTitle from "../../animations/AnimatedTitle";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
    },
};

const partners = [img1, img2, img3, img4, img5];

const PastWork = () => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160">
                <rect
                    width="100%"
                    height="100%"
                    className="fill-slate-100 dark:fill-slate-900"
                />
                <path
                    className="fill-slate-200 dark:fill-slate-800"
                    fillOpacity="1"
                    d="M0,64L0,160L68.6,160L68.6,160L137.1,160L137.1,96L205.7,96L205.7,64L274.3,64L274.3,64L342.9,64L342.9,224L411.4,224L411.4,192L480,192L480,32L548.6,32L548.6,128L617.1,128L617.1,32L685.7,32L685.7,288L754.3,288L754.3,96L822.9,96L822.9,192L891.4,192L891.4,128L960,128L960,96L1028.6,96L1028.6,64L1097.1,64L1097.1,256L1165.7,256L1165.7,96L1234.3,96L1234.3,192L1302.9,192L1302.9,128L1371.4,128L1371.4,96L1440,96L1440,320L1371.4,320L1371.4,320L1302.9,320L1302.9,320L1234.3,320L1234.3,320L1165.7,320L1165.7,320L1097.1,320L1097.1,320L1028.6,320L1028.6,320L960,320L960,320L891.4,320L891.4,320L822.9,320L822.9,320L754.3,320L754.3,320L685.7,320L685.7,320L617.1,320L617.1,320L548.6,320L548.6,320L480,320L480,320L411.4,320L411.4,320L342.9,320L342.9,320L274.3,320L274.3,320L205.7,320L205.7,320L137.1,320L137.1,320L68.6,320L68.6,320L0,320L0,320Z"
                ></path>
            </svg>
            <div className=" md:px-20 px-5 py-5 bg-slate-200 dark:bg-gray-800">
                {/* <h3 className='font-semibold text-gray-900 dark:text-white text-4xl text-center mb-8'>Our Work</h3> */}
                <div className="flex justify-center items-center gap-2 mb-8">
                    <AnimatedTitle
                        title={"Past"}
                        classes={
                            "font-semibold text-gray-900 dark:text-white text-4xl text-center"
                        }
                    />
                    <AnimatedTitle
                        title={"Work"}
                        classes={
                            "font-semibold text-rose-500 dark:text-rose-500 text-4xl text-center"
                        }
                    />
                </div>
                <Carousel
                    swipeable={true}
                    draggable={true}
                    showDots={false}
                    responsive={responsive}
                    infinite={false}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    {partners.map((item, i) => (
                        <Link to={'/movies/:1'} key={i}>
                            <div className="story-card shadow-xl overflow-hidden mx-2">
                                <img
                                    src={item}
                                    alt="Avatar"
                                    className="story-card-image bg-blend-overlay hover:bg-blend-overlay"
                                />
                                <div className="story-card-container flex flex-col justify-end items-start h-[100%] w-[100%] p-1.5 z-20">
                                    {/* <div className='flex justify-between items-center w-[100%]'>
                                    <div className='rounded-full w-[35px] h-[35px] border-2 border-rose-500 dark:border-rose-400 border-dashed p-0.5'>
                                        <img src="https://api.lorem.space/image/face?w=50&h=50" alt="logo" className='w-full h-full rounded-full ' />
                                    </div>
                                    <div className='bg-rose-500/50 p-1.5 rounded-[15px] text-white '>
                                        <MdWebStories className="h-6 w-6 ripple" />                       
                                    </div>
                                </div> */}
                                    <div className="p-2 bg-white/50 dark:bg-gray-900/50 rounded-[15px] backdrop-blur-sm story-card-overlay-2">
                                        <h6 className="text-gray-800 dark:text-slate-300 font-bold text-md sm:text-lg leading-tight line-clamp-2 mb-2">
                                            gfxgfxgfx gfff fffff ffff ghchgc
                                            gfxgfxgfx gfff fffff ffff ghchgc
                                        </h6>
                                        {/* <p className='text-white/50  font-bold text-sm'>2022, Jul 22</p> */}
                                    </div>
                                </div>
                                <div className="story-card-overlay z-10">
                                    <div className="story-card-overlay-container ">
                                        <div className="ripple">
                                            <IoPlay className="h-12 w-12 text-rose-500 dark:text-rose-400 " />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </Carousel>
                {/*  <div className='flex justify-center items-center bg-white/50 dark:bg-white/10 rounded-2xl hover:bg-rose-500/10 dark:hover:bg-rose-500/10  mx-2 relative' key={i}>
                        <img src={item} alt={'Partner'} className='rounded-xl' />
                        <div className='bg-white/50 dark:bg-gray-900/50 backdrop-blur-md absolute w-full bottom-0 rounded-b-xl p-4'>
                            bhbhbh
                        </div>
                    </div> */}
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160">
                <rect
                    width="100%"
                    height="100%"
                    className="fill-slate-100 dark:fill-slate-900"
                />
                <path
                    className="fill-slate-200 dark:fill-slate-800"
                    fillOpacity="1"
                    d="M0,64L0,160L68.6,160L68.6,160L137.1,160L137.1,96L205.7,96L205.7,64L274.3,64L274.3,64L342.9,64L342.9,224L411.4,224L411.4,192L480,192L480,32L548.6,32L548.6,128L617.1,128L617.1,32L685.7,32L685.7,288L754.3,288L754.3,96L822.9,96L822.9,192L891.4,192L891.4,128L960,128L960,96L1028.6,96L1028.6,64L1097.1,64L1097.1,256L1165.7,256L1165.7,96L1234.3,96L1234.3,192L1302.9,192L1302.9,128L1371.4,128L1371.4,96L1440,96L1440,0L1371.4,0L1371.4,0L1302.9,0L1302.9,0L1234.3,0L1234.3,0L1165.7,0L1165.7,0L1097.1,0L1097.1,0L1028.6,0L1028.6,0L960,0L960,0L891.4,0L891.4,0L822.9,0L822.9,0L754.3,0L754.3,0L685.7,0L685.7,0L617.1,0L617.1,0L548.6,0L548.6,0L480,0L480,0L411.4,0L411.4,0L342.9,0L342.9,0L274.3,0L274.3,0L205.7,0L205.7,0L137.1,0L137.1,0L68.6,0L68.6,0L0,0L0,0Z"
                ></path>
            </svg>
        </>
    );
};

export default PastWork;
