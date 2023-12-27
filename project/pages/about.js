import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { FaArrowCircleRight, FaCheckCircle } from "react-icons/fa";
import Separator from "../components/resource/Separator";

const AboutMe = () => {
  const router = useRouter();
  const work = process.env.NEXT_PUBLIC_MEDIA_URL + "img/developer.webp";

  return (
    <div>
      <Navbar />
      <main id="about">
        <h1 className="lg-heading">
          About <span className="text-secondary">Me </span>
        </h1>
        <h2 className="sm-heading">Let me tell you a few things...</h2>
        <div className="about-info">
          <Image
            className="bio-image"
            src={work}
            alt="Picture of the author"
            width={400}
            height={400}
          />
          <div className="bio">
            <h3
              className="text"
              style={{ fontWeight: "bold", marginBottom: "1rem" }}
            >
              BIO - Who's this guy?
            </h3>

            <p>
              {" "}
              I'm Arman Ali, a skilled Full Stack Web Developer based in Mumbai,
              India. My professional journey revolves around unraveling complex
              problems and crafting delightful user experiences. My expertise
              lies in developing tailored applications that align with the
              unique requirements of my clients. With a background spanning web
              development, mobile app creation, front-end/back-end web,
              database/server management, and AWS services, I bring a
              comprehensive skill set to the table.{" "}
            </p>
            <p>
              {" "}
              Having dedicated over 7 years to web development, I've contributed
              to a variety of projects at start-ups, tech companies, and
              corporate environments. My portfolio includes design systems,
              websites, and apps, all geared towards creating digital products
              for both business and consumer use. I've embraced remote work,
              collaborating with clients and agencies worldwide, across diverse
              countries and industries.{" "}
            </p>
            <p>
              {" "}
              I approach my work with quiet confidence, fueled by a natural
              curiosity. I am consistently working to enhance my coding skills,
              and I find joy in tasks that challenge me to learn something new
              and push my boundaries in different directions.
            </p>
          </div>
          <div className="divider">
            {/* <h3 className="text">Skills I have</h3> */}
            <Separator
            // heading="Skills I have"
            // subheading="Skills I have"
            />
            <h1
              className="md-heading"
              style={{ color: "#d8dff8", textAlign: "center" }}
            >
              Skills I Have
            </h1>
          </div>

          <div className="job job-1">
            <h3>Frontend Development</h3>
            <h6> * * * </h6>
            <div className="experience">
              <article className="detail">
                <FaCheckCircle className="left-icon" />
                <div>
                  <h4>HTML5</h4>
                  <small>Experienced</small>
                </div>
              </article>
              <article className="detail">
                <FaCheckCircle className="left-icon" />
                <div>
                  <h4>CSS</h4>
                  <small>Experienced</small>
                </div>
              </article>
              <article className="detail">
                <FaCheckCircle className="left-icon" />
                <div>
                  <h4>JavaScript</h4>
                  <small>Experienced</small>
                </div>
              </article>
              <article className="detail">
                <FaCheckCircle className="left-icon" />
                <div>
                  <h4>Bootstrap</h4>
                  <small>Experienced</small>
                </div>
              </article>
              <article className="detail">
                <FaCheckCircle className="left-icon" />
                <div>
                  <h4>JQuery</h4>
                  <small>Experienced</small>
                </div>
              </article>
              <article className="detail">
                <FaCheckCircle className="left-icon" />
                <div>
                  <h4>ReactJs</h4>
                  <small>Experienced</small>
                </div>
              </article>
              <article className="detail">
                <FaCheckCircle className="left-icon" />
                <div>
                  <h4>NextJs</h4>
                  <small>Experienced</small>
                </div>
              </article>
              <article className="detail">
                <FaCheckCircle className="left-icon" />
                <div>
                  <h4>React Native</h4>
                  <small>Experienced</small>
                </div>
              </article>
            </div>
          </div>
          <div className="job job-2">
            <h3>Backend Development</h3>
            <h6> * * * </h6>
            <div className="experience">
              <article className="detail">
                <FaCheckCircle className="left-icon" />
                <div>
                  <h4>Node Js</h4>
                  <small>Experienced</small>
                </div>
              </article>
              <article className="detail">
                <FaCheckCircle className="left-icon" />
                <div>
                  <h4>MongoDB</h4>
                  <small>Experienced</small>
                </div>
              </article>
              <article className="detail">
                <FaCheckCircle className="left-icon" />
                <div>
                  <h4>ExpressJs</h4>
                  <small>Experienced</small>
                </div>
              </article>
              <article className="detail">
                <FaCheckCircle className="left-icon" />
                <div>
                  <h4>Sequelize</h4>
                  <small>Experienced</small>
                </div>
              </article>
              <article className="detail">
                <FaCheckCircle className="left-icon" />
                <div>
                  <h4>MySql</h4>
                  <small>Experienced</small>
                </div>
              </article>
              <article className="detail">
                <FaCheckCircle className="left-icon" />
                <div>
                  <h4>RESTful API</h4>
                  <small>Experienced</small>
                </div>
              </article>
              <article className="detail">
                <FaCheckCircle className="left-icon" />
                <div>
                  <h4>Python</h4>
                  <small>Experienced</small>
                </div>
              </article>
              <article className="detail">
                <FaCheckCircle className="left-icon" />
                <div>
                  <h4>C / C++</h4>
                  <small>Experienced</small>
                </div>
              </article>
            </div>
          </div>
          <div className="job job-3">
            <h3>AWS services</h3>
            <h6> * * * </h6>
            <div className="experience">
              <article className="detail">
                <FaCheckCircle className="left-icon" />
                <div>
                  <h4>EC2</h4>
                  <small>Experienced</small>
                </div>
              </article>
              <article className="detail">
                <FaCheckCircle className="left-icon" />
                <div>
                  <h4>Lambda</h4>
                  <small>Experienced</small>
                </div>
              </article>
              <article className="detail">
                <FaCheckCircle className="left-icon" />
                <div>
                  <h4>AWS S3</h4>
                  <small>Experienced</small>
                </div>
              </article>
              <article className="detail">
                <FaCheckCircle className="left-icon" />
                <div>
                  <h4>Route 53</h4>
                  <small>Experienced</small>
                </div>
              </article>
              <article className="detail">
                <FaCheckCircle className="left-icon" />
                <div>
                  <h4>CloudWatch</h4>
                  <small>Experienced</small>
                </div>
              </article>
              <article className="detail">
                <FaCheckCircle className="left-icon" />
                <div>
                  <h4>RDS</h4>
                  <small>Experienced</small>
                </div>
              </article>
              <article className="detail">
                <FaCheckCircle className="left-icon" />
                <div>
                  <h4>AWS SES</h4>
                  <small>Experienced</small>
                </div>
              </article>
              <article className="detail">
                <FaCheckCircle className="left-icon" />
                <div>
                  <h4>Amplify</h4>
                  <small>Experienced</small>
                </div>
              </article>
            </div>
          </div>
        </div>
        <div className="work-btn" style={{ margin: "6.5rem 0" }}>
          <button
            className="form-button"
            type="button"
            onClick={() => router.push("/contact")}
          >
            <span>Get in touch</span> <FaArrowCircleRight className="arrow" />
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutMe;
