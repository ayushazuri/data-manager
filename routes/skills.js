const express = require("express");
const { getSkill, createSkill } = require("../controller/skills");

const router = express.Router();

router.route("/").get(getSkill).post(createSkill);

module.exports = router;
