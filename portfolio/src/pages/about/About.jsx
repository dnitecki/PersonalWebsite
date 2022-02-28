import "./About.scss";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { SkillItems } from "./SkillItems";
import { Experience } from "./Experience";

export default function About() {
  const [noOfElement, setnoOfElement] = useState(9);
  const slice = SkillItems.slice(0, noOfElement);
  const showMore = () => {
    setnoOfElement(noOfElement + 6);
  };
  const showLess = () => {
    setnoOfElement(noOfElement - 6);
  };

  let history = useHistory();
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
      <div className="app__about">
        <div className="title">Skills and Experience</div>

        <div className="app__about-container">
          <motion.div className="app__about-list">
            {slice.map((skill, index) => {
              return (
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className="app__about-item app__flex"
                  key={index}
                >
                  <div className="app__flex">
                    <img src={skill.icon} alt={skill.name} />
                  </div>
                  <p className="p-text">{skill.name}</p>
                </motion.div>
              );
            })}
            <div className="app__about-button">
              {noOfElement === 9 ? (
                <button
                  id="showMore"
                  className="showMore"
                  onClick={() => showMore()}
                >
                  Show More
                </button>
              ) : (
                <button
                  id="showLess"
                  className="showLess"
                  onClick={() => showLess()}
                >
                  Show Less
                </button>
              )}
            </div>
          </motion.div>
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
