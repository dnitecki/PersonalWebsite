import "./About.scss";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Carousel from "../../components/carousel/Carousel";
import SKills from "../../components/skills/Skills";

export default function About() {
  let history = useHistory();

  const pageVariants = {
    animate: {
      opacity: 1,
      // y: 0,
    },
    initial: {
      opacity: 0,
      // y: "100vh",
    },
    exit: {
      opacity: 0,
      // y: "-100vh",
    },
  };
  const pageTransitions = {
    duration: 1,
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
      <div className="app__about">
        <div className="title">Skills and Experience</div>

        <div className="app__about-container">
          <SKills />
        </div>
        <div>
          <Carousel />
        </div>
        <div className="app__about-footer">
          <img
            className="about-down-arrow"
            onClick={() => {
              history.push("/resume");
            }}
            src="./assets/interface-arrows-button-down.svg"
            alt="icon"
          />
        </div>
      </div>
    </motion.div>
  );
}
