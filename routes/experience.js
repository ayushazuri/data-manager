const express = require("express");
const { getExperience, createExperience } = require("../controller/experience");

const router = express.Router();

router.route("/").get(getExperience).post(createExperience);

module.exports = router;
