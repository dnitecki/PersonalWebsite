import "./Contact.scss";
import { motion } from "framer-motion";
import Form from "../../components/form/Form.tsx";

export default function Contact() {
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
    overflow: "none",
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
      <div className="wrapper-contact">
        <div className="header-contact">
          <div className="title-contact">Let's get in touch...</div>
        </div>
        <div className="body-contact">
          <Form />
        </div>
        <div className="footer"></div>
      </div>
    </motion.div>
  );
}
