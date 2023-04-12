import React from "react";
import Banner from "../components/common/Banner";
import Index from "../components/Contact";
import { motion } from "framer-motion";
import pageTransition from "../animations/pageTransition";

const Contact = () => {
    return (
        <motion.div
            variants={pageTransition}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <Banner title1={"Contact"} title2={"Us"} />
            <Index />
        </motion.div>
    );
};

export default Contact;
