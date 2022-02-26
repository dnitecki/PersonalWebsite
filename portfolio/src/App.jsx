import "./app.scss";
import React from "react";
import Welcome from "./pages/welcome/Welcome";
import Contact from "./pages/contact/Contact.jsx";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Sidebar from "./components/sidebar/Sidebar";
import Resume from "./pages/resume/Resume";
import Projects from "./pages/projects/Projects";
import About from "./pages/about/About";

function App() {
  const location = useLocation();
  return (
    <div className="app">
      <div>
        <Sidebar />
        <AnimatePresence>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/">
              <Welcome />
            </Route>
            <Route exact path="/aboutme">
              <About />
            </Route>
            <Route exact path="/resume">
              <Resume />
            </Route>
            <Route exact path="/projects">
              <Projects />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
