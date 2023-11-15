import React, { useState } from "react";
import { Box, Button, Typography, TextField } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CallIcon from "@mui/icons-material/Call";
import "../styles/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "I Look Forward To Hearing From You",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://18.188.98.51/v1/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Email sent successfully");
      } else {
        alert("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("An error occurred while sending the email");
    }
  };

  return (
    <section id="contact">
      <div className="section-header_container">
        <p className="logo-text">
          <span className="color-text">CONTA</span>CT
        </p>
        <p className="section-subheader">Get in Touch: Reach Out to Me</p>
      </div>
      <div className="contact_container">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            // marginRight: "-14rem",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: "100%",
              height: "100%",
            },
            "@media (max-width: 1000px)": {
              flexDirection: "row",
              marginBottom: "1rem",
            },
            "@media (max-width: 500px)": {
              flexDirection: "column",
            },
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="circle">
              <a href="mailto:mattalvarez354@yahoo.com">
                <EmailIcon fontSize="large" className="contact-icon" />
              </a>
            </div>
            <p className="contact-icon-text">
              <span className="color-text">EMA</span>IL
            </p>
            <Typography
              variant="h6"
              component="h6"
              sx={{
                textAlign: "center",
                fontWeight: "700",
              }}
            >
              Leave a message
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="circle">
              <a href="tel:+15162522329">
                <CallIcon fontSize="large" className="contact-icon" />
              </a>
            </div>
            <p className="contact-icon-text">
              <span className="color-text">PHO</span>NE
            </p>
            <Typography
              variant="h6"
              component="h6"
              sx={{
                textAlign: "center",
                fontWeight: "700",
              }}
            >
              Leave a message
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="circle">
              <a
                href="https://www.linkedin.com/in/matthew-alvarez-778b3a22b/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon fontSize="large" className="contact-icon" />
              </a>
            </div>
            <p className="contact-icon-text">
              <span className="color-text">LINKED</span>IN
            </p>
            <Typography
              variant="h6"
              component="h6"
              sx={{
                textAlign: "center",
                fontWeight: "700",
              }}
            >
              Leave a message
            </Typography>
          </div>
        </Box>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": {
              m: 1,
              width: "120ch",
              "@media (max-width: 768px)": {
                width: "75ch",
                "@media (max-width: 500px)": {
                  width: "50ch",
                },
              },
            },
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <TextField
              id="name"
              name="name"
              label="Name"
              variant="filled"
              value={formData.name}
              onChange={handleChange}
            />
            <TextField
              id="email"
              name="email"
              label="E-mail"
              placeholder="email@gmail.com"
              variant="filled"
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              id="message"
              name="message"
              label="Message"
              multiline
              rows={8}
              variant="filled"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <Button
            type="submit"
            variant="contained"
            size="large"
            className="btn-cta form-btn"
          >
            Send Message
          </Button>
        </Box>
      </div>
    </section>
  );
}

export default Contact;
