import React from "react";
import Banner from "../components/common/Banner";
import Index from "../components/Services";
import Content from "../components/Services/Content";
import { motion } from "framer-motion";
import pageTransition from "../animations/pageTransition";
import ContentFix from "../components/Services/ContentFix";
import { useTheme } from "../hooks/ThemeContext";

/* const data = [{
  title: "",
  content: `Cryptic Entertainments is an India-based production house focused on bringing the Indian tech story. We are continuously showcasing the new emerging tech stories out of India in new fields like Blockchain, AI, Metaverse etc.`,
  img: "/services/img2.jpeg",
  alt: "placeholder",
  alignContent:"left"
},{
  title: "",
  content: `Apart from bringing the tech story we also work with new-age tech brands along with D2C companies to bring the best versions of their stories.`,
  img: "/about/about3.jpeg",
  alt: "placeholder",
  alignContent:"right"
}]; */

const data = [
  {
    title: "Personal Brand",
    img: "/services/brand_films.gif",
    alt: "Brand films",
    yt_link: "QNScB6W5_Mk",
    content: `Craft a personal brand that speaks volumes. Define what you stand for and why it matters. Align your voice, visuals, and values seamlessly. Tell your story with intention and authenticity. Build recognition through consistent messaging. Create emotional connections with your audience. Stand out in a crowded digital world. Transform your presence into a lasting impression.Establish yourself as a thought leader in your niche. Communicate with clarity, confidence, and consistency. Let your brand reflect your mission and future goals.Inspire trust, loyalty, and real engagement.
`, //content: "Brand films are a popular marketing tool for companies and organizations to tell their story in a compelling way. As a movie production site, you have the skills to create cinematic brand films that stand out from the crowd. Brand films are highly shareable and versatile, able to be used in a variety of settings and repurposed for different audiences and platforms. By creating brand films, you can showcase your expertise and help your clients achieve their marketing goals.",
    alignContent: "left",
  },
  {
    title: "Ad Films",
    img: "/services/ad_films.gif",
    alt: "Ad Films",
    yt_link: "iBCAPvYSeB4",
    content:
      "Ad films are short videos that promote a product, service, or brand. As a movie production site, you have the skills and expertise to create engaging ad films that capture the attention of viewers and effectively promote the product or service being advertised. Ad films are highly targeted and designed to appeal to a specific audience, using visual storytelling, music, and sound design to create an emotional connection with the viewer. Ad films are a powerful marketing tool that can be used across a variety of platforms, from television to social media, and can help businesses increase brand awareness, drive sales, and achieve their marketing goals.",
    alignContent: "right",
  },
  {
    title: "Web Series",
    img: "/services/web_series.gif",
    alt: "Web Series",
    yt_link: "8ZCO6BfOzRk",
    content:
      "Web series are episodic video content created for online distribution, usually consisting of multiple episodes that follow a story arc. As a movie production site, you have the skills and expertise to create compelling web series that engage viewers and keep them coming back for more. Web series can be produced on a lower budget compared to traditional television shows, and they offer greater flexibility in terms of format and distribution. With the rise of streaming platforms, web series have become increasingly popular, providing an opportunity for businesses and individuals to tell their story and reach a wide audience. Web series can be used to build a loyal fanbase, increase brand recognition, and even generate revenue through advertising or sponsorship deals.",
    alignContent: "left",
  },
  {
    title: "Short Films",
    img: "/services/short_films.gif",
    alt: "Short Films",
    yt_link: "lJydpb-5tDg",
    content:
      "Short films are brief, standalone movies that typically run for less than 40 minutes. As a movie production site, you have the skills and expertise to create compelling short films that capture the attention of viewers and deliver a powerful message in a concise format. Short films can be produced on a lower budget than full-length feature films, making them an excellent option for independent filmmakers and businesses looking to create high-quality video content. Short films can be used for a variety of purposes, including as a calling card for aspiring filmmakers, as a promotional tool for businesses or organizations, or as an artistic expression that explores a particular theme or idea. With the rise of online video platforms, short films have become more accessible than ever, providing an opportunity for filmmakers and businesses to reach a global audience.",
    alignContent: "right",
  },
  {
    title: "Documentaries",
    img: "/services/documentary.gif",
    alt: "Documentaries",
    yt_link: "JQUr46o5EOg",
    content:
      "Documentaries are non-fiction films that provide an in-depth exploration of a particular topic, issue, or event. As a movie production site, you have the skills and expertise to create compelling documentaries that inform, educate, and entertain viewers. Documentaries can be produced on a range of topics, from social issues and political controversies to wildlife and the environment. They can be used for a variety of purposes, including as an educational tool, as a means of advocacy or awareness-raising, or simply as a way to entertain and engage audiences. Documentaries require thorough research, careful planning, and skilled execution to effectively communicate their message and capture the attention of viewers. With the rise of online streaming platforms, documentaries have become an increasingly popular form of entertainment, providing an opportunity for filmmakers and businesses to reach a global audience and spark meaningful discussions.",
    alignContent: "left",
  },
  {
    title: "Music Videos",
    img: "/services/music_videos.gif",
    alt: "Music Videos",
    yt_link: "uACi_Q3i7vs",
    content:
      "Music videos are short films that accompany a piece of music, often created for promotional purposes. As a movie production site, you have the skills and expertise to create visually stunning music videos that bring a song to life and capture the attention of viewers. Music videos can be produced on a range of budgets, from low-budget DIY productions to high-end, cinematic productions. They are an important promotional tool for musicians, helping to increase visibility and drive sales. Music videos typically use a combination of visual storytelling, choreography, and creative editing to create an engaging and memorable experience for viewers. With the rise of online video platforms, music videos have become an increasingly important part of the music industry, providing an opportunity for musicians to connect with fans around the world and reach new audiences.",
    alignContent: "right",
  },
  {
    title: "Metaverse Concerts and Events",
    img: "/services/metaverse_concert.gif",
    alt: "Metaverse Concerts and Events",
    yt_link: "9Sa16lDGiR8",
    content:
      "Metaverse concerts and events are virtual events that take place in a 3D virtual world or metaverse. As a movie production site, you have the skills and expertise to create immersive metaverse concerts and events that provide a unique and engaging experience for attendees. Metaverse concerts and events are accessible to anyone with an internet connection, allowing businesses and individuals to reach a global audience without the limitations of physical venues. They can be used for a variety of purposes, from music festivals and corporate events to product launches and art exhibitions. Metaverse concerts and events use a combination of 3D graphics, animation, and interactive elements to create a fully immersive experience for attendees, allowing them to explore virtual spaces, interact with other attendees, and engage with content in new and exciting ways. With the growth of virtual reality and online gaming, metaverse concerts and events are becoming increasingly popular, providing an opportunity for businesses and individuals to connect with audiences in new and innovative ways.",
    alignContent: "left",
  },
];

export default function Services() {
  const {theme} = useTheme()
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Banner title1={"Services"} />
      {/* <Index /> */}
      <ContentFix data={data[0]} />
      <Content data={data[1]} />
      <Content data={data[2]} />
      <Content data={data[3]} />
      <Content data={data[4]} />
      <Content data={data[5]} />
      <Content data={data[6]} />
    </motion.div>
  );
}
