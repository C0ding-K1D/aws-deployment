const express = require("express");
const path = require("path");
const { getRecentArticles } = require("./blog.controller");
const blogRouter = express.Router();

blogRouter.get("/", getRecentArticles);

module.exports = blogRouter;
