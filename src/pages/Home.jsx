import React from "react";
import AboutHome from "../components/Home/About";
import Hero from "../components/Home/Hero";
import LeadForm from "../components/Home/LeadForm";
import PastWork from "../components/Home/PastWork";
import Services from "../components/Home/Services";
import Web3Partner from "../components/Home/Web3Partner";
import { motion } from "framer-motion";
import pageTransition from "../animations/pageTransition";

const Home = () => {
    return (
        <motion.div
            variants={pageTransition}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <Hero />
            <Services />
            <LeadForm />
            <AboutHome />
            <Web3Partner />
            {/* <PastWork /> */}
        </motion.div>
    );
};

export default Home;
