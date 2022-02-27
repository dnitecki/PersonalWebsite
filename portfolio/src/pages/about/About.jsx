import "./About.scss";
import React from "react";
import { motion } from "framer-motion";
import { Timeline } from "primereact/timeline";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import ReactTooltip from "react-tooltip";
import { SkillItems } from "./SkillItems";
import { Experience } from "./Experience";

export default function About() {
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
            {SkillItems.map((skill) => {
              return (
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className="app__about-item app__flex"
                >
                  <div className="app__flex">
                    <img src={skill.icon} alt={skill.name} />
                  </div>
                  <p className="p-text">{skill.name}</p>
                </motion.div>
              );
            })}
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
