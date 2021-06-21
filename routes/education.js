const express = require("express");
const { getEducation, createEducation } = require("../controller/education");

const router = express.Router();

router.route("/").get(getEducation).post(createEducation);

module.exports = router;
