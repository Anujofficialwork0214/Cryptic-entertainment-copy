import React, { useCallback, useState, useEffect } from "react";
import { AiFillHome, AiOutlineContacts } from "react-icons/ai";
import { BiMovie } from "react-icons/bi";
import {
  MdOutlineContactPage,
  MdOutlineMiscellaneousServices,
} from "react-icons/md";
import { CgInbox } from "react-icons/cg";
import { GrServices } from "react-icons/gr";
//import useDarkSide from "../../hooks/useDarkSide";
import { NavLink } from "react-router-dom";
import Switcher from "./Switcher";
import Logo2 from "../../assets/logo2.png";
import Logo3 from "../../assets/logo3.png";
import { useTheme } from "../../hooks/ThemeContext";




const Tabbar = ({ navigationData, currentRoute, setCurrentRoute }) => {
  const { theme } = useTheme(); // ✅ Reactive theme value

  const getTabIcon = useCallback((item) => {
    switch (item) {   
      case "Home":
        return <AiFillHome />;
      case "Our-Work":
        return <BiMovie />;
      case "About":
        return <MdOutlineContactPage />;
      case "Contact":
        return <AiOutlineContacts />;
      case "Services":
        return <MdOutlineMiscellaneousServices />;
    }
  }, []);

   useEffect(() => {
      console.log("Theme changed to:", theme); // Will always reflect current
    }, [theme]);
  

  return (
    <nav className="flex md:hidden flex-row items-center justify-between px-8 h-16  bg-white dark:bg-gray-900 visible md:invisible fixed bottom-0 w-full rounded-t-3xl text-2xl z-20">
      {navigationData.map((item, index) => (
        <NavLink
          to={item === "Home" ? "/" : `/${item}`}
          key={index}
          className={({ isActive }) =>
            isActive
              ? " bg-gradient-to-t from-white/0 dark:from-black/0  to-rose-500/20 dark:to-rose-500/20 border-t-2 border-black text-black dark:text-white w-16 h-full flex items-center justify-center dark:border-white"
              : "text-gray-400 hover:text-gray-700 dark:hover:text-white cursor-pointer w-16 h-full flex items-center justify-center"
          }
          onClick={() => setCurrentRoute(item)}
        >
          <span className="-mb-1">{getTabIcon(item)}</span>
        </NavLink>
      ))}
      <div className="flex justify-end gap-2  ">
        <div className="absolute -top-[92vh]  transform -translate-x-1/4  py-4 px-3 ">
          <a
            href="https://forms.gle/TtBK4YUJZ2oJbuBc8"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-white text-black font-semibold text-sm px-2 py-2 shadow-md hover:bg-gray-100 transition-all duration-300"
          >
            Book a Call
          </a>
        </div>
        <div className="absolute -top-[91vh] right-2 bg-white/50 dark:bg-slate-900/50 p-4 rounded-full shadow backdrop-blur-md ">
          <Switcher />
        </div>
      </div>
      <div className="absolute -top-[91vh] left-2 bg-white/50 dark:bg-slate-900/50 p-2 rounded-full shadow backdrop-blur-md ">
        <img
        key={theme}
          src={theme === 'dark' ? Logo2 : Logo3}
          alt="logo"
          className="w-10 rounded-full"
        />
      </div>
    </nav>
  );
};

export default Tabbar;
