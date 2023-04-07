import React, { useState } from "react";
import img1 from "../../assets/partners/63079eb1dcb2d1d1e80cc790.png";
import img2 from "../../assets/partners/download.png";
import img3 from "../../assets/partners/polygon-matic-logo.png";
import img4 from "../../assets/partners/download (1).png";
import img5 from "../../assets/partners/095f339c95a27ca136aa962d09cf6f47.png";
import AnimatedTitle from "../../animations/AnimatedTitle";
// import { MdLocationPin } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { HiLocationMarker } from "react-icons/hi";

const partners = [img1, img2, img3, img4, img5];

const LeadForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        social: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => {
            return { ...prev, [name]: value };
        });
    };

    return (
        <div className="md:p-20 p-5 bg-slate-100 dark:bg-gray-900">
            {/* <h3 className='font-semibold text-gray-900 dark:text-white text-4xl text-center mb-8'>Lead Form</h3> */}
            <div className='flex justify-center items-center gap-2 mb-8'>
                <AnimatedTitle title={'Lead'} classes={'font-semibold text-gray-900 dark:text-white text-4xl text-center'} />
                <AnimatedTitle title={'Form'} classes={'font-semibold text-rose-500 dark:text-rose-500 text-4xl text-center'} />
            </div>
            <div className="grid md:grid-cols-2 gap-10 md:gap-8 max-w-6xl mx-auto">
                <div className="flex flex-col gap-8 justify-center">
                    <div className="flex gap-3">
                        <div className="bg-white rounded-full w-[48px] h-[48px] flex justify-center items-center">
                            <HiLocationMarker className="text-2xl text-black" />
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-black dark:text-white">
                                Address
                            </h3>
                            <p className="text-black text-sm dark:text-gray-200">
                            Industrial Area Phase 2, Chandigarh
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <div className="bg-white rounded-full w-[48px] h-[48px] flex justify-center items-center">
                            <BsTelephoneFill className="text-xl text-black" />
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-black dark:text-white">
                                Phone
                            </h3>
                            <p className="text-black text-sm dark:text-gray-200">
                                +91 8728039991
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <div className="bg-white rounded-full w-[48px] h-[48px] flex justify-center items-center">
                            <TfiEmail className="text-xl text-black" />
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-black dark:text-white">
                                Email
                            </h3>
                            <p className="text-black text-sm dark:text-gray-200">
                                associations@crypticentertainments.com
                            </p>
                        </div>
                    </div>
                </div>
                <div className="p-10 bg-white dark:bg-slate-800 dark:text-gray-100 rounded-3xl">
                    <h2 className="text-3xl font-medium mb-5">Get in Touch</h2>
                    <form className="flex flex-col gap-6 floating-input-form">
                        <div className="relative">
                            <label
                                className={`leading-loose transition-slow absolute ${
                                    formData.name
                                        ? "translate-y-[-12px] text-xs text-[#f43f5e]"
                                        : "text-sm text-gray-600 dark:text-gray-200"
                                }`}
                                htmlFor="name"
                            >
                                Name <span className="text-[#f43f5e]">*</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                required
                                value={formData.name}
                                onChange={(e) => handleChange(e)}
                                className="w-full text-lg pr-4 py-1 border-b-2 border-black bg-transparent dark:border-gray-100 focus:outline-none focus:border-gray-600"
                            />
                        </div>
                        <div className="relative">
                            <label
                                className={`leading-loose transition-slow absolute ${
                                    formData.email
                                        ? "translate-y-[-12px] text-xs text-[#f43f5e]"
                                        : "text-sm text-gray-600 dark:text-gray-200"
                                }`}
                                htmlFor="email"
                            >
                                Email <span className="text-[#f43f5e]">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={(e) => handleChange(e)}
                                className="w-full text-md pr-4 py-1 border-b-2 border-black bg-transparent dark:border-gray-100 focus:outline-none focus:border-gray-600"
                            />
                        </div>
                        <div className={`relative "}`}>
                            <label
                                htmlFor="company"
                                className={`absolute leading-loose transition-slow ${
                                    formData.company
                                        ? "translate-y-[-12px] text-xs text-[#f43f5e]"
                                        : "text-sm text-gray-600 dark:text-gray-200"
                                }`}
                            >
                                Company <span className="text-[#f43f5e]">*</span>
                            </label>
                            <input
                                type="text"
                                name="company"
                                required
                                value={formData.company}
                                onChange={(e) => handleChange(e)}
                                id="company"
                                className="w-full text-md pr-4 py-1 border-b-2 border-black bg-transparent dark:border-gray-100 focus:outline-none focus:border-gray-600"
                            />
                        </div>
                        <div className={`relative`}>
                            <label
                                htmlFor="phone"
                                className={`leading-loose transition-slow absolute ${
                                    formData.phone
                                        ? "translate-y-[-12px] text-xs"
                                        : "text-sm text-gray-600 dark:text-gray-200"
                                }`}
                            >
                                Phone
                            </label>
                            <input
                                type="text"
                                name="phone"
                                id="phone"
                                value={formData.phone}
                                onChange={(e) => handleChange(e)}
                                className="w-full text-md pr-4 py-1 border-b-2 border-black bg-transparent dark:border-gray-100 focus:outline-none focus:border-gray-600"
                            />
                        </div>
                        <div className="relative">
                            <label
                                htmlFor="social"
                                className={`leading-loose transition-slow absolute ${
                                    formData.social
                                        ? "translate-y-[-12px] text-xs"
                                        : "text-sm text-gray-600 dark:text-gray-200"
                                }`}
                            >
                                Social
                            </label>
                            <input
                                type="text"
                                name="social"
                                id="social"
                                value={formData.social}
                                onChange={(e) => handleChange(e)}
                                className="w-full text-md pr-4 py-1 border-b-2 border-black bg-transparent dark:border-gray-100 focus:outline-none focus:border-gray-600"
                            />
                        </div>
                        <input
                            type="submit"
                            value="Submit"
                            className="px-5 py-3 bg-rose-500 w-fit text-white rounded-xl"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LeadForm;
