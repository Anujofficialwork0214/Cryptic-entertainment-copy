import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const MarqueeContent = () => {

    const navigate = useNavigate();
    const testimonials = [
        {
            id:1,
            img: "/testimonial/charulimg.png",
            title: "Charul Sharma",
            link: "Our-Work",
            text: "Your one-stop channel for career advice, personal branding, job search guidance, and networking strategies.I share simple, powerful tips and real-life success stories to help you advance in your career.",
        },
        {
             id:2,
            img: "/testimonial/first-umpire.png",
            title: "Deepak Goyal- First Umpire",
            link: "Our-Work",
            text: "Welcome to First Umpire, the ultimate destination for cricket fans! Whether it's international matches, domestic leagues, or IPL action, we've got you covered.",
        },
        {
             id:3,
            img: "/testimonial/fresherGPT.png",
            title: "Ishita - Freshers GPT",
            link: "Our-Work",
            text: "From job search tips to interview hacks and career advice tailored for newbies, our channel is your ultimate guide to leveling up your career game. 🚀 Let’s turn your potential into success.",
        },
        {
             id:4,
            img: "/testimonial/inderjeet.png",
            title: "Inderjeet Aulakh",
            link: "Our-Work",
            text: "I'm Inderjit, an entrepreneur and investor from India.I lead multiple ventures in real estate and business.My mission is to help others achieve financial freedom.I believe in impact through vision, hard work, and dedication.",
        },
        {
             id:5,
            img: "/testimonial/akash.png",
            title: "Akash Bajwa",
            link: "Our-Work",
            text: "Consistent storytelling rooted in heritage builds a strong, authentic brand identity. It creates emotional connections by blending cultural legacy with modern relevance. This approach ensures brand recognition through a timeless, unified narrative.",
        },
        {
             id:6,
            img: "/testimonial/jaspreet.png",
            title: "Jaspreet Singh",
            link: "Our-Work",
            text: "🏡🔑 Welcome to our YouTube Channel Nek Punjabi Estate! Explore Punjab's real estate world with us. We're here to make real estate terms easy to understand, share helpful housing tips, keep you updated, and explore investment tips.",
        },
        
    ];

    // Duplicate array to make it loop smoothly
    const loopedTestimonials = [...testimonials, ...testimonials];

    return (
        <div className="py-10 overflow-hidden">
            <Marquee speed={50} pauseOnHover={true} gradient={false} className="pointer-events-none">
                {loopedTestimonials.map((item, idx) => (
                    <div key={idx} className="mx-14 pointer-events-auto">
                        <Link
                             to={`/Our-Work`}
                            className="block bg-white rounded-lg shadow-md w-[300px] h-[300px] p-6 flex flex-col items-center text-center cursor-pointer hover:shadow-lg transition-shadow duration-300"
                        >
                            <img
                                src={item.img}
                                alt={`testimonial-${idx}`}
                                className="w-24 h-24 rounded-full object-cover mb-4"
                            />
                            <h4 className="font-semibold text-base mb-2 text-black">{item.title}</h4>
                            <p className="text-gray-700 text-sm line-clamp-3">{item.text}</p>
                        </Link>
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default MarqueeContent;
