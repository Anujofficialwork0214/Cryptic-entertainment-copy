import React, { useEffect, useState } from "react";
import { FaDev } from "react-icons/fa";

import styles from "../../App.module.css";
import useNavigation from "../../hooks/useNavigation";
import navigationData from "../../data/navigation";

import Navbar from "./Navbar";
import Tabbar from "./Tabbar";
import { useLocation, useParams } from "react-router-dom";

const Index = () => {
    const { currentRoute, setCurrentRoute } = useNavigation();
   
   
    return (
        <div className='bg-slate-100 dark:bg-gray-900'>
              
              <Navbar
                    navigationData={navigationData}
                    currentRoute={currentRoute}
                    setCurrentRoute={setCurrentRoute}
                />
            
            <Tabbar
                navigationData={navigationData}
                currentRoute={currentRoute}
                setCurrentRoute={setCurrentRoute}
            />
            {/* <div className={styles.devLogo}>
                 bv b b 
            </div> */}
        </div>
    );
};

export default Index;