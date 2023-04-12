import React from "react";
import Banner from "../components/common/Banner";
import Index from "../components/Movies";
import { motion } from "framer-motion";
import pageTransition from "../animations/pageTransition";

const Movies = () => {
    return (
        <motion.div
            variants={pageTransition}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            {/* <AnimatePresence> */}

            {/* </AnimatePresence> */}
            <Banner title1="Movies" />
            <Index />
        </motion.div>
    );
};

export default Movies;
