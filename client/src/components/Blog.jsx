import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { Button, Grid, Typography } from "@mui/material";
import axios from "axios";
import "../styles/Blog.css";

function Blog() {
  const [data, setData] = useState([]);
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

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "http://3.142.222.125:8000/v1/allarticles"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setData([]); // Set an empty array in case of an error
      }
    }

    fetchData();
  }, []);

  return (
    <section id="blog" ref={sectionRef}>
      <div className="section-header_container">
        <p className="logo-text">
          <span className="color-text">BL</span>OG
        </p>
        <p className="section-subheader">
          Embracing Simplicity: Navigating Complexity with Ease
        </p>
      </div>
      {isVisible && (
        <motion.div
          className="grid_container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <Grid container spacing={5}>
            {data.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <article
                  className="card_item"
                  style={{
                    backgroundColor: "#d2d2d4",
                  }}
                  key={item?.id}
                >
                  <div className="card_item-image">
                    <img className="card_img" src={item?.imgSrc} alt="" />
                  </div>
                  <Typography
                    variant="h5"
                    component="h4"
                    color="#333"
                    sx={{ m: 1 }}
                  >
                    {item?.title}
                  </Typography>
                  <a href={item?.href} target="_blank" rel="noreferrer">
                    <Button
                      variant="contained"
                      className="btn-cta"
                      fontSize="large"
                    >
                      Read More
                    </Button>
                  </a>
                </article>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      )}
    </section>
  );
}

export default Blog;
