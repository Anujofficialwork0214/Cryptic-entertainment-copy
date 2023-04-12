import React from "react";

export default function Content({ data }) {
    return (
        <div className="bg-slate-100 dark:bg-slate-900 py-6 pt-20 flex justify-center items-center">
            <div className='flex justify-center items-center gap-5  max-w-[1300px]'>
                <div className='rounded-3xl border-[12px] border-slate-300/50 dark:border-slate-700/50 md:w-[500px] w-[300px]'>
                    <img src={data.img} alt='' className='w-full h-full rounded-2xl'/>
                </div>
                <div className='w-full'>
                    <h3 className='md:text-xl text-lg text-slate-900 dark:text-slate-100 font-thin mb-5'>{data.content} 
                    </h3>
                    <h3 className='md:text-xl text-lg text-slate-900 dark:text-slate-100 font-thin'>{data.content2}</h3>
                </div>
                
            </div>
        </div>
    );
}

/* const Image = ({ src, alt, alignContent }) => {
    return (
        <div className="p-4">
            <img
                src={src}
                className={`w-full hover:grayscale transition-all duration-500 ${alignContent !== "left" ? 'rounded-tr-3xl rounded-bl-3xl' : 'rounded-tl-3xl rounded-br-3xl'}`}
                alt={alt}
            />
        </div>
    );
};

const ContentSection = ({ title, content }) => {
    return (
        <div className="p-4 flex flex-col gap-5 justify-center ">
            <h3 className="text-xl font-medium text-black dark:text-white">
                {title}
            </h3>
            <p className="text-base text-justify text-gray-800 dark:text-gray-100">
                {content}
            </p>
        </div>
    );
};
 */