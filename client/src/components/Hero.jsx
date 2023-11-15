import { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "../styles/Hero.css";
import video from "../assets/code4.mp4";
import navLogo from "../assets/newLogo.svg";
import DownloadIcon from "@mui/icons-material/Download";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import axios from "axios";

function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  const handleDownload = async () => {
    try {
      // Replace with your server's endpoint
      const response = await axios.get("http://3.147.54.162:8000/v1/download", {
        responseType: "blob", // Set the response type to 'blob' to handle binary data
      });

      // Check if the response is successful
      if (response.status !== 200) {
        throw new Error(`Download failed with status: ${response.status}`);
      }

      // Create a temporary URL for the blob
      const url = window.URL.createObjectURL(new Blob([response.data]));

      // Create a link element to trigger the download
      const link = document.createElement("a");
      link.href = url;
      link.download = "myResume.docx"; // Set the desired file name

      // Trigger the click event on the link to start the download
      link.click();

      // Clean up by revoking the URL object
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };

  return (
    <div className="container">
      <nav className="sticky">
        <div className="logo-container">
          <a href="#">
            <img className="my-svg" src={navLogo} alt="logo" />
          </a>
          <div className="logo-text_container">
            <p className="logo-subtext">MATTHEW ALVAREZ</p>
            <p className="logo-text logo-text_mobile">
              <span className="color-text">DEVELOP</span>ER
            </p>
          </div>
        </div>
        <div className="nav-links_container">
          <ul className="nav-links">
            <a href="#about" className="nav-link">
              <li>About</li>
            </a>
            <a href="#skills" className="nav-link">
              <li>Skills</li>
            </a>
            <a href="#blog" className="nav-link">
              <li>Blog</li>
            </a>
            <a href="#projects" className="nav-link">
              <li>Projects</li>
            </a>
            <a href="#testimonials" className="nav-link">
              <li>Testimonials</li>
            </a>
            <a href="#contact" className="nav-link">
              <li>Contact</li>
            </a>
          </ul>
          <button
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
          </button>
          <nav className={`mobile-menu ${menuOpen ? "open" : ""}`}>
            <ul className="mobile-links">
              <a href="#about">
                <li
                  className={activeLink === 0 ? "active" : ""}
                  onClick={() => handleLinkClick(0)}
                >
                  About
                </li>
              </a>
              <a href="#skills">
                <li
                  className={activeLink === 1 ? "active" : ""}
                  onClick={() => handleLinkClick(1)}
                >
                  Skills
                </li>
              </a>
              <a href="#blog">
                <li
                  className={activeLink === 2 ? "active" : ""}
                  onClick={() => handleLinkClick(2)}
                >
                  Blog
                </li>
              </a>
              <a href="#projects">
                <li
                  className={activeLink === 3 ? "active" : ""}
                  onClick={() => handleLinkClick(3)}
                >
                  Projects
                </li>
              </a>
              <a href="#testimonials">
                <li
                  className={activeLink === 4 ? "active" : ""}
                  onClick={() => handleLinkClick(4)}
                >
                  Testimonials
                </li>
              </a>
              <a href="#contact">
                <li
                  className={activeLink === 5 ? "active" : ""}
                  onClick={() => handleLinkClick(5)}
                >
                  Contact
                </li>
              </a>
            </ul>
          </nav>
        </div>
      </nav>
      <div className="bg-design">
        <h1 className="hero-subtext">FULL-STACK</h1>
        <section className="showcase">
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            type="video/mp4"
          ></video>
          <h2 className="title">DEVELOPER</h2>
        </section>
        <p className="subheader">
          Welcome to my world of web development! I've crafted this portfolio to
          showcase my passion for building digital experiences that come to
          life. Take a look around and explore the fusion of design and code,
          where every pixel tells a story.
        </p>
        <Stack
          mt={5}
          spacing={2}
          direction="row"
          justifyContent="center"
          className="btn-mobile"
        >
          <Button
            onClick={handleDownload}
            variant="contained btn-cta"
            fontSize="large"
            endIcon={<DownloadIcon />}
          >
            Download Resume
          </Button>
          <Button
            variant="contained btn-contact"
            size="large"
            href="#contact"
            endIcon={<ChatBubbleOutlineIcon />}
          >
            Let's Talk
          </Button>
        </Stack>
      </div>
    </div>
  );
}

export default Hero;
