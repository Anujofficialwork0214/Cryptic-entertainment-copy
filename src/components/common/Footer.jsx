import React from "react";
import Logo from "../../assets/logo/logo ce.svg";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoHeart } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useTheme } from "../../hooks/ThemeContext";
import Logo2 from "../../assets/logo2.png"
import Logo3 from "../../assets/logo3.png"

export default function Footer() {

  const {theme} = useTheme()
  return (
    <footer className="relative bg-slate-100 dark:bg-slate-900 text-black dark:text-white">
      <div className="bg-slate-200 dark:bg-slate-800 px-3 py-4 md:px-6 md:py-10 rounded-t-3xl">
        <div className="max-w-[1100px] mx-auto grid sm:grid-cols-5 md:grid-cols-5 gap-6 md:gap-3 md:mb-6 mb-52">
          {/* company details */}
          <div className="bg-white/50 dark:bg-slate-900/30 backdrop-blur-lg shadow-md col-span-2 p-3 md:p-8 rounded-2xl">
            <img src={theme === "light" ? Logo3 : Logo2} alt="logo" className="w-20 mb-3 rounded-3xl" />
            <p className="text-gray-800 dark:text-gray-200 text-base md:max-w-[95%]">
              At Cryptic, we believe a founder’s story is their most powerful
              growth engine. In today’s world, people don’t just follow
              companies — they follow leaders. Your personal brand is what
              builds trust, attracts opportunities, and turns your vision into
              influence.
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href="https://www.facebook.com/crypticentertainments"
                target="_blank"
                className="w-42 text-gray-900 dark:text-gray-100 transition-all duration-300 hover:text-rose-500 dark:hover:text-rose-500 aspect-square rounded-full bg-slate-300 dark:bg-slate-700  p-2"
              >
                <BsFacebook className="text-xl" />
              </a>
              <a
                href="https://www.instagram.com/crypticentertainments/"
                target="_blank"
                className="w-42  text-gray-900 dark:text-gray-100 transition-all duration-300 hover:text-rose-500 dark:hover:text-rose-500 aspect-square rounded-full bg-slate-300 dark:bg-slate-700 p-2"
              >
                <BsInstagram className="text-xl " />
              </a>
              <a
                href="https://twitter.com/Cryptic_Media"
                target="_blank"
                className="w-42  text-gray-900 dark:text-gray-100 transition-all duration-300 hover:text-rose-500 dark:hover:text-rose-500 aspect-square rounded-full bg-slate-300 dark:bg-slate-700 p-2"
              >
                <BsTwitter className="text-xl " />
              </a>
              <a
                href="https://www.youtube.com/c/CrypticEntertainments"
                target="_blank"
                className="w-42  text-gray-900 dark:text-gray-100 transition-all duration-300 hover:text-rose-500 dark:hover:text-rose-500 aspect-square rounded-full bg-slate-300 dark:bg-slate-700 p-2"
              >
                <FaYoutube className="text-xl " />
              </a>
              <a
                href="https://www.linkedin.com/company/74962611/admin/"
                target="_blank"
                className="w-42  text-gray-900 dark:text-gray-100 transition-all duration-300 hover:text-rose-500 dark:hover:text-rose-500 aspect-square rounded-full bg-slate-300 dark:bg-slate-700 p-2"
              >
                <FaLinkedinIn className="text-xl " />
              </a>
            </div>
          </div>
          {/* links */}
          <div className="col-span-1 p-3 md:p-8">
            <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-5 whitespace-nowrap">
              Personal Brand
            </h3>
            <div className="border-t-2 border-gray-800 dark:border-gray-200 mb-5"></div>
            <ul className="text-gray-800 dark:text-gray-200 text-sm">
              <li className="mb-3">
                <a
                  href="https://www.instagram.com/official.inderjit/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Inderjit on Instagram
                </a>
              </li>
              <li className="mb-3">
                <a
                  href="https://www.instagram.com/nekpunjabihistory/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  NekPunjabi on Instagram
                </a>
              </li>
              <li className="mb-3">
                <a
                  href="https://www.instagram.com/career_gpt_/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Career GPT on Instagram
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1 p-3 md:p-8">
            <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-5">
              Links
            </h3>
            <div className="border-t-2 border-gray-800 dark:border-gray-200   mb-5"></div>
            <ul className="text-gray-800 dark:text-gray-200 text-sm">
              <li className="mb-3">
                <a href="/">Home</a>
              </li>
              <li className="mb-3">
                <a href="/About">About</a>
              </li>
              <li className="mb-3">
                <a href="/Services">Services</a>
              </li>
              <li className="mb-3">
                <a href="/Contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col-span-1 p-3 md:p-8">
            <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-5">
              Policies
            </h3>
            <div className="border-t-2 border-gray-800 dark:border-gray-200 mb-5"></div>
            <ul className="text-gray-800 dark:text-gray-200 text-sm">
              <li className="mb-3">
                <Link to="/policy/privacy-policy">Privacy Policy</Link>
              </li>
              <li className="mb-3">
                <Link to="/policy/cookie-policy">Cookie Policy</Link>
              </li>
              <li className="mb-3">
                <Link to="/policy/terms-and-condition">Terms & Condition</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-slate-300 dark:bg-slate-700 rounded-t-3xl absolute w-full md:-bottom-5 bottom-8 md:pb-0 pb-7">
        <div className="flex flex-wrap md:justify-between justify-center max-w-[1100px] mx-auto text-gray-900 dark:text-gray-100 text-sm p-3 md:p-4">
          <p>
            &copy; {new Date().getFullYear()} - Cryptic Entertainment - All
            rights reserved.
          </p>
          <p className="flex">
            Made with&nbsp;
            <IoHeart className="text-red-500 w-4 h-4" />
            &nbsp;in India
          </p>
        </div>
      </div>
    </footer>
  );
}
