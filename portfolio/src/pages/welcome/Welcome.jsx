import "./Welcome.scss";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { motion } from "framer-motion";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import useSound from "use-sound";

export default function Welcome() {
  const welcomeSound = "./assets/MA_Readsounds_InterfaceNotification_7.wav";
  const [play] = useSound(welcomeSound, {
    volume: 0.05,
  });
  let history = useHistory();
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Dominick.", "a developer.", "self-driven."],
    });
  }, []);
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
      <div className="wrapper-welcome">
        <div className="header-welcome">
          <div className="title-top">Hi there, I'm</div>
          <div className="title-bottom">
            <span ref={textRef}></span>
          </div>
        </div>
        <div className="body-wrapper">
          <div className="pulse">
            <button
              onClick={() => {
                play();
                history.push("/aboutme");
              }}
              class="button"
            ></button>
            <img class="headshot" src="./assets/headshot.png" alt="headshot" />
          </div>
        </div>
        <div class="footer-welcome">
          <img
            className="down-arrow"
            onClick={() => {
              play();
              history.push("/aboutme");
            }}
            src="./assets/interface-arrows-button-down.svg"
            alt="icon"
          />
        </div>
      </div>
    </motion.div>
  );
}
