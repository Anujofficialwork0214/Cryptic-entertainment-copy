import React from "react";
import { motion } from "framer-motion";
import { dropIn, attachWords } from "./animations";

const HeroSectionTitleAnimation = ({ title, strongText = "", classes }) => {
  const beforeStrong = title.replace(strongText, "");

  return (
    <motion.h3
      variants={dropIn}
      initial="hidden"
      whileInView="visible"
      className={classes}
    >
      {/* Animate first part */}
      {beforeStrong.split("").map((letter, i) => (
        <motion.span
          className="inline-block"
          variants={attachWords}
          key={`before-${i}`}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}

      {/* Animate strongText with font-[500] and no line break */}
      <span className="font-[500] whitespace-nowrap">
        {strongText.split("").map((letter, i) => (
          <motion.span
            className="inline-block"
            variants={attachWords}
            key={`strong-${i}`}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </span>
    </motion.h3>
  );
};

export default HeroSectionTitleAnimation;
