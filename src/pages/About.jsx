import React from "react";
import Banner from "../components/common/Banner";
import Content from "../components/About/Content";
import OurTeam from "../components/About/OurTeam";
import Testimonials from "../components/About/Testimonials";
import { motion } from "framer-motion";
import pageTransition from "../animations/pageTransition";

const data = [{
    title: "",
    content: `Cryptic Entertainments is an India-based production house focused on bringing the Indian tech story. We are continuously showcasing the new emerging tech stories out of India in new fields like Blockchain, AI, Metaverse etc.`,
    content2: `Apart from bringing the tech story we also work with new-age tech brands along with D2C companies to bring the best versions of their stories.`,
    img: "/about/about3.jpeg",
    alt: "placeholder",
    alignContent:"left"
}];


const About = () => {
    return (
        <motion.div
            variants={pageTransition}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <Banner title1={'ABOUT'} title2={'US'}/>
            {data.map((data, i) =>(
                <Content key={i} data={data} />
                )
                )}
                <OurTeam />
            <Testimonials />
           
            {/* <Content data={data} alignContent="left" /> */}
            
        </motion.div>
    );
};

export default About;
