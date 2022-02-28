import "./Resume.scss";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Resume() {
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
    duration: 0.5,
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
      <div className="app__resume">
        <div
          onClick={() => {
            history.push("/");
          }}
          className="title"
        >
          Resume
        </div>
      </div>
    </motion.div>
  );
}
