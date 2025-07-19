import React from "react";
import AnimatedTitle from "../../animations/AnimatedTitle";

export default function Banner({ title1, title2}) {
    return (
        <div className="bg-slate-100 dark:bg-slate-900 py-16 banner">
            <div className="grid gap-8 max-w-[1200px] md:pt-[80px] place-items-center mx-auto">
                <div className='flex justify-center items-center gap-3'>
                    <AnimatedTitle title={title1} classes={'font-semibold text-gray-900 dark:text-white text-4xl md:text-5xl text-center'} />
                    {title2 && <AnimatedTitle title={title2} classes={'font-semibold text-black dark:text-white text-4xl md:text-5xl text-center'} />}
                </div>
            </div>
        </div>
    );
}
