// import React, { useState, useEffect, useRef, useCallback } from "react";
// import "react-multi-carousel/lib/styles.css";
// import { IoPlay } from "react-icons/io5";
// import { Link } from "react-router-dom";
// import api from "../../api/api";

// const temp = {
//     data: [
//         {
//             id: 1,
//             videoId: "TMHm09qtefE",
//             thumbnail: "https://i.ytimg.com/vi/TMHm09qtefE/mqdefault.jpg",
//             title: "बहुत तेज़ हो रहे हो😒🤨#ytshorts  #shortsvideo #shortsfeed #viralshort #ytshorts #fyp #short #fypviral",
//             createdAt: "2023-04-11T07:13:09.830Z",
//         },
//         {
//             id: 2,
//             videoId: "HYlcfcJ1eNE",
//             thumbnail: "https://i.ytimg.com/vi/HYlcfcJ1eNE/mqdefault.jpg",
//             title: "आप भी एक crypto trade हो?😱#shortsvideo #shortsfeed #youtubeshorts #ytshorts #viralshort #funnyvideo",
//             createdAt: "2023-04-11T07:13:09.840Z",
//         },
//         {
//             id: 3,
//             videoId: "JdCIIJCtcfA",
//             thumbnail: "https://i.ytimg.com/vi/JdCIIJCtcfA/mqdefault.jpg",
//             title: "🚨ये क्या हो गया ❗🥺😱#shortsfeed #ytshorts #shortsvideo #shortsbeta #fyp #shorts",
//             createdAt: "2023-04-11T07:13:09.841Z",
//         },
//         {
//             id: 4,
//             videoId: "qHpCZzOfSJM",
//             thumbnail: "https://i.ytimg.com/vi/qHpCZzOfSJM/mqdefault.jpg",
//             title: "Tag your ❤ || #viralshort #couplegoals #tagyourlove #shortsbeta #ytshorts #fyp #youtubeshorts #bae",
//             createdAt: "2023-04-11T07:13:09.843Z",
//         },
//         {
//             id: 5,
//             videoId: "itsFxvny_Nw",
//             thumbnail: "https://i.ytimg.com/vi/itsFxvny_Nw/mqdefault.jpg",
//             title: "What is the future of Crypto in India 🇮🇳? | Crypto Confusions | Episode 2",
//             createdAt: "2023-04-11T07:13:09.846Z",
//         },
//         {
//             id: 6,
//             videoId: "ydl1tt4pzH0",
//             thumbnail: "https://i.ytimg.com/vi/ydl1tt4pzH0/mqdefault.jpg",
//             title: "अब होगी मेरी प्रतिज्ञा पूरी ❗🥺 #shortsvideo #shortsfeed #viralshort #shortsbeta #fyp #shorts",
//             createdAt: "2023-04-11T07:13:09.847Z",
//         },
//         {
//             id: 7,
//             videoId: "IbH3sM4dNJE",
//             thumbnail: "https://i.ytimg.com/vi/IbH3sM4dNJE/mqdefault.jpg",
//             title: "क्या लगेगा Crypto पर ताला ?😱 | Episode 1 | Funny Video |",
//             createdAt: "2023-04-11T07:13:09.849Z",
//         },
//         {
//             id: 8,
//             videoId: "_wMXqDR8NiU",
//             thumbnail: "https://i.ytimg.com/vi/_wMXqDR8NiU/mqdefault.jpg",
//             title: "Welcome आपका🚨😱 #shortsvideo #shortsfeed #viralshort #ytshorts #funnyvideo #fyp #short #shorts #rrr",
//             createdAt: "2023-04-11T07:13:09.851Z",
//         },
//         {
//             id: 9,
//             videoId: "qKrjUTaj9lo",
//             thumbnail: "https://i.ytimg.com/vi/qKrjUTaj9lo/mqdefault.jpg",
//             title: "😱❗एक शिकार वो भी बेकार ❗😱 #shortsvideo #shortsfeed #ytshorts #viralshort #shortsbeta #shorts #short",
//             createdAt: "2023-04-11T07:13:09.853Z",
//         },
//         {
//             id: 10,
//             videoId: "EYlD5RgihsA",
//             thumbnail: "https://i.ytimg.com/vi/EYlD5RgihsA/mqdefault.jpg",
//             title: "21 दिन में पैसा double? क्या ?❗😱#shortsfeed #shortsvideo #shortsbeta #viralshort #funnyshorts",
//             createdAt: "2023-04-11T07:13:09.854Z",
//         },
//     ],
//     currentPage: 1,
//     totalPages: 5,
//     totalItems: 50,
// };

// const Index = ({}) => {
//     const [data, setData] = useState([]);
//     const [filteredData, setFilteredData] = useState(temp.data);
//     const [loading, setLoading] = useState(false);
//     const [hasNextPage, setHasNextPage] = useState(false);
//     const [currentPage, setCurrentPage] = useState(1);
//     const intObserver = useRef(null);

//     const lastVideoRef = useCallback(
//         (video) => {
//             if (loading) return;

//             if (intObserver.current) intObserver.current.disconnect();

//             intObserver.current = new IntersectionObserver((entries) => {
//                 if (entries[0].isIntersecting) {
//                     setCurrentPage((prevPage) => prevPage + 1);
//                 }
//             });
//             if (video) intObserver.current.observe(video);
//         },
//         [loading, hasNextPage]
//     );

//     useEffect(() => {
//         const fetchVideos = async () => {
//             try {
//                 setLoading(true);
//                 const response = await api.get("/videos?page=1");
//                 setData(response.data.data);
//                 if(response.data.totalPages > 1){
//                     setHasNextPage(true);
//                 }
//             } catch (e) {
//                 console.log(e);
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchVideos();
//     }, []);

//     useEffect(() => {
//         const fetchMoreVideos = async () => {
//             try {
//                 setLoading(true);
//                 const response = await api.get(`/videos?page=${currentPage}`);
//                 setData((prevData) => [...prevData, ...response.data.data]);
//                 if(response.data.totalPages > currentPage){
//                     setHasNextPage(true);
//                 } else {
//                     setHasNextPage(false);
//                 }
//             } catch (e) {
//                 console.log(e);
//             } finally {
//                 setLoading(false);
//             }
//         };
//         if(hasNextPage && currentPage > 1) fetchMoreVideos();
//     }, [currentPage]);

//     const numLoaders = 6; // number of skeleton loaders to render

//     const renderLoaders = () => {
//         let loaders = [];
//         for (let i = 0; i < numLoaders; i++) {
//             loaders.push(<SkeletonLoader key={i} />);
//         }
//         return loaders;
//     };
//     return (
//         <div className=" bg-slate-100 dark:bg-gray-900 py-4">
//             <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3  md:px-20 p-5 lg:px-0 max-w-[1300px] mx-auto">
//                 {/* Filter for shorts or videos */}
//                 {data &&
//                     data.length > 0 &&
//                     data.map((item, i) => {
//                         if ((i+1) === data.length ) {

//                             return (
//                                 <MovieCard
//                                     key={i}
//                                     thumbnail={item.thumbnail}
//                                     title={item.title}
//                                     videoId={item.videoId}
//                                     ref={lastVideoRef}
//                                 />
//                             );
//                         }
//                         return (
//                             <MovieCard
//                                 key={i}
//                                 thumbnail={item.thumbnail}
//                                 title={item.title}
//                                 videoId={item.videoId}
//                             />
//                         );
//                     })}
//                 {loading && renderLoaders()}
//             </div>
//         </div>
//     );
// };

// const MovieCard = React.forwardRef(({ thumbnail, title, videoId }, ref) => {
//     if (ref) {
//         return (
//             <Link ref={ref} to={`/video/${videoId}`}>
//                 <div

//                     className="story-card shadow-xl overflow-hidden cursor-pointer"
//                 >
//                     <img
//                         src={thumbnail}
//                         alt="Avatar"
//                         className="story-card-image bg-blend-overlay hover:bg-blend-overlay"
//                     />
//                     <div className="story-card-container flex flex-col justify-end items-start h-[100%] w-[100%] p-1.5 z-10">
//                         {/* <div className='flex justify-between items-center w-[100%]'>
//                                         <div className='rounded-full w-[35px] h-[35px] border-2 border-rose-500 dark:border-rose-400 border-dashed p-0.5'>
//                                             <img src="https://api.lorem.space/image/face?w=50&h=50" alt="logo" className='w-full h-full rounded-full ' />
//                                         </div>
//                                         <div className='bg-rose-500/50 p-1.5 rounded-[15px] text-white '>
//                                             <MdWebStories className="h-6 w-6 ripple" />
//                                         </div>
//                                     </div> */}
//                         <div className="p-2 bg-white/50 dark:bg-gray-900/50 rounded-[15px] backdrop-blur-sm story-card-overlay-2 scale-y-100 origin-bottom opacity-100">
//                             <h6 className="text-gray-800 dark:text-slate-300 font-bold text-md sm:text-lg leading-tight line-clamp-2 mb-2">
//                                 {title}
//                             </h6>
//                             {/* <p className='text-white/50  font-bold text-sm'>2022, Jul 22</p> */}
//                         </div>
//                     </div>
//                     <div className="story-card-overlay z-10">
//                         <div className="story-card-overlay-container ">
//                             <div className="ripple">
//                                 <IoPlay className="h-12 w-12 text-rose-500 dark:text-rose-400 " />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </Link>
//         );
//     }
//     return (
//         <Link to={`/video/${videoId}`}>
//             <div className="story-card shadow-xl overflow-hidden cursor-pointer">
//                 <img
//                     src={thumbnail}
//                     alt="Avatar"
//                     className="story-card-image bg-blend-overlay hover:bg-blend-overlay"
//                 />
//                 <div className="story-card-container flex flex-col justify-end items-start h-[100%] w-[100%] p-1.5 z-10">
//                     {/* <div className='flex justify-between items-center w-[100%]'>
//                                     <div className='rounded-full w-[35px] h-[35px] border-2 border-rose-500 dark:border-rose-400 border-dashed p-0.5'>
//                                         <img src="https://api.lorem.space/image/face?w=50&h=50" alt="logo" className='w-full h-full rounded-full ' />
//                                     </div>
//                                     <div className='bg-rose-500/50 p-1.5 rounded-[15px] text-white '>
//                                         <MdWebStories className="h-6 w-6 ripple" />
//                                     </div>
//                                 </div> */}
//                     <div className="p-2 bg-white/50 dark:bg-gray-900/50 rounded-[15px] backdrop-blur-sm story-card-overlay-2 scale-y-100 origin-bottom opacity-100">
//                         <h6 className="text-gray-800 dark:text-slate-300 font-bold text-md sm:text-lg leading-tight line-clamp-2 mb-2">
//                             {title}
//                         </h6>
//                         {/* <p className='text-white/50  font-bold text-sm'>2022, Jul 22</p> */}
//                     </div>
//                 </div>
//                 <div className="story-card-overlay z-10">
//                     <div className="story-card-overlay-container ">
//                         <div className="ripple">
//                             <IoPlay className="h-12 w-12 text-rose-500 dark:text-rose-400 " />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </Link>
//     );
// });

// const SkeletonLoader = () => {
//     return (
//         <div className="bg-gray-300 h-[200px] dark:bg-slate-700 animate-pulse rounded-2xl flex flex-col justify-end items-start p-4 z-10">
//             <div className="w-full h-12 bg-white/20 rounded-md"></div>
//         </div>
//     );
// };

// export default Index;

// import React from 'react';

// const data = [
//   {
//     id: 1,
//     name: 'Charul Sharma',
//     role: 'Career GPT',
//     story: 'From HR to Thought Leader',
//     metrics: '250K+ followers',
//     clients: 'Salesforce, Naukri',
//     outcome: 'Became a top voice in career coaching using relatable content.',
//     lesson: 'Everyday insights > Complex jargon.',
//     image: '/charulsharma.png',
//     analyticsImg: '/youtubecharul.jpg',
//   },
//   {
//     id: 2,
//     name: 'Inderjeet Aulakh',
//     role: 'MPro Developers',
//     story: 'Builder to Trusted Real Estate Guide',
//     metrics: '7K+ YT & Insta followers.',
//     strategy: 'Behind-the-scenes, local tours, customer success.',
//     lesson: 'Authority through education in high-ticket domains.',
//     image: '/inderjeetaulakh.png',
//     analyticsImg: '/Inderjeet.jpg',
//   },
//   {
//     id: 3,
//     name: 'Akash Bajwa',
//     role: 'Nek Punjabi History',
//     story: 'From Faith to Movement',
//     metrics: '450K YouTube | 350K Instagram.',
//     strategy: 'Consistent storytelling rooted in heritage.',
//     lesson: 'Passion + storytelling = cultural resonance.',
//     image: '/Akash Bajwa.png',
//     analyticsImg: '/Akash.jpg',
//   },
//   {
//     id: 4,
//     name: 'Jaspreet Singh',
//     role: 'NekPunjabi Estates',
//     story: 'Real Estate with a Real Face',
//     metrics: '180K+ followers.',
//     strategy: 'Regional content, local dialect, emotional storytelling.',
//     lesson: "When you're the face, the product sells itself.",
//     image: '/JaspreetSingh.png',
//     analyticsImg: '/Jaspreet.jpg',
//   }
// ];

//  const InstagramEmbed = () => {
//   useEffect(() => {
//     // Load Instagram embed script
//     const script = document.createElement("script");
//     script.src = "https://www.instagram.com/embed.js";
//     script.async = true;
//     document.body.appendChild(script);
//   }, []);}

// export default function Index() {
//   return (
//     <div className="h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory">
//       {data.map((person) => (
//         <div key={person.id} className="snap-center min-h-screen flex items-center justify-center px-2 sm:px-4">
//           <div className="flex flex-col md:flex-row w-full max-w-[1200px] bg-white shadow-lg rounded-lg overflow-hidden">
//             {/* Left Side */}
//             <div className="relative w-full md:w-3/5 px-6 sm:px-10 py-6 sm:py-10">
//               {/* Side Bar */}
//               <div className="absolute top-0 left-0 h-full w-16 sm:w-20 bg-[#a0713e] text-white flex flex-col justify-between items-center py-4 sm:py-6">
//                 <div className="text-[28px] sm:text-[36px] font-extrabold leading-none tracking-tight">
//                   0{person.id}
//                 </div>
//                 <p className="font-bold text-[20px] sm:text-[28px] tracking-wider uppercase [writing-mode:vertical-rl] rotate-180">
//                   Case Study
//                 </p>
//               </div>

//               {/* Main Content */}
//               <div className="flex flex-col sm:flex-row items-start gap-6 ml-20 sm:ml-24">
//                 <img
//                   src={person.image}
//                   alt={person.name}
//                   className="w-28 h-28 sm:w-40 sm:h-40 z-10 rounded-full object-cover shadow -ml-20 sm:-ml-24"
//                 />

//                 <div>
//                   <h2 className="text-2xl sm:text-4xl font-bold text-[#936f3c] leading-tight">
//                     {person.name.split(' ')[0]}
//                   </h2>
//                   <h2 className="text-2xl sm:text-4xl font-bold text-[#936f3c] leading-tight">
//                     {person.name.split(' ')[1]}
//                   </h2>
//                   <h3 className="text-xl sm:text-3xl font-black text-black">({person.role})</h3>
//                 </div>
//               </div>

//               <p className="text-xs sm:text-sm font-semibold text-black mt-4 ml-20 sm:ml-24">
//                 Story: <span className="font-medium">{person.story}</span>
//               </p>

//               <div className="h-[1px] sm:h-[2px] bg-[#936f3c] my-4 ml-20 sm:ml-24 w-[90%] sm:w-[500px]" />

//               <ul className="list-disc ml-20 sm:ml-24 pl-4 space-y-3 text-[14px] sm:text-[15px] leading-relaxed">
//                 <li><strong>Metrics:</strong> {person.metrics}</li>
//                 {person.clients && <li><strong>Clients:</strong> {person.clients}</li>}
//                 {person.outcome && <li><strong>Outcome:</strong> {person.outcome}</li>}
//                 {person.strategy && <li><strong>Strategy:</strong> {person.strategy}</li>}
//                 {person.lesson && <li><strong>Lesson:</strong> {person.lesson}</li>}
//               </ul>
//             </div>

//             {/* Right Side */}
//             <div className="w-full md:w-2/5 bg-white flex items-center justify-center p-4 sm:p-6">
//               <div
//       className="w-full"
//       dangerouslySetInnerHTML={{
//         __html: `
//         <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/C8hc-wTCBIO/" data-instgrm-version="14" style="margin: 0 auto; max-width: 100%;">
//         </blockquote>
//       `,
//       }}
//     />
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    name: "Charul Sharma",
    role: "Career GPT",
    story: "From HR to Thought Leader",
    metrics: "250K+ followers",
    clients: "Salesforce, Naukri",
    outcome: "Became a top voice in career coaching using relatable content.",
    lesson: "Everyday insights > Complex jargon.",
    image: "/testimonial/charulimg.png",
    analyticsImg: "/youtubecharul.jpg",
    instagramEmbed: "https://www.instagram.com/reel/C8hc-wTCBIO/",
  },
  {
    id: 2,
    name: "Inderjeet Aulakh",
    role: "MPro Developers",
    story: "Builder to Trusted Real Estate Guide",
    metrics: "7K+ YT & Insta followers.",
    strategy: "Behind-the-scenes, local tours, customer success.",
    lesson: "Authority through education in high-ticket domains.",
    image: "/testimonial/inderjeet.png",
    analyticsImg: "/Inderjeet.jpg",
    // instagramEmbed: 'https://www.instagram.com/official.inderjit/',
    youtubeEmbed: "https://www.youtube.com/embed/X1CBs0zcITs",
  },
  {
    id: 3,
    name: "Akash Bajwa",
    role: "Nek Punjabi History",
    story: "From Faith to Movement",
    metrics: "450K YouTube | 350K Instagram.",
    strategy: "Consistent storytelling rooted in heritage.",
    lesson: "Passion + storytelling = cultural resonance.",
    image: "/testimonial/akash.png",
    analyticsImg: "/Akash.jpg",
    instagramEmbed: "https://www.instagram.com/reel/CxF7aEQR1qz/",
  },
  {
    id: 4,
    name: "Jaspreet Singh",
    role: "NekPunjabi Estates",
    story: "Real Estate with a Real Face",
    metrics: "180K+ followers.",
    strategy: "Regional content, local dialect, emotional storytelling.",
    lesson: "When you're the face, the product sells itself.",
    image: "/testimonial/jaspreet.png",
    analyticsImg: "/Jaspreet.jpg",
    youtubeEmbed: "https://www.youtube.com/embed/OxmMfnP-jrc",
  },
];

export default function Index() {
  const [loadingStates, setLoadingStates] = useState({});

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
  data.forEach((person) => {
    if (person.instagramEmbed) {
      const id = `insta-${person.id}`;
      
      // Set initial loading
      setLoadingStates((prev) => ({ ...prev, [id]: true }));

      const interval = setInterval(() => {
        const iframe = document.querySelector(`#${id} iframe`);
        if (iframe) {
          setLoadingStates((prev) => ({ ...prev, [id]: false }));
          clearInterval(interval);
        }
      }, 300);
    }
  });

  // Ensure Instagram embeds are parsed on re-render
  const tryProcessInstagram = () => {
    if (window.instgrm && window.instgrm.Embeds && typeof window.instgrm.Embeds.process === "function") {
      window.instgrm.Embeds.process();
    }
  };

  // Slight delay to ensure DOM is ready
  const timeout = setTimeout(() => {
    tryProcessInstagram();
  }, 500);

  return () => {
    clearTimeout(timeout);
  };
}, []);

  return (
    <div className=" snap-y snap-mandatory">
      {data.map((person) => {
        const instaId = `insta-${person.id}`;
        return (
          <div
            key={person.id}
            className="snap-center min-h-screen flex items-center justify-center px-2 sm:px-4 mb-10 sm:mb-0"
          >
            <div className="flex flex-col md:flex-row w-full max-w-[1200px] bg-white shadow-lg rounded-lg overflow-hidden">
              {/* Left Section */}
              <div className="relative w-full md:w-3/5 px-6 sm:px-10 py-6 sm:py-10">
                <div className="absolute top-0 left-0 h-full w-16 sm:w-20 dark:bg-slate-700 text-white flex flex-col justify-between items-center py-4 sm:py-6">
                  <div className="text-[28px] sm:text-[36px] font-extrabold leading-none tracking-tight">
                    0{person.id}
                  </div>
                  <p className="font-bold text-[20px] sm:text-[28px] tracking-wider uppercase [writing-mode:vertical-rl] rotate-180">
                    Case Study
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-start gap-6 ml-20 sm:ml-24 mt-4 ">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-28 h-28 sm:w-40 sm:h-40 z-10  rounded-full object-cover shadow -ml-20 sm:-ml-24"
                  />

                  <div>
                    <h2 className="text-2xl sm:text-4xl font-bold dark:text-slate-500 leading-tight">
                      {person.name.split(" ")[0]}
                    </h2>
                    <h2 className="text-2xl sm:text-4xl font-bold dark:text-slate-500  leading-tight">
                      {person.name.split(" ")[1]}
                    </h2>
                    <h3 className="text-xl sm:text-3xl font-black text-black">
                      ({person.role})
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm font-semibold text-black mt-4 ml-20 sm:ml-24">
                  Story: <span className="font-medium">{person.story}</span>
                </p>

                <div className="h-[1px] sm:h-[2px] bg-[#936f3c] my-4 ml-20 sm:ml-24 lg:w-[90%] sm:w-[500px] md:w-[250px]" />

                <ul className="list-disc ml-20 sm:ml-24 pl-4 space-y-3 text-[14px] sm:text-[15px] leading-relaxed">
                  <li>
                    <strong>Metrics:</strong> {person.metrics}
                  </li>
                  {person.clients && (
                    <li>
                      <strong>Clients:</strong> {person.clients}
                    </li>
                  )}
                  {person.outcome && (
                    <li>
                      <strong>Outcome:</strong> {person.outcome}
                    </li>
                  )}
                  {person.strategy && (
                    <li>
                      <strong>Strategy:</strong> {person.strategy}
                    </li>
                  )}
                  {person.lesson && (
                    <li>
                      <strong>Lesson:</strong> {person.lesson}
                    </li>
                  )}
                </ul>
              </div>

              {/* Right Section */}
              {person.youtubeEmbed ? (
                <div className="w-full aspect-video max-w-[420px] p-4 sm:p-6 lg:h-[600px] flex justify-center items-center">
                  <iframe
                    className="w-full h-full rounded-lg shadow-lg"
                    src={person.youtubeEmbed}
                    title={person.name}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : person.instagramEmbed ? (
                <div
                  id={instaId}
                  className="w-full max-w-[420px] p-4 sm:p-6 flex justify-center items-center min-h-[300px]"
                >
                  {loadingStates[instaId] && (
                    <div className="text-gray-500 animate-pulse">
                      Loading Instagram post...
                    </div>
                  )}
                  <blockquote
                    className="instagram-media"
                    data-instgrm-permalink={person.instagramEmbed}
                    data-instgrm-version="14"
                    style={{
                      margin: "0 auto",
                      width: "100%",
                      display: loadingStates[instaId] ? "none" : "block",
                    }}
                  />
                </div>
              ) : (
                <img
                  src={person.analyticsImg}
                  alt="Analytics"
                  className="w-full max-h-[500px] sm:h-[500px] rounded-lg shadow-md object-contain"
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
