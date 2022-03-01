import "./Skills.scss";
import React, { useState, useEffect } from "react";
import { SkillItems } from "./SkillItems";
import { motion } from "framer-motion";
export default function SKills() {
  const [noOfElement, setnoOfElement] = useState(9);
  const slice = SkillItems.slice(0, noOfElement);
  const showMore = () => {
    setnoOfElement(noOfElement + 6);
  };
  const showLess = () => {
    setnoOfElement(noOfElement - 6);
  };
  return (
    <div>
      <motion.div className="app__about-list">
        {slice.map((skill, index) => {
          return (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.1 }}
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
  );
}
