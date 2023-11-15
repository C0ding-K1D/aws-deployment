const express = require("express");
const path = require("path");
// const {
//   getRecentArticles,
//   handleFormSubmission,
// } = require("./blog.controller");
const downloadRouter = express.Router();

downloadRouter.get("/", (req, res) => {
  const filePath = path.join(__dirname, "..", "..", "myResume.docx");

  res.sendFile(filePath, (err) => {
    if (err) {
      console.error("Error sending the file:", err);

      // Handle specific error cases
      if (err.code === "ENOENT") {
        // File not found
        res.status(404).send("File not found");
      } else {
        // Other errors
        res.status(500).send("Error sending the file");
      }
    }
  });
});

module.exports = downloadRouter;
