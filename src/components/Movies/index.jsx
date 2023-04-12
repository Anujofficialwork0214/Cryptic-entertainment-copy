import React, { useState, useEffect, useRef, useCallback } from "react";
import "react-multi-carousel/lib/styles.css";
import { IoPlay } from "react-icons/io5";
import { Link } from "react-router-dom";
import api from "../../api/api";

const temp = {
    data: [
        {
            id: 1,
            videoId: "TMHm09qtefE",
            thumbnail: "https://i.ytimg.com/vi/TMHm09qtefE/mqdefault.jpg",
            title: "बहुत तेज़ हो रहे हो😒🤨#ytshorts  #shortsvideo #shortsfeed #viralshort #ytshorts #fyp #short #fypviral",
            createdAt: "2023-04-11T07:13:09.830Z",
        },
        {
            id: 2,
            videoId: "HYlcfcJ1eNE",
            thumbnail: "https://i.ytimg.com/vi/HYlcfcJ1eNE/mqdefault.jpg",
            title: "आप भी एक crypto trade हो?😱#shortsvideo #shortsfeed #youtubeshorts #ytshorts #viralshort #funnyvideo",
            createdAt: "2023-04-11T07:13:09.840Z",
        },
        {
            id: 3,
            videoId: "JdCIIJCtcfA",
            thumbnail: "https://i.ytimg.com/vi/JdCIIJCtcfA/mqdefault.jpg",
            title: "🚨ये क्या हो गया ❗🥺😱#shortsfeed #ytshorts #shortsvideo #shortsbeta #fyp #shorts",
            createdAt: "2023-04-11T07:13:09.841Z",
        },
        {
            id: 4,
            videoId: "qHpCZzOfSJM",
            thumbnail: "https://i.ytimg.com/vi/qHpCZzOfSJM/mqdefault.jpg",
            title: "Tag your ❤ || #viralshort #couplegoals #tagyourlove #shortsbeta #ytshorts #fyp #youtubeshorts #bae",
            createdAt: "2023-04-11T07:13:09.843Z",
        },
        {
            id: 5,
            videoId: "itsFxvny_Nw",
            thumbnail: "https://i.ytimg.com/vi/itsFxvny_Nw/mqdefault.jpg",
            title: "What is the future of Crypto in India 🇮🇳? | Crypto Confusions | Episode 2",
            createdAt: "2023-04-11T07:13:09.846Z",
        },
        {
            id: 6,
            videoId: "ydl1tt4pzH0",
            thumbnail: "https://i.ytimg.com/vi/ydl1tt4pzH0/mqdefault.jpg",
            title: "अब होगी मेरी प्रतिज्ञा पूरी ❗🥺 #shortsvideo #shortsfeed #viralshort #shortsbeta #fyp #shorts",
            createdAt: "2023-04-11T07:13:09.847Z",
        },
        {
            id: 7,
            videoId: "IbH3sM4dNJE",
            thumbnail: "https://i.ytimg.com/vi/IbH3sM4dNJE/mqdefault.jpg",
            title: "क्या लगेगा Crypto पर ताला ?😱 | Episode 1 | Funny Video |",
            createdAt: "2023-04-11T07:13:09.849Z",
        },
        {
            id: 8,
            videoId: "_wMXqDR8NiU",
            thumbnail: "https://i.ytimg.com/vi/_wMXqDR8NiU/mqdefault.jpg",
            title: "Welcome आपका🚨😱 #shortsvideo #shortsfeed #viralshort #ytshorts #funnyvideo #fyp #short #shorts #rrr",
            createdAt: "2023-04-11T07:13:09.851Z",
        },
        {
            id: 9,
            videoId: "qKrjUTaj9lo",
            thumbnail: "https://i.ytimg.com/vi/qKrjUTaj9lo/mqdefault.jpg",
            title: "😱❗एक शिकार वो भी बेकार ❗😱 #shortsvideo #shortsfeed #ytshorts #viralshort #shortsbeta #shorts #short",
            createdAt: "2023-04-11T07:13:09.853Z",
        },
        {
            id: 10,
            videoId: "EYlD5RgihsA",
            thumbnail: "https://i.ytimg.com/vi/EYlD5RgihsA/mqdefault.jpg",
            title: "21 दिन में पैसा double? क्या ?❗😱#shortsfeed #shortsvideo #shortsbeta #viralshort #funnyshorts",
            createdAt: "2023-04-11T07:13:09.854Z",
        },
    ],
    currentPage: 1,
    totalPages: 5,
    totalItems: 50,
};

const Index = ({}) => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState(temp.data);
    const [loading, setLoading] = useState(false);
    const [hasNextPage, setHasNextPage] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const intObserver = useRef(null);

    const lastVideoRef = useCallback(
        (video) => {
            if (loading) return;

            if (intObserver.current) intObserver.current.disconnect();

            intObserver.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    setCurrentPage((prevPage) => prevPage + 1);
                }
            });
            if (video) intObserver.current.observe(video);
        },
        [loading, hasNextPage]
    );

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                setLoading(true);
                const response = await api.get("/videos?page=1");
                setData(response.data.data);
                if(response.data.totalPages > 1){
                    setHasNextPage(true);
                }
            } catch (e) {
                console.log(e);
            } finally {
                setLoading(false);
            }
        };
        fetchVideos();
    }, []);

    useEffect(() => {
        const fetchMoreVideos = async () => {
            try {
                setLoading(true);
                const response = await api.get(`/videos?page=${currentPage}`);
                setData((prevData) => [...prevData, ...response.data.data]);
                if(response.data.totalPages > currentPage){
                    setHasNextPage(true);
                } else {
                    setHasNextPage(false);
                }
            } catch (e) {
                console.log(e);
            } finally {
                setLoading(false);
            }
        };
        if(hasNextPage && currentPage > 1) fetchMoreVideos();
    }, [currentPage]);

    const numLoaders = 6; // number of skeleton loaders to render

    const renderLoaders = () => {
        let loaders = [];
        for (let i = 0; i < numLoaders; i++) {
            loaders.push(<SkeletonLoader key={i} />);
        }
        return loaders;
    };
    return (
        <div className=" bg-slate-100 dark:bg-gray-900 py-4">
            <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3  md:px-20 p-5 lg:px-0 max-w-[1300px] mx-auto">
                {/* Filter for shorts or videos */}
                {data &&
                    data.length > 0 &&
                    data.map((item, i) => {
                        if ((i+1) === data.length ) {
                            
                            return (
                                <MovieCard
                                    key={i}
                                    thumbnail={item.thumbnail}
                                    title={item.title}
                                    videoId={item.videoId}
                                    ref={lastVideoRef}
                                />
                            );
                        }
                        return (
                            <MovieCard
                                key={i}
                                thumbnail={item.thumbnail}
                                title={item.title}
                                videoId={item.videoId}
                            />
                        );
                    })}
                {loading && renderLoaders()}
            </div>
        </div>
    );
};

const MovieCard = React.forwardRef(({ thumbnail, title, videoId }, ref) => {
    if (ref) {
        return (
            <Link ref={ref} to={`/video/${videoId}`}>
                <div
                    
                    className="story-card shadow-xl overflow-hidden cursor-pointer"
                >
                    <img
                        src={thumbnail}
                        alt="Avatar"
                        className="story-card-image bg-blend-overlay hover:bg-blend-overlay"
                    />
                    <div className="story-card-container flex flex-col justify-end items-start h-[100%] w-[100%] p-1.5 z-10">
                        {/* <div className='flex justify-between items-center w-[100%]'>
                                        <div className='rounded-full w-[35px] h-[35px] border-2 border-rose-500 dark:border-rose-400 border-dashed p-0.5'>
                                            <img src="https://api.lorem.space/image/face?w=50&h=50" alt="logo" className='w-full h-full rounded-full ' />
                                        </div>
                                        <div className='bg-rose-500/50 p-1.5 rounded-[15px] text-white '>
                                            <MdWebStories className="h-6 w-6 ripple" />                       
                                        </div>
                                    </div> */}
                        <div className="p-2 bg-white/50 dark:bg-gray-900/50 rounded-[15px] backdrop-blur-sm story-card-overlay-2 scale-y-100 origin-bottom opacity-100">
                            <h6 className="text-gray-800 dark:text-slate-300 font-bold text-md sm:text-lg leading-tight line-clamp-2 mb-2">
                                {title}
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
        );
    }
    return (
        <Link to={`/video/${videoId}`}>
            <div className="story-card shadow-xl overflow-hidden cursor-pointer">
                <img
                    src={thumbnail}
                    alt="Avatar"
                    className="story-card-image bg-blend-overlay hover:bg-blend-overlay"
                />
                <div className="story-card-container flex flex-col justify-end items-start h-[100%] w-[100%] p-1.5 z-10">
                    {/* <div className='flex justify-between items-center w-[100%]'>
                                    <div className='rounded-full w-[35px] h-[35px] border-2 border-rose-500 dark:border-rose-400 border-dashed p-0.5'>
                                        <img src="https://api.lorem.space/image/face?w=50&h=50" alt="logo" className='w-full h-full rounded-full ' />
                                    </div>
                                    <div className='bg-rose-500/50 p-1.5 rounded-[15px] text-white '>
                                        <MdWebStories className="h-6 w-6 ripple" />                       
                                    </div>
                                </div> */}
                    <div className="p-2 bg-white/50 dark:bg-gray-900/50 rounded-[15px] backdrop-blur-sm story-card-overlay-2 scale-y-100 origin-bottom opacity-100">
                        <h6 className="text-gray-800 dark:text-slate-300 font-bold text-md sm:text-lg leading-tight line-clamp-2 mb-2">
                            {title}
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
    );
});

const SkeletonLoader = () => {
    return (
        <div className="bg-gray-300 h-[200px] dark:bg-slate-700 animate-pulse rounded-2xl flex flex-col justify-end items-start p-4 z-10">
            <div className="w-full h-12 bg-white/20 rounded-md"></div>
        </div>
    );
};

export default Index;

