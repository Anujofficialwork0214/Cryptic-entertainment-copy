import React from "react";
import AnimatedTitle from "../../animations/AnimatedTitle";
import { IoLogoYoutube } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { CgFacebook } from "react-icons/cg";

const memberData = [
    {
        name: "Litesh Gumber",
        designation: "Founder",
        img: "/ourteam/litesh.png"
    },
    // {
    //     name: "Alextina Ditarson",
    //     designation: "Founder",
    //     img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    // },
    // {
    //     name: "Alextina Ditarson",
    //     designation: "Founder",
    //     img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    // },
    // {
    //     name: "Alextina Ditarson",
    //     designation: "Founder",
    //     img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    // },
    // {
    //     name: "Alextina Ditarson",
    //     designation: "Founder",
    //     img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    // },
    // {
    //     name: "Alextina Ditarson",
    //     designation: "Founder",
    //     img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    // },
    // {
    //     name: "Alextina Ditarson",
    //     designation: "Founder",
    //     img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    // },
    // {
    //     name: "Alextina Ditarson",
    //     designation: "Founder",
    //     img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    // },
]

const borders = ['hsl(4, 84%, 64%)', "hsl(215, 89%, 75%)", "hsl(40, 87%, 65%)", "hsl(169, 73%, 40%)", "hsl(219, 47%, 55%)"]

export default function OurTeam() {
    return (
        <div className="bg-slate-100 dark:bg-slate-900 py-6 pt-20">
            <div className="flex justify-center gap-2">
                <AnimatedTitle title={"Our"} classes="text-3xl font-bold text-black dark:text-white"/>
                <AnimatedTitle title={"Team"} classes="text-3xl font-bold text-black dark:text-white"/>
            </div>
            {/* <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-4 max-w-[1300px] mx-auto">
                {memberData.map((data, i) => (
                    <MemberCard key={i} data={data} idx={i}/>
                ))}
            </div> */}
             <div className="flex justify-center items-center">
                {memberData.map((data, i) => (
                    <MemberCard key={i} data={data} idx={i}/>
                ))}
            </div>
        </div>
    );
}

const MemberCard = ({ data, idx }) => {
    return (
        <div className="p-8 text-center">
            <div className=" relative rounded-3xl">
                <div className="flex max-w-[400px] mx-auto justify-center items-center rounded-full mb-4 p-4 animation-rotate-forward " style={{ border: `2px dashed ${borders[idx % 5]}`, boxShadow: '0 10px 30px #101e360f'}}>
                    <img
                        draggable={false}
                        src={data.img}
                        className="w-full rounded-full animation-rotate-backward"
                        alt={data.name}
                    />
                </div>
                <h3 className="text-xl font-medium text-black dark:text-white">
                    {data.name}
                </h3>
                <p className="text-base text-gray-800 dark:text-gray-100">
                    {data.designation}
                </p>
                <div className="flex justify-center text-black dark:text-white gap-5 mt-4">
                    <a href="#" className="w-6 h-6 ">
                        <CgFacebook />
                    </a>
                    <a href="#" className="w-6 h-6">
                        <FaTwitter />
                    </a>
                    <a href="#" className="w-6 h-6">
                        <IoLogoYoutube />
                    </a>
                </div>
            </div>
        </div>
    )
}
