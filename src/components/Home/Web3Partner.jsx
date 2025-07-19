import React from "react";
import img1 from "../../assets/partners/63079eb1dcb2d1d1e80cc790.png";
import img2 from "../../assets/partners/download.png";
import img3 from "../../assets/partners/polygon-matic-logo.png";
import img4 from "../../assets/partners/download (1).png";
import img5 from "../../assets/partners/095f339c95a27ca136aa962d09cf6f47.png";
import AnimatedTitle from "../../animations/AnimatedTitle";
import udemy2 from "../../assets/partners/udemy2.png";
import salesforce from "../../assets/partners/salesforce.png";
import naukri from "../../assets/partners/naukri.png";
import omaxe from "../../assets/partners/omaxe.png";
import dfinityimg from "../../assets/partners/dfinityimg.png";
import dfinityimg1 from "../../assets/partners/dfinityimg1.png";
import { useTheme } from "../../hooks/ThemeContext";

const Web3Partner = () => {
  const {theme} = useTheme();

  const partners = [
    udemy2,
    salesforce,
    naukri,
    omaxe,
    theme === "light" ? dfinityimg : dfinityimg1,
    img2,
    img3,
    img4,
  ];
  return (
    <div className="md:py-[150px] md:px-20 px-5 py-20 bg-slate-100 dark:bg-gray-900">
      {/* <h3 className='font-semibold text-gray-900 dark:text-white text-4xl text-center mb-8'>Web3 Partner</h3> */}
      <div className="flex justify-center items-center gap-2 mb-8">
        <AnimatedTitle
          title={"Our"}
          classes={
            "font-semibold text-gray-900 dark:text-white text-4xl text-center"
          }
        />
        <AnimatedTitle
          title={"Customers"}
          classes={
            "font-semibold text-black dark:text-white text-4xl text-center"
          }
        />
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-5">
        {partners.map((item, i) => (
          <div
            className="flex justify-center items-center p-10 bg-white/50 dark:bg-white/10 rounded-2xl hover:bg-rose-500/10  dark:hover:bg-rose-500/10"
            key={i}
          >
            <img src={item} alt={"Partner"} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Web3Partner;
