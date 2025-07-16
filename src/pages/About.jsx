import React from "react";
import Banner from "../components/common/Banner";
import Content from "../components/About/Content";
import OurTeam from "../components/About/OurTeam";
import Testimonials from "../components/About/Testimonials";
import { motion } from "framer-motion";
import pageTransition from "../animations/pageTransition";
import AboutusBottomContent from "../components/About/AboutusBottomContent";

// const data = [{
//     title: "",
//     content: `Cryptic Entertainments is an India-based production house focused on bringing the Indian tech story. We are continuously showcasing the new emerging tech stories out of India in new fields like Blockchain, AI, Metaverse etc.`,
//     content2: `Apart from bringing the tech story we also work with new-age tech brands along with D2C companies to bring the best versions of their stories.`,
//     img: "/about/about3.jpeg",
//     alt: "placeholder",
//     alignContent:"left"
// }];

const data = [
  {
    title: "We Build Personal Brands That Founders Can Bank On",
    content: `At Cryptic, we believe a founder’s story is their most powerful growth engine. In today’s world, people don’t just follow companies — they follow leaders. Your personal brand is what builds trust, attracts opportunities, and turns your vision into influence.`,
    content2: `Apart from bringing the tech story we also work with new-age tech brands along with D2C companies to bring the best versions of their stories.`,
    img: "/about/about3.jpeg",
    alt: "placeholder",
    alignContent: "left",
  },
];

const AboutUsContent = [
  {
    heading: "What We Do",
    description:
      "We help founders and business leaders turn their expertise and journey into a magnetic online presence. From strategy to execution, we handle everything:",
    services: [
      "Brand positioning and narrative design",
      "High‑impact video production, reels & carousels",
      "Podcasts, thought‑leadership content & distribution",
      "Ongoing management to grow your audience and authority",
      "Intent Based Performance Marketing",
      "Social Media Growth",
      "Podcast Services & Strategy",
    ],
    whyItMatters: {
      heading: "Why It Matters",
      description:
        "A strong personal brand isn’t just about likes and followers. It’s about outcomes:",
      outcomes: [
        "Investors who trust you",
        "Clients who find you (not the other way around)",
        "Talent who want to work with you",
      ],
    },
    whoWeWorkedWith: {
      heading: "Who We’ve Worked With",
      description:
        "We’ve partnered with visionary leaders like Charul Sharma (Career GPT), Inderjeet Aulakh (MPro Developers), and Jaspreet Singh (NekPunjabi Estates) — helping them grow audiences, unlock opportunities, and scale their businesses through personal branding.",
      clients: [
        { name: "Charul Sharma", company: "Career GPT" },
        { name: "Inderjeet Aulakh", company: "MPro Developers" },
        { name: "Jaspreet Singh", company: "NekPunjabi Estates" },
      ],
    },
    promise: {
      heading: "Our Promise",
      description:
        "We don’t do vanity metrics. We build authentic, authority‑driven personal brands that create real business impact.",
    },
    closingCTA: "Your story deserves a stage. Let’s build it together.",
  },
];

const About = () => {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Banner title1={"ABOUT"} title2={"US"} />
      {data.map((data, i) => (
        <Content key={i} data={data} />
      ))}
      {AboutUsContent?.map((data, i) => (
        <AboutusBottomContent key={i} data={data} />
      ))}
      <OurTeam />
      <Testimonials />

      {/* <Content data={data} alignContent="left" /> */}
    </motion.div>
  );
};

export default About;
