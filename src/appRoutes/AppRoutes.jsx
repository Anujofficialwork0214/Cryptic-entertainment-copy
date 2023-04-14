import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Index from "../components/common";
import Footer from "../components/common/Footer";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import Services from "../pages/Services";
import ScrollToTop from "../components/common/ScrollToTop";
import ScrollTop from "../components/common/ScrollTop";
import YoutubeVideo from "../pages/YoutubeVideo";
import CookiePolicy from "../pages/policy/CookiePolicy";
import PrivacyPolicy from "../pages/policy/PrivacyPolicy";
import TermsAndCondition from "../pages/policy/TermsAndCondition";
import PageLoader from "../animations/PageLoader";
import { AnimatePresence, motion } from "framer-motion";
import  { Toaster } from "react-hot-toast";

const Layout = ({ children }) => {
    return (
        <>
            
            {children}
            <ScrollToTop />
        </>
    );
};

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <PageLoader />
            <Index />
            <ScrollTop />
            <AnimatedRoutes />
            <Footer />
        </BrowserRouter>
    );
};

const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Toaster position="top-center" reverseOrder={true} />
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Layout key={1} children={<Home />} />} />
                <Route path="/Home" element={<Layout key={1} children={<Home />} />} />
                <Route
                    path="/Movies"
                    element={<Layout key={1} children={<Movies />} />}
                />
                <Route
                    path="/About"
                    element={<Layout key={1} children={<About />} />}
                />
                <Route
                    path="/Contact"
                    element={<Layout key={1} children={<Contact />} />}
                />
                <Route
                    path="/Services"
                    element={<Layout key={1} children={<Services />} />}
                />
                <Route path="/video/:videoId" element={<YoutubeVideo />} />
                <Route path="/policy">
                    <Route
                        path="/policy/cookie-policy"
                        element={<Layout key={1} children={<CookiePolicy />} />}
                    />
                    <Route
                        path="/policy/privacy-policy"
                        element={<Layout key={1} children={<PrivacyPolicy />} />}
                    />
                    <Route
                        path="/policy/Terms-and-condition"
                        element={<Layout key={1} children={<TermsAndCondition />} />}
                    />
                </Route>
            </Routes>
        </AnimatePresence>
    );
};

export default AppRoutes;
