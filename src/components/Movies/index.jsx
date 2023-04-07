import React, { useState, useEffect } from "react";
import "react-multi-carousel/lib/styles.css";
import { IoPlay } from "react-icons/io5";
import { Link } from "react-router-dom";
import axios from "axios";

const filterOptions = ["All", "Videos", "Shorts"];

const CHANNEL_ID = "UC17vXf0BqbmF8CIRdd_RmWg";

const api_key = "AIzaSyCfF_Ylnrp8hJoCUx0f5DD9yGaQt_7nSwI";

const Index = ({}) => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filter, setFilter] = useState("All");

    useEffect(() => {
        async function getChannelVideos() {
            try {
                // Step 1: Make a request to the channels resource to get the channel's playlist ID
                const channelsResponse = await axios.get(
                    `https://www.googleapis.com/youtube/v3/channels?id=${CHANNEL_ID}&part=contentDetails&key=${api_key}`
                );
                const playlistId =
                    channelsResponse.data.items[0].contentDetails
                        .relatedPlaylists.uploads;

                // Step 2: Make a request to the playlistItems resource to get the video IDs for all the videos in the playlist
                const playlistItemsResponse = await axios.get(
                    `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${playlistId}&part=contentDetails&maxResults=50&key=${api_key}`
                );
                const videoIds = playlistItemsResponse.data.items.map(
                    (item) => item.contentDetails.videoId
                );

                // Step 3: Make a request to the videos resource to get the details for each video
                const videosResponse = await axios.get(
                    `https://www.googleapis.com/youtube/v3/videos?id=${videoIds.join(
                        ","
                    )}&part=snippet&key=${api_key}`
                );
                const videos = videosResponse.data.items.map((item) => {
                    const categoryId = item.snippet.categoryId;
                    const isShort = categoryId === "28"; // Shorts category ID is 28
                    return {
                        title: item.snippet.title,
                        description: item.snippet.description,
                        thumbnail: item.snippet.thumbnails.default.url,
                        videoUrl: `https://www.youtube.com/watch?v=${item.id}`,
                        isShort: isShort,
                    };
                });
                console.log(videos)

                setData(videos);
            } catch (error) {
                setError(error);
                console.log(error);
            } finally {
                setLoading(false);
            }
        }

        getChannelVideos();
    }, []);

    useEffect(() => {
        if (data) {
            switch (filter) {
                case "All":
                    setFilteredData(data);
                case "Videos":
                    setFilteredData(
                        data.filter((item) => {
                            return item.isShort;
                        })
                    );
                case "Shorts":
                    setFilteredData(
                        data.filter((item) => {
                            return !item.isShort;
                        })
                    );
            }
        }
    }, [data, filter]);

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
            <div className="flex gap-5 items-center max-w-[1200px] mx-auto px-5 my-5">
                {filterOptions.map((item, i) => {
                    return (
                        <h3
                            key={i}
                            onClick={() => setFilter(item)}
                            className={`px-6 py-3 rounded-3xl cursor-pointer ${
                                item === filter ? "bg-rose-500 text-white" : "text-black dark:text-white bg-gray-200 dark:bg-slate-700"
                            }`}
                        >
                            {item}
                        </h3>
                    );
                })}
            </div>
            <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3  md:px-20 p-5 lg:px-0 max-w-[1300px] mx-auto">
                {/* Filter for shorts or videos */}
                {loading
                    ? renderLoaders()
                    : filteredData.map((item, i) => (
                          <MovieCard
                              key={i}
                              thumbnail={item.thumbnail}
                              title={item.title}
                              videoId={item.videoUrl}
                          />
                      ))}
            </div>
        </div>
    );
};

const MovieCard = ({ thumbnail, title, videoId }) => {

    return (
        <Link to={`/video/${(videoId+"").split("=")[1]}`}>
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
};

const SkeletonLoader = () => {
    return (
        <div className="bg-gray-300 h-[200px] dark:bg-slate-700 animate-pulse rounded-2xl flex flex-col justify-end items-start p-4 z-10">
            <div className="w-full h-12 bg-white/20 rounded-md"></div>
        </div>
    );
};

export default Index;
// ! item.snippet.thumbnails.medium.url
