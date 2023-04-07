import React from "react";
import Banner from "../components/common/Banner";
import Content from "../components/About/Content";
import OurTeam from "../components/About/OurTeam";
import Testimonials from "../components/About/Testimonials";

const data = [{
    title: "",
    content: `Cryptic Entertainments is an India-based production house focused on bringing the Indian tech story. We are continuously showcasing the new emerging tech stories out of India in new fields like Blockchain, AI, Metaverse etc.`,
    img: "/about/about2.jpeg",
    alt: "placeholder",
    alignContent:"left"
},{
    title: "",
    content: `Apart from bringing the tech story we also work with new-age tech brands along with D2C companies to bring the best versions of their stories.`,
    img: "/about/about3.jpeg",
    alt: "placeholder",
    alignContent:"right"
}];


const About = () => {
    return (
        <div className="">
            <Banner title1={'ABOUT'} title2={'US'}/>
            <OurTeam />
            {data.map((data, i) =>(
                <Content key={i} data={data} />
            )
            )}
            <Testimonials />
           
            {/* <Content data={data} alignContent="left" /> */}
            
        </div>
    );
};

export default About;
