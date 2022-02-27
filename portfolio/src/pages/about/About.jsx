import "./About.scss";
import React from "react";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import ReactTooltip from "react-tooltip";
import { SkillItems } from "./SkillItems";

export default function About() {
  const pageVariants = {
    animate: {
      opacity: 1,
      y: 0,
    },
    initial: {
      opacity: 0,
      y: "100vh",
    },
    exit: {
      opacity: 0,
      y: "-100vh",
    },
  };
  const pageTransitions = {
    duration: 1.25,
    type: "tween",
    ease: "easeOut",
  };

  const pageStyle = {
    position: "absolute",
  };
  return (
    <motion.div
      style={pageStyle}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={pageTransitions}
    >
      <div className="wrapper-about">
        <div className="header-about">
          <div className="title">Skills and Experience</div>
        </div>
        <div className="about-container">
          <motion.div className="about-list">
            {SkillItems.map((skills) => {
              return (
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className="about-item flex"
                >
                  <div className="flex">
                    <img src={skills.icon} alt="icon" />
                  </div>
                </motion.div>
              );
            })}
            ,
          </motion.div>
        </div>
        <div className="footer"></div>
      </div>
    </motion.div>
  );
}
