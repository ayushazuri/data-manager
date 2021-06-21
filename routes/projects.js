const express = require("express");
const { getProject, createProject } = require("../controller/projects");

const router = express.Router();

router.route("/").get(getProject).post(createProject);

module.exports = router;
