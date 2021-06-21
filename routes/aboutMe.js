const express = require("express");
const { getAboutMe, createAboutMe } = require("../controller/aboutMe");

const router = express.Router();

router.route("/").get(getAboutMe).post(createAboutMe);

module.exports = router;
