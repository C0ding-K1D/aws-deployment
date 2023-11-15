import React from "react";
import { Typography, Box } from "@mui/material";
import footerImg from "../assets/newLogo.svg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import medium from "../assets/medium.svg";
import "../styles/Footer.css";

function Footer() {
  return (
    <>
      <div className="cookie-message">
        I use cookies for improved functionality and analytics.{" "}
        <button class="btn--close-cookie">Got it!</button>
      </div>
      <hr />
      <div className="footer">
        <a href="#">
          <img
            src={footerImg}
            alt=""
            style={{
              maxHeight: "90px",
              display: "block",
              margin: "0 auto",
              paddingTop: "3rem",
            }}
          />
        </a>
        <div className="navlogo-text_container">
          <p className="logo-subtext_footer">MATTHEW ALVAREZ</p>
          <p className="logo-text">
            <span className="color-text">DEVELOP</span>ER
          </p>
        </div>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              width: "80%",
              marginTop: "3rem",
              marginBottom: "3rem",
              "& > *": {
                textDecoration: "none",
              },
              "@media (max-width: 768px)": {
                flexDirection: "column",
              },
            }}
          >
            <a href="#about">
              <Typography
                variant="body2"
                component="p"
                color="#333"
                sx={{
                  fontSize: "1.8rem",
                  m: 0.5,
                }}
              >
                About
              </Typography>
            </a>
            <a href="#skills">
              <Typography
                variant="body2"
                component="p"
                color="#333"
                sx={{
                  fontSize: "1.8rem",
                  m: 0.5,
                }}
              >
                Skills
              </Typography>
            </a>
            <a href="#blog">
              <Typography
                variant="body2"
                component="p"
                color="#333"
                sx={{
                  fontSize: "1.8rem",
                  m: 0.5,
                }}
              >
                Blog
              </Typography>
            </a>
            <a href="#projects">
              <Typography
                variant="body2"
                component="p"
                color="#333"
                sx={{
                  fontSize: "1.8rem",
                  m: 0.5,
                }}
              >
                Projects
              </Typography>
            </a>
            <a href="#testimonials">
              <Typography
                variant="body2"
                component="p"
                color="#333"
                sx={{
                  fontSize: "1.8rem",
                  m: 0.5,
                }}
              >
                Testimonials
              </Typography>
            </a>
            <a href="#contact">
              <Typography
                variant="body2"
                component="p"
                color="#333"
                sx={{
                  fontSize: "1.8rem",
                  m: 0.5,
                }}
              >
                Contact
              </Typography>
            </a>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "2.1rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "5rem",
              justifyContent: "space-between",
            }}
          >
            <a
              href="https://medium.com/@Matthew_Alvarez"
              target="_blank"
              rel="noreferrer"
              className="medium-icon_footer"
            >
              <img src={medium} alt="medium icon" />
            </a>
            <a
              href="https://github.com/C0ding-K1D"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon className="footer-icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/matthew-alvarez-778b3a22b/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon className="footer-icon" />
            </a>
          </Box>
        </Box>
        <Typography
          variant="body2"
          component="p"
          sx={{
            color: "#333",
            textAlign: "center",
            p: 3,
            fontSize: "1.5rem",
          }}
        >
          Created by Matthew Alvarez All Rights Reserved Copyright{" "}
          {new Date().getFullYear()}
        </Typography>
      </div>
    </>
  );
}

export default Footer;
