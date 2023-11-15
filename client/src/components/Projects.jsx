import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { Button, Grid, Typography } from "@mui/material";
import everythingCookies from "../assets/everythingCookies.jpg";
import expenseBuddy from "../assets/expenseBuddy.jpg";
import forkify from "../assets/forkify.jpg";
import "../styles/Projects.css";

function Projects() {
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
    <section id="projects" ref={sectionRef}>
      <div className="section-header_container">
        <p className="logo-text">
          <span className="color-text">PROJEC</span>TS
        </p>
        <p className="section-subheader">My Portfolio: Explore My Work</p>
      </div>
      {isVisible && (
        <motion.div
          className="project-card_container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6} md={4}>
              <article
                className="portfolio_item"
                style={{
                  backgroundColor: "#d2d2d4",
                }}
              >
                <div className="portfolio_item-image">
                  <img
                    className="portfolio_img"
                    src={everythingCookies}
                    alt=""
                  />
                </div>
                <Typography
                  variant="h4"
                  component="h4"
                  sx={{
                    marginTop: "-1rem",
                    marginBottom: "2rem",
                    textAlign: "center",
                  }}
                  color="#333"
                >
                  E-Comm Store
                </Typography>
                <Button
                  href="https://github.com/C0ding-K1D/everything-cookies-"
                  target="_blank"
                  variant="contained"
                  className="btn-contact"
                  fontSize="large"
                  sx={{ mr: 1 }}
                >
                  Github
                </Button>
                <Button
                  href="https://celadon-melomakarona-8d53df.netlify.app/"
                  target="_blank"
                  variant="contained"
                  className="btn-cta"
                  fontSize="large"
                >
                  Demo
                </Button>
              </article>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <article
                className="portfolio_item"
                style={{
                  backgroundColor: "#d2d2d4",
                }}
              >
                <div className="portfolio_item-image">
                  <img className="portfolio_img" src={expenseBuddy} alt="" />
                </div>
                <Typography
                  variant="h4"
                  component="h4"
                  color="#333"
                  sx={{
                    marginTop: "-1rem",
                    marginBottom: "2rem",
                    textAlign: "center",
                  }}
                >
                  Expense Tracker
                </Typography>
                <Button
                  variant="contained"
                  className="btn-contact"
                  fontSize="large"
                  sx={{ mr: 1 }}
                >
                  Github
                </Button>
                <Button
                  href="https://preeminent-brigadeiros-8c5419.netlify.app"
                  target="_blank"
                  variant="contained"
                  className="btn-cta"
                  fontSize="large"
                >
                  Demo
                </Button>
              </article>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <article
                className="portfolio_item"
                style={{
                  backgroundColor: "#d2d2d4",
                }}
              >
                <div className="portfolio_item-image">
                  <img src={forkify} alt="" className="portfolio_img" />
                </div>
                <Typography
                  variant="h4"
                  component="h4"
                  color="#333"
                  sx={{
                    marginTop: "-1rem",
                    marginBottom: "2rem",
                    textAlign: "center",
                  }}
                >
                  Recipe App
                </Typography>
                <Button
                  href="https://github.com/C0ding-K1D/forkify-recipes"
                  target="_blank"
                  variant="contained"
                  className="btn-contact"
                  fontSize="large"
                  sx={{ mr: 1 }}
                >
                  Github
                </Button>
                <Button
                  href="https://forkifytherecipeapp.netlify.app"
                  target="_blank"
                  variant="contained"
                  className="btn-cta"
                  fontSize="large"
                >
                  Demo
                </Button>
              </article>
            </Grid>
          </Grid>
        </motion.div>
      )}
    </section>
  );
}

export default Projects;
