import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const AboutMe = (props) => {
  return (
    <div>
      <Navbar />
      <main id="contact">
        <h1 className="lg-heading">
          Contact <span className="text-secondary">Me </span>
        </h1>
        <h2 className="sm-heading">This is how you can reach me...</h2>
        <div className="contact-text">
          {/* <h3 className="text-in-touch">Get In Touch</h3> */}
          <p>
            I’m always open to discussing remote project work or partnership
            opportunities, my inbox is always open.
          </p>
          <p>
            Whether you have a question or just want to say hi, I’ll try my best
            to get back to you!
          </p>
        </div>

        <div className="form-row mr-rem mt-rem">
          <div className="boxes">
            <div>
              <span className="text-secondary"> Email: </span>
              armanali.inno@gmail.com
            </div>
            <div>
              <span className="text-secondary"> Phone: </span>
              +91 7400 401 918
            </div>
            <div>
              <span className="text-secondary"> Address: </span>
              Sion(E), Mumbai 400022
            </div>
          </div>

          <form
            name="contact-us"
            action="https://formspree.io/f/mrgrnpnj"
            className="form-field"
            method="POST"
            target="_blank"
          >
            <div className="form-row">
              <input
                name="name"
                className="form-input mr-rem"
                placeholder="Name"
                type="text"
                required
              />
              <input
                name="email"
                className="form-input"
                placeholder="Email"
                type="email"
                required
              />
            </div>
            <input
              name="subject"
              className="form-input"
              placeholder="Subject"
              type="text"
              required
            />
            <textarea
              name="massage"
              className="form-input msg"
              placeholder="Message"
              type="text"
              required
            />
            <button
              className="form-button"
              style={{ borderRadius: 0 }}
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutMe;
