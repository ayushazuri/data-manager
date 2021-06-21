const express = require("express");
const { getSocialLinks, createSocialLinks } = require("../controller/links");

const router = express.Router();

router.route("/").get(getSocialLinks).post(createSocialLinks);

module.exports = router;
