import React from "react";
import Banner from "../components/common/Banner";
import { useParams } from "react-router-dom";
import Iframe from "react-iframe";

const data = [
    {
        id: 1,
        url: "https://www.youtube.com/embed/1Q8fG0TtVAY",
        title: 'Wonder Woman'
    },
];

export default function MoviesInner() {
    const params = useParams();

    console.log(params);
    return (
        <div className="bg-slate-100 dark:bg-slate-900">
            <Banner title1={data[0].title.split(' ')[0]} title2={data[0].title.split(' ')[1]} />
            <Iframe
                url={data[0].url}
                width="840px"
                height="520px"
                id=""
                className="max-w-[100%] mx-auto"
                display="block"
                position="relative"
            />
        </div>
    );
}
