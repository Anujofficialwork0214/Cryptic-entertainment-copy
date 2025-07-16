import React, { useState } from "react";
import { Link } from "react-router-dom";
import AnimatedTitle from "../../animations/AnimatedTitle";

const data = [
  {
    title: "Personal Brand Building",
    content:
      "Build a unique identity that reflects your values, skills, and voice. Stand out, earn trust, and unlock opportunities",
    img: "/services/brand_films.gif",
    alt: "Brand films",
    yt_link: "QNScB6W5_Mk",
  },
  {
    title: "CONTENT STRATEGY DEVELOPMENT",
    content:
      "Craft a clear roadmap to create impactful content aligned with your brand’s goals and Reach the right audience ",
    img: "/services/ad_films.gif",
    alt: "Ad Films",
    yt_link: "iBCAPvYSeB4",
  },
  {
    title: "BRAND IDENTITY",
    content:
      "Shape how your brand is perceived with clear visuals and messaging. Leave a lasting impression through consistent design and tone.",
    img: "/services/web_series.gif",
    alt: "Web Series",
    yt_link: "8ZCO6BfOzRk",
  },
  {
    title: "360° PROFILE MAKEOVER",
    content:
      "Create a cohesive, professional profile across platforms. Boost your visibility and strengthen your personal brand.",
    img: "/services/short_films.gif",
    alt: "Short Films",
    yt_link: "lJydpb-5tDg",
  },
  {
    title: "INTENT BASED PERFORMANCE MARKETING",
    content:
      "Run high-converting campaigns by targeting real-time user intent. Maximize ROI with data-driven strategies.",
    img: "/services/documentary.gif",
    alt: "Documentaries",
    yt_link: "JQUr46o5EOg",
  },
  {
    title: "SOCIAL MEDIA GROWTH",
    content:
      "Target users based on real-time intent to boost conversions. Optimize for results and higher ROI.",
    img: "/services/music_videos.gif",
    alt: "Music Videos",
    yt_link: "uACi_Q3i7vs",
  },
  //  {
  //     title: "Metaverse Concerts and Events",
  //     content: "BRAND CONSULTATION",
  //     img: "/services/metaverse_concert.gif",
  //     alt: "Metaverse Concerts and Events",
  //     yt_link: "9Sa16lDGiR8",
  // },
];

// const data = [
//     {
//         title: "Personal Brand Building",
//         content: "",
//         img: "/services/brand_films.gif",
//         alt: "Brand films",
//         yt_link: "QNScB6W5_Mk",
//     },
//     {
//         title: "Ad Films",
//         content: "",
//         img: "/services/ad_films.gif",
//         alt: "Ad Films",
//         yt_link: "iBCAPvYSeB4",
//     },
//     {
//         title: "Web Series",
//         content: "",
//         img: "/services/web_series.gif",
//         alt: "Web Series",
//         yt_link: "8ZCO6BfOzRk",
//     },
//     {
//         title: "Short Films",
//         content: "",
//         img: "/services/short_films.gif",
//         alt: "Short Films",
//         yt_link: "lJydpb-5tDg",
//     },
//     {
//         title: "Documentaries",
//         content: "",
//         img: "/services/documentary.gif",
//         alt: "Documentaries",
//         yt_link: "JQUr46o5EOg",
//     },
//     {
//         title: "Music Videos",
//         content: "",
//         img: "/services/music_videos.gif",
//         alt: "Music Videos",
//         yt_link: "uACi_Q3i7vs",
//     },
//     /* {
//         title: "Metaverse Concerts and Events",
//         content: "",
//         img: "/services/metaverse_concert.gif",
//         alt: "Metaverse Concerts and Events",
//         yt_link: "9Sa16lDGiR8",
//     }, */
// ];

export default function Index() {
  return (
    <div className="md:py-[60px] md:px-2 px-5 py-5 bg-slate-100 dark:bg-gray-900 ">
      <div className="max-w-[1200px] mx-auto pt-10">
        <AnimatedTitle
          title={"Services"}
          classes={
            "font-semibold text-gray-900 dark:text-white text-4xl text-center mb-12"
          }
        />
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
          {data.map((item, i) => (
            <div className="p-2 md:p-2 sm:p-2 lg:p-2">
              <ServiceCard data={item} key={i} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const ServiceCard = ({ data }) => {
  return (
    //  <Link to={`/video/${data?.yt_link}`}>
    <div className="relative overlay-on-hover overflow-hidden p-2 md:p-2 sm:p-5 lg:p-5 isolate rounded-xl bg-cover bg-no-repeat group h-full">
      <div className="overlay absolute inset-0 bg-[#1e293b] z-[-1] transition duration-300"></div>

      <div
        className="text-white text-center flex flex-col items-center  h-[250px]  justify-start p-6 transition-all duration-300 lg:border-transparent border-2 lg:border-white"
        style={{ borderRadius: "inherit" }}
      >
        {/* Title */}
        <h3 className="text-lg font-bold h-[48px] mb-8 md:mb-7 lg:mb-6 flex flex-wrap justify-center items-center text-center leading-snug">
          {(data.title + "").split(" ").map((word, idx) => (
            <span
              key={idx}
              style={{ transitionDelay: `${idx * 100}ms` }}
              className="transition-all duration-300 inline-block mr-2 tracking-wide capitalize lg:translate-y-1 lg:group-hover:translate-y-0"
            >
              {word}
            </span>
          ))}
        </h3>

        {/* Content */}
        <p className="text-center text-sm md:text-[13px] lg:text-base leading-relaxed text-white transition-all duration-300 tracking-wide capitalize group-hover:delay-300">
          {data.content}
        </p>
      </div>
    </div>
    //   </Link>
  );
};
