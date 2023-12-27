import React from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import {
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaArrowCircleRight,
} from "react-icons/fa";

const LandingTop = () => {
  const ParticlesBg = dynamic(() => import("particles-bg"), { ssr: false });
  const Typical = dynamic(() => import("react-typical"), { ssr: false });
  const router = useRouter();

  return (
    <section id="profile">
      <div id="container">
        <div className="hero">
          <h1 className="lg-heading">
            <p>
              Hello<span className="text-secondary">,</span>
            </p>
            <span className="text-secondary">I'm</span> Arman Ali
            <span className="text-secondary">!</span>
          </h1>
          <h3 className="sm-heading">
            <Typical
              steps={[
                "** Full Stack Developer **",
                2500,
                "** MERN Stack **",
                2500,
                "** React Native **",
                2500,
                "** AWS Services **",
                2500,
                "** DevOps **",
                2500,
              ]}
              loop={Infinity}
              wrapper="p"
            />
          </h3>
          <div className="icons">
            <a href="https://twitter.com/ArmanGeeks" target="_blank">
              <FaTwitter className="fa-2x" />
            </a>
            <a
              href="https://www.facebook.com/people/Arman-Ali/100077120637198/"
              target="_blank"
            >
              <FaFacebook className="fa-2x" />
            </a>
            <a
              href="https://www.linkedin.com/in/arman-ali-15a098208/"
              target="_blank"
            >
              <FaLinkedin className="fa-2x" />
            </a>
            <a href="https://github.com/armanali-tech" target="_blank">
              <FaGithub className="fa-2x" />
            </a>
          </div>
        </div>
        <div className="work-btn">
          <button
            className="form-button"
            type="button"
            onClick={() => router.push("/projects")}
          >
            <spam>View Portfolio</spam> <FaArrowCircleRight className="arrow" />
          </button>
        </div>
      </div>
      <ParticlesBg
        color="#999999"
        type="cobweb"
        bg={{ zIndex: 1, top: 0, left: 0, position: "absolute" }}
      />
    </section>
  );
};
export default LandingTop;
