import React, {useState} from "react";
import { NavLink } from "react-router-dom";
//import Logo from "../../assets/logo/logo ce.svg";
import Switcher from "./Switcher";
import useScrollY from "../../hooks/useScrollY";
import Logo2 from "../../assets/logo2.png"
import Logo3 from "../../assets/logo3.png"
// import useDarkSide from "../../hooks/useDarkSide";
import { useTheme } from "../../hooks/ThemeContext";



const Navbar = ({ navigationData, currentRoute, setCurrentRoute }) => {
    const { theme } = useTheme(); // ✅ Reactive theme value
  const scrollY = useScrollY();
  const [stickyActive, setStickyActive] = React.useState(false);
  React.useEffect(() => {
    if (scrollY > 80) {
      setStickyActive(true);
    } else {
      setStickyActive(false);
    }
  }, [scrollY]);
  return (
    <nav
      className={`hidden md:flex flex-row items-center justify-between px-8 h-20 rounded-b-3xl fixed top-0 w-full z-20 ${
        stickyActive ? " bg-slate-200 dark:bg-slate-800 nav-scroll " : ""
      } `}
    >
      <span className="text-5xl text-gray-800 -mb-1">
        <img src={theme === 'dark' ? Logo2 : Logo3} alt="Logo" className="w-[40px] rounded-xl" />
      </span>
      <ul className="flex flex-row self-end h-12">
        {navigationData.map((item, index) => (
          <NavLink
            to={item === "Home" ? "/" : `/${item}`}
            className={({ isActive }) =>
              isActive
                ? "w-20 text-rose-500 dark:text-white border-b-4 border-rose-500 dark:border-white bg-gradient-to-b from-white/0 dark:from-black/0  to-rose-500/20 dark:to-rose-500/20 flex items-start justify-center "
                : "w-20 text-gray-500 hover:text-gray-700 dark:hover:text-white cursor-pointer font-medium tracking-wide text-sm flex items-start justify-center"
            }
            key={index}
            onClick={() => setCurrentRoute(item)}
          >
            {item}
          </NavLink>
        ))}
      </ul>
      <div className="flex justify-end items-center gap-3">
        <a
          href="https://forms.gle/TtBK4YUJZ2oJbuBc8"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-white text-black font-bold text-lg px-4 py-1.5 shadow-md hover:bg-gray-100 transition-all duration-300"
        >
          Book a Call
        </a>

        <Switcher />
      </div>
    </nav>
  );
};

export default Navbar;
