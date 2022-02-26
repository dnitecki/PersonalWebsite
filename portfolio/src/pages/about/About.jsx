import "./About.scss";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

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
      <div className="wrapper-portfolio">
        <div className="header-portfolio"></div>
        <div className="body-portfolio">
          <div
            onClick={() => {
              history.push("/");
            }}
            className="title"
          >
            About Me
          </div>
        </div>
        <div className="footer"></div>
      </div>
    </motion.div>
  );
}
