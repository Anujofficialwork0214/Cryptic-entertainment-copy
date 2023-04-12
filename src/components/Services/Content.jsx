import React from "react";

export default function Content({ data }) {
    return (
        <div className="bg-slate-100 dark:bg-slate-900 py-6 pt-20">
            <div className="grid md:grid-cols-2 gap-8 max-w-[1200px] mx-auto">
                {data?.alignContent === "left" ? (
                    <>
                        <ContentSection
                            title={data.title}
                            content={data.content}
                        />
                        <Image src={data.img} alt={data.alt} alignContent={data?.alignContent}/>
                    </>
                ) : (
                    <>
                        <Image src={data.img} alt={data.alt} alignContent={data?.alignContent} />
                        <ContentSection
                            title={data.title}
                            content={data.content}
                        />
                    </>
                )}
            </div>
        </div>
    );
}

const Image = ({ src, alt, alignContent }) => {
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
            <h3 className="text-4xl font-medium text-black dark:text-white">
                {title}
            </h3>
            <p className="text-base text-justify text-gray-800 dark:text-gray-100">
                {content}
            </p>
        </div>
    );
};
