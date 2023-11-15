import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import CodeIcon from "@mui/icons-material/Code";
import TerminalIcon from "@mui/icons-material/Terminal";
import BuildIcon from "@mui/icons-material/Build";
import "../styles/Skills.css";
import programming from "../assets/programming3.jpg";
import backend from "../assets/backend-dev3.jpg";
import tools from "../assets/agile.jpg";

function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();
  const sectionRef = useRef(null);

  const handleIntersect = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        controls.start("visible");
      }
    });
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-40%",
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
  }, [handleIntersect]);

  return (
    <section id="skills" ref={sectionRef}>
      <div className="section-header_container">
        <p className="logo-text">
          <span className="color-text">SKIL</span>LS
        </p>
        <p className="section-subheader">
          Simplicity in Mastery: Unveiling My Skills
        </p>
      </div>
      {isVisible && (
        <motion.div
          className="skill-section_container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <div className="skills-container">
            <img className="skills-img" src={programming} alt="" />
            <div className="list-container">
              <div className="skills-text">
                <div className="circle circle-helper">
                  <CodeIcon fontSize="large" />
                </div>
                <div className="skills-section_text">
                  <p className="skills-section_text_heading">
                    <i>Crafting Digital Experiences with Code</i>
                  </p>
                </div>
              </div>
              <table className="table">
                <thead>
                  <th scope="col" colSpan={5} className="table-heading_text">
                    Programming and Development
                  </th>
                </thead>
                <tbody className="table-body">
                  <tr>
                    <th scope="row" rowSpan={2}>
                      Programming Languages:
                    </th>
                    <td>JavaScript</td>
                    <td>TypeScript</td>
                    <td>Java</td>
                  </tr>
                  <tr>
                    <td colSpan={3}>Python</td>
                  </tr>
                  <tr>
                    <th scope="row" rowSpan={4}>
                      Web Technologies:
                    </th>
                    <td>HTML</td>
                    <td>CSS</td>
                    <td>SASS</td>
                  </tr>
                  <tr>
                    <td>Bootstrap</td>
                    <td>Material UI</td>
                    <td>ReactJS</td>
                  </tr>
                  <tr>
                    <td>React-Native</td>
                    <td>REST</td>
                    <td>JSON</td>
                  </tr>
                  <tr>
                    <td colSpan={3}>XML</td>
                  </tr>
                  <tr>
                    <th>Runtime Environment:</th>
                    <td colSpan={3}>NodeJS</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="skills-container_alt">
            <div className="list-container">
              <div className="skills-text">
                <div className="circle circle-helper">
                  <TerminalIcon fontSize="large" />
                </div>
                <div className="skills-section_text">
                  <p className="skills-section_text_heading text-helper">
                    <i>Powering the Backend with Robust Frameworks</i>
                  </p>
                </div>
              </div>
              <table className="table">
                <thead>
                  <th scope="col" colSpan={5} className="table-heading_text">
                    Back-End Development
                  </th>
                </thead>
                <tbody className="table-body">
                  <tr>
                    <th scope="row">Back End Frameworks:</th>
                    <td>Express</td>
                    <td>Spring</td>
                    <td>Spring-Boot</td>
                  </tr>
                  <tr>
                    <th scope="row">Databases:</th>
                    <td colSpan={2}>SQL</td>
                    <td colSpan={2}>MongoDB</td>
                  </tr>
                  <tr>
                    <th>Software Testing:</th>
                    <td>Jest</td>
                    <td>Mocha</td>
                    <td>Junit</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <img className="skills-img" src={backend} alt="" />
          </div>
          <div className="skills-container">
            <img className="skills-img" src={tools} alt="" />
            <div className="list-container">
              <div className="skills-text">
                <div className="circle circle-helper">
                  <BuildIcon fontSize="large" />
                </div>
                <div className="skills-section_text">
                  <p className="skills-section_text_heading text-helper">
                    <i>Driving Efficiency with the Right Tools and Practices</i>
                  </p>
                </div>
              </div>
              <table className="table">
                <thead>
                  <th scope="col" colSpan={5} className="table-heading_text">
                    Tools and Methodologies
                  </th>
                </thead>
                <tbody className="table-body">
                  <tr>
                    <th scope="row" rowSpan={2}>
                      Tools:
                    </th>
                    <td>Jira</td>
                    <td>Confluence</td>
                    <td>Adobe Photoshop</td>
                  </tr>
                  <tr>
                    <td>Figma</td>
                    <td>Visual Studio Code</td>
                    <td>intellij</td>
                  </tr>
                  <tr>
                    <th scope="row">Skills:</th>
                    <td>Design Patterns</td>
                    <td>Agile</td>
                    <td>Scrum</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
}

export default Skills;
