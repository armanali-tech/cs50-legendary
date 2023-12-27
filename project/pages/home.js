import React, { lazy } from "react";
import Particles from "../components/custom/Particles";
import AboutMe from "../components/custom/AboutMe";
import Projects from "../components/custom/Projects";
import ContactUs from "../components/custom/ContactUs";

const Home = () => {
  return (
    <div>
      <Particles />
      <AboutMe />
      <Projects />
      <ContactUs />
    </div>
  );
};

export default Home;
