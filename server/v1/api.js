const express = require("express");

const downloadRouter = require("../routes/download/download.router");
const blogRouter = require("../routes/blog/blog.router");
const formRouter = require("../routes/form/form.router");

const api = express.Router();

api.use("/allarticles", blogRouter);
api.use("/send-email", formRouter);
api.use("/download", downloadRouter);

module.exports = api;
