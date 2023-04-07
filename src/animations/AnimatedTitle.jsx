import React from "react";
import { motion } from "framer-motion";
import { dropIn, attachWords } from "./animations";

const AnimatedTitle = ({ title, classes }) => {
    return (
        <motion.h3
            variants={dropIn}
            initial="hidden"
            whileInView="visible"
            className={classes}
        >
            {(title+"").split("").map((letter, i) => (
                <motion.span
                    className="inline-block"
                    variants={attachWords}
                    key={i}
                >
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}
        </motion.h3>
    );
};

export default AnimatedTitle;
