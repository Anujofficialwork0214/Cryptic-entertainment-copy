import React from "react";
import Banner from "../../components/common/Banner";

const data ={
    title: "Cookie Policy",
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, sunt. Exercitationem ratione quia omnis incidunt totam eum alias magni nam, eius placeat quam tenetur? Numquam sunt reiciendis commodi earum natus sed distinctio nihil repellendus sint? Minus et sit reiciendis magnam quaerat commodi vero delectus, beatae tempore vel, illum ab itaque?'
}

export default function CookiePolicy() {
    return (
        <div>
            <Banner title1="Cookie" title2="Policy" />
            <div className="bg-slate-100 dark:bg-slate-900 py-6 pt-20">
                <div className="grid gap-8 max-w-[1200px] mx-auto">
                    <Content title={data.title} content={data.content}/>
                </div>
                <div className="grid gap-8 max-w-[1200px] mx-auto">
                    <Content title={data.title} content={data.content}/>
                </div>
            </div>
        </div>
    );
}

const Content = ({ title, content }) => {
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
