import React, { useState, useEffect, useRef } from "react";
import { Button, Typography } from "@mui/material";
import { motion, useAnimation } from "framer-motion";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import BugReportIcon from "@mui/icons-material/BugReport";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import ChatIcon from "@mui/icons-material/Chat";
import medium from "../assets/medium-alt.svg";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import "../styles/About.css";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const controls = useAnimation(); // Create animation controls

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-36%",
      threshold: 0.1, // Adjust this threshold as needed
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleIntersect = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        controls.start("visible"); // Start the animation when visible
      }
    });
  };

  return (
    <section id="about" ref={sectionRef}>
      <div className="section-header_container">
        <p className="logo-text">
          <span className="color-text">ABO</span>UT
        </p>
        <p className="section-subheader">
          Discovering the Journey: Getting to Know Me
        </p>
      </div>
      {isVisible && (
        <motion.div
          className="about-section_container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <div className="sub-icon_container">
            <div className="sub-icon_item">
              <div className="circle">
                <Diversity3Icon fontSize="large" />
              </div>
              <p className="sub-icon-text">
                <span className="color-text">COLLABORATI</span>ON
              </p>
            </div>
            <div className="sub-icon_item">
              <div className="circle">
                <BugReportIcon fontSize="large" />
              </div>
              <p className="sub-icon-text">
                <span className="color-text">PROBLEM-SOLVI</span>NG
              </p>
            </div>
            <div className="sub-icon_item">
              <div className="circle">
                <ChatIcon fontSize="large" />
              </div>
              <p className="sub-icon-text">
                <span className="color-text">COMMUNICATI</span>ON
              </p>
            </div>
          </div>

          <div className="iconContainer">
            <div className="innerIconContainer">
              <a
                href="https://medium.com/@Matthew_Alvarez"
                target="_blank"
                rel="noreferrer"
              >
                <img src={medium} alt="medium icon" className="medium-icon" />
              </a>
              <a
                href="https://github.com/C0ding-K1D"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon
                  style={{
                    color: "#00416c",
                  }}
                  className="about-icon"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/matthew-alvarez-778b3a22b/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon
                  className="about-icon"
                  style={{
                    marginTop: ".5rem",
                    color: "#00416c",
                  }}
                />
              </a>
            </div>
            <div className="about-content">
              <div className="about-image"></div>
              <div className="about-text">
                <p>
                  Hello, I'm Matthew, a dedicated full-stack developer with a
                  passion for architecting web solutions. My journey in the
                  realm of coding ignited with a fascination for front-end
                  design, but quickly expanded as I immersed myself in the
                  intricacies of back-end development.
                  <br /> I find my stride when faced with complex challenges,
                  sculpting them into elegant, user-centric applications. With a
                  robust foundation in programming languages such as JavaScript
                  and Java, coupled with hands-on expertise in both front-end
                  and back-end frameworks, I'm well-equipped to help drive
                  innovative projects and contribute my skills to create
                  seamless digital experiences.
                  <br /> My extensive experience in building backend systems and
                  portals makes me a valuable asset to companies seeking
                  versatile developers capable of developing both
                  customer-facing interfaces and the behind-the-scenes
                  infrastructure that powers them.
                  <br />
                  Let's collaborate to craft something extraordinary!
                </p>
              </div>
            </div>
            <Typography
              variant="subtitle1"
              component="p"
              color={"#00416c"}
              className="scrollText"
            >
              Scroll Down
            </Typography>
          </div>
          <Button
            className="btn-contact_about"
            variant="contained"
            size="large"
            endIcon={<ChatBubbleOutlineIcon />}
          >
            <a href="#contact" className="btn-helper">
              Let's Talk
            </a>
          </Button>
        </motion.div>
      )}
    </section>
  );
};

export default About;
