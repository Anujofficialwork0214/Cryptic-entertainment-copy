import React from "react";
import { NavLink} from "react-router-dom";
import Logo from "../../assets/logo/logo ce.svg";
import Switcher from "./Switcher";
import useScrollY from "../../hooks/useScrollY";

const Navbar = ({ navigationData, currentRoute, setCurrentRoute }) => {

    const scrollY = useScrollY();
    const [stickyActive, setStickyActive] = React.useState(false);
    React.useEffect(() => {
            if(scrollY > 80){
                setStickyActive(true);
            }else{
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
                <img src={Logo} alt="Logo" className="w-[40px] rounded-xl" />
            </span>
            <ul className="flex flex-row self-end h-12">
                {navigationData.map((item, index) => (
                    <NavLink
                        to={item === "Home" ? "/" : `/${item}`}
                        className={({ isActive }) =>
                            isActive
                                ? "w-20 text-rose-500 dark:text-rose-500 border-b-4 border-rose-500 dark:border-rose-500 bg-gradient-to-b from-white/0 dark:from-black/0  to-rose-500/20 dark:to-rose-500/20 flex items-start justify-center "
                                : "w-20 text-gray-500 hover:text-gray-700 dark:hover:text-white cursor-pointer font-medium tracking-wide text-sm flex items-start justify-center"
                        }
                        key={index}
                        onClick={() => setCurrentRoute(item)}
                    >
                        {item}
                    </NavLink>
                ))}
            </ul>
            <Switcher />
        </nav>
        
    );
};

export default Navbar;
