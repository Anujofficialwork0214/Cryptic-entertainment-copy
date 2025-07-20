import React, { useState, useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import useScrollY from "../../hooks/useScrollY";
// import useDarkSide from "../../hooks/useDarkSide";
import { useTheme } from "../../hooks/ThemeContext";

const CIRCLE_PERIMETER = 188.49555921538757;
const ScrollToTop = () => {
  const [progress, setProgress] = useState(0);
  const [dashOffset, setDashOffset] = useState(0);
  const { theme } = useTheme(); // ✅ Reactive theme value

  const scrollY = useScrollY();
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const progresss = (scrollPosition / scrollHeight) * 100;
      const offset = (scrollPosition / scrollHeight) * CIRCLE_PERIMETER;
      setDashOffset(offset);
      setProgress(Math.floor(progresss));
    };
    handleScroll();
  }, [scrollY]);
  useEffect(() => {
    // console.log("Theme changed to:", theme); // Will always reflect current
  }, [theme]);

  return (
    <div className="fixed z-50 inline-flex items-center justify-center overflow-hidden rounded-full md:bottom-5 bottom-16 right-5">
      <svg className="w-20 h-20">
        <circle
          className="text-gray-300 dark:text-slate-800"
          strokeWidth="5"
          stroke="currentColor"
          fill="transparent"
          r="30"
          cx="40"
          cy="40"
        ></circle>
        <circle
          className={`${theme === "light" ? "text-black" : "text-white"}`}
          strokeWidth="5"
          strokeLinecap="round"
          stroke="currentColor"
          fill="none"
          r="30"
          cx="40"
          cy="40"
          strokeDasharray={CIRCLE_PERIMETER}
          strokeDashoffset={CIRCLE_PERIMETER - dashOffset}
        ></circle>
      </svg>
      <span
        className={`absolute ${theme === "light" ? "text-black" : "text-white"} text-sm cursor-pointer`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <AiOutlineArrowUp className="w-4 h-4 mx-auto" />
        {progress}%
      </span>
    </div>
  );
};

export default ScrollToTop;
