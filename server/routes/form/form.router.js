const express = require("express");
const { handleFormSubmission } = require("./form.controller");
const formRouter = express.Router();

formRouter.post("/", handleFormSubmission);

module.exports = formRouter;
