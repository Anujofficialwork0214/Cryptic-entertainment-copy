import React, { useState } from "react";
import { Link } from "react-router-dom";
import AnimatedTitle from '../../animations/AnimatedTitle'

const data = [
    {
        title: "Brand Films",
        content: "",
        img: "/services/brand_films.gif",
        alt: "Brand films",
        yt_link: "QNScB6W5_Mk",
    },
    {
        title: "Ad Films",
        content: "",
        img: "/services/ad_films.gif",
        alt: "Ad Films",
        yt_link: "iBCAPvYSeB4",
    },
    {
        title: "Web Series",
        content: "",
        img: "/services/web_series.gif",
        alt: "Web Series",
        yt_link: "8ZCO6BfOzRk",
    },
    {
        title: "Short Films",
        content: "",
        img: "/services/short_films.gif",
        alt: "Short Films",
        yt_link: "lJydpb-5tDg",
    },
    {
        title: "Documentaries",
        content: "",
        img: "/services/documentary.gif",
        alt: "Documentaries",
        yt_link: "JQUr46o5EOg",
    },
    {
        title: "Music Videos",
        content: "",
        img: "/services/music_videos.gif",
        alt: "Music Videos",
        yt_link: "uACi_Q3i7vs",
    },
    {
        title: "Metaverse Concerts and Events",
        content: "",
        img: "/services/metaverse_concert.gif",
        alt: "Metaverse Concerts and Events",
        yt_link: "9Sa16lDGiR8",
    },
];

export default function Index() {
    return (
        <div className="p-3 md:p-5 bg-slate-100 dark:bg-gray-900">
            <div className="max-w-[1200px] mx-auto pt-10">
            <AnimatedTitle title={'Services'} classes={'font-semibold text-gray-900 dark:text-white text-4xl text-center'} />
                <div className="grid mt-8 md:grid-cols-3 grid-cols-1 gap-5">
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
        <Link to={`/video/${data?.yt_link}`}>
            <div
                className="relative overlay-on-hover overflow-hidden p-2 md:p-2 sm:p-5 lg:p-5 isolate rounded-xl bg-cover bg-no-repeat group"
                style={{ backgroundImage: `url("${data.img}")` }}
            >
                <div className="overlay absolute inset-0 bg-black/70 lg:bg-black/0  lg:group-hover:bg-black/70 z-[-1] transition duration-300"></div>

                <div
                    className="text-white text-center flex flex-col gap-6 items-center p-6 transition-all duration-300 lg:border-transparent border-2 lg:group-hover:border-white"
                    style={{ borderRadius: "inherit" }}
                >
                    <h3 className="text-2xl font-bold">
                        {(data.title + "").split(" ").map((word, idx) => {
                            return (
                                <span
                                    key={idx}
                                    style={{
                                        transitionDelay: `${idx * 100}ms`,
                                    }}
                                    className={`lg:opacity-0 transition-all duration-300 inline-block mr-2 tracking-wide capitalize lg:translate-y-1 lg:group-hover:opacity-100 lg:group-hover:translate-y-0`}
                                >
                                    {word}
                                </span>
                            );
                        })}
                    </h3>
                    <p className="lg:opacity-0 transition-all duration-300 inline-block mr-2 tracking-wide capitalize lg:translate-y-1 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 group-hover:delay-300">
                        {data.content}
                    </p>
                    <a
                        className="lg:opacity-0 px-6 py-2 border-2 border-white text-white lg:group-hover:opacity-100 hover:bg-white hover:text-black rounded-tr-xl rounded-bl-xl"
                        href={data.yt_link}
                    >
                        View Sample
                    </a>
                </div>
            </div>
        </Link>
    );
};
