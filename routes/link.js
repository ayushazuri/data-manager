const express = require("express");
const { getLinks, createLinks } = require("../controller/links");

const router = express.Router();

router.route("/").get(getLinks).post(createLinks);

module.exports = router;
