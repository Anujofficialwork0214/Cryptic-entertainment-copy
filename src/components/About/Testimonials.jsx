import React from "react";
import AnimatedTitle from "../../animations/AnimatedTitle";
import TwitterLogo from "../../assets/TLogo.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IoLogoYoutube } from "react-icons/io";

const memberData = [
  {
    name: "Charul Sharma",
    designation: "Founder of Career GPT",
    img: "/testimonial/charulimg.png",
    // img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    comment:
      "Before working with Cryptic, I was struggling to show the world what we were building. Within months, they transformed my scattered ideas into a clear personal brand. My LinkedIn engagement tripled, and I started getting inbound invites from VCs and podcasts I’d only dreamed of before. They don’t just create content — they create credibility",
    ytLink: "https://www.youtube.com/@Career_GPT",
  },
  {
    name: "Inderjeet Aulakh",
    designation: "MPro Developers",
    img: "/testimonial/inderjeet.png",
    comment:
      "As a founder in a real estate market, standing out is a necessity. Cryptic built a strategy that reflected my journey and values, then executed it flawlessly across Instagram and YouTube. We’ve closed three major deals directly from leads who said, ‘I’ve been watching your videos.’ It’s hands‑down the best investment we made last year.",
    ytLink: "https://www.youtube.com/@inderjitmpro",
  },
  {
    name: "Jaspreet Singh",
    designation: "NekPunjabi Estates",
    img: "/testimonial/jaspreet.png",
    comment:
      "I always thought personal branding was just for influencers. Cryptic showed me it’s for serious business too. Their team handles everything — from scripting reels to posting and analytics — so I can focus on running my company. Today, my content feels authentic and has directly brought in high‑value property buyers",
    ytLink: "https://www.youtube.com/@NekPunjabiEstate",
  },
  {
    name: "Akash Bajwa",
    designation: "Creator of Nek Punjabi History",
    img: "/testimonial/akash.png",
    comment:
      "I had the passion and knowledge, but I didn’t know how to package it for a wider audience. Cryptic helped me turn my love for Punjabi heritage into a powerful personal brand. My videos now reach millions every week. They truly understand how to turn a story into influence.",
    ytLink: "https://www.youtube.com/@nekpunjabihistory",
  },
];

const borders = [
  "hsl(4, 84%, 64%)",
  "hsl(215, 89%, 75%)",
  "hsl(40, 87%, 65%)",
  "hsl(169, 73%, 40%)",
  "hsl(219, 47%, 55%)",
];

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 678 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 678, min: 0 },
    items: 1,
  },
};

export default function OurTeam() {
  return (
    <div className="bg-slate-100 dark:bg-slate-900 py-6 pt-20 pb-20">
      <div className="flex justify-center gap-2">
        <AnimatedTitle
          title={"Testimonials"}
          classes="text-3xl font-bold text-black dark:text-white"
        />
      </div>
      <div className="mt-12 gap-4 max-w-[1300px]  mx-auto items-center">
        <Carousel
          ssr
          showDots={true}
          dotListClass="mt-6"
          // partialVisbile
          itemClass="image-item"
          responsive={responsive}
        >
          {memberData.map((data, i) => (
            <TestimonialCard key={i} data={data} idx={i} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

const TestimonialCard = ({ data, idx }) => {
  return (
    <div className="p-4 my-8 ">
      <div
        style={{ borderTop: `3px solid ${borders[idx % 5]}` }}
        className="mt-7 relative bg-white dark:bg-slate-800 rounded-3xl shadow-lg p-8 pt-24 h-[380px] md:h-[350px]"
      >
        <div
          style={{ boxShadow: "0 10px 30px #101e360f" }}
          className="max-w-[40%] absolute top-0 flex justify-center items-center p-4 left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full bg-white dark:bg-slate-700 "
        >
          <img
            draggable={false}
            src={data.img}
            className="w-full rounded-full"
            alt={data.name}
          />
        </div>
        <p className="text-justify text-sm mb-4 text-gray-800/90 dark:text-gray-100/90 review">
          {data.comment}
        </p>
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-medium text-black dark:text-white">
              {data.name}
            </h3>
            <p className="text-sm text-gray-800/80 dark:text-gray-100/80">
              {data.designation}
            </p>
          </div>
          <a
            href={data?.ytLink}
            target="_blank"
            className="flex justify-center items-center"
          >
            {/* <img
                            src={TwitterLogo}
                            alt={data.name}
                            className="max-w-[40px]"
                        /> */}
            <IoLogoYoutube className="max-w-[100px] h-8 w-11 text-white" />
          </a>
        </div>
        {/* <div className="flex justify-center text-black dark:text-white gap-5 mt-4">
                    <a href="#" className="w-6 h-6">
                        <CgFacebook />
                    </a>
                    <a href="#" className="w-6 h-6">
                        <FaTwitter />
                    </a>
                    <a href="#" className="w-6 h-6">
                        <IoLogoYoutube />
                    </a>
                </div> */}
      </div>
    </div>
  );
};
