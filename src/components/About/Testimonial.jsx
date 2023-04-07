import React from "react";

export default function Testimonial() {
    return <div className="grid auto-cols-[30%] overflow-hidden grid-flow-col scroll-smooth ">
        <div className="w-full " id="abc1">
            <img className="block mx-auto h-[400px]" src="https://unsplash.it/400/400" alt="" />
            <a href="#abc2">next</a>
        </div>
        <div className="w-full" id="abc2">
            <img className="block mx-auto" src="https://unsplash.it/400/400" alt="" />
            <a href="#abc3">prev</a>
        </div>
        <div className="w-full" id="abc3">
            <img className="block mx-auto" src="https://unsplash.it/400/400" alt="" />
            <a href="#abc4">prev</a>
        </div>
        <div className="w-full" id="abc4">
            <img className="block mx-auto" src="https://unsplash.it/400/400" alt="" />
            <a href="#abc5">prev</a>
        </div>
        <div className="w-full" id="abc5">
            <img className="block mx-auto" src="https://unsplash.it/400/400" alt="" />
            <a href="#abc6">prev</a>
        </div>
        <div className="w-full" id="abc6">
            <img className="block mx-auto" src="https://unsplash.it/400/400" alt="" />
            <a href="#abc1">prev</a>
        </div>
    </div>;
}
