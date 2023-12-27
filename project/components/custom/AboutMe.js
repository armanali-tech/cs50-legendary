import React from "react";
// import { useRouter } from "next/router";
import Image from "next/image";
import devImg from "../../assets/img/developer.webp";
import { FaArrowCircleRight, FaCheckCircle } from "react-icons/fa";
import Separator from "../resource/Separator";

const AboutMe = () => {
  // const router = useRouter();

  return (
    <section id="about">
      <div className="about-info">
        <Image
          className="bio-image"
          src={"https://arman-ali.s3.amazonaws.com/img/developer.webp"}
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
            Greetings! I am a seasoned and skilled Full Stack Web Developer
            hailing from the vibrant city of Mumbai, India. With an unwavering
            dedication to my craft, I embark on a journey to unravel intricate
            challenges and craft captivating digital experiences. My
            professional journey is a fusion of diverse backgrounds, allowing me
            to infuse a unique perspective into each project I undertake.{" "}
          </p>
          <p>
            {" "}
            Since beginning my journey I've been building stuff on the web over
            7+ years, I've worked at start-ups, tech companies and corporate on
            a range of different projects, including design systems, websites
            and apps to create digital products for both business and consumer
            use. I've done remote work for clients and agencies across various
            countries and industries.{" "}
          </p>
          <p>
            {" "}
            Thank you for considering me for your digital journey. Let's
            collaborate and bring your aspirations to life through code,
            creativity, and unwavering commitment. Feel free to reach out, and
            let's embark on a transformative digital odyssey together.{" "}
          </p>
        </div>
        <div className="divider">
          <Separator heading="My Experience" subheading="" />
        </div>
        <div className="job job-1">
          <h3>Frontend Development</h3>
          <h6> * * * </h6>
          <div className="experience">
            <article className="detail">
              <FaCheckCircle className="left-icon" />
              <div>
                <h4>HTML</h4>
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
    </section>
  );
};

export default AboutMe;
