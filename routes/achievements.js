const express = require("express");
const {
	getAchievement,
	createAchievement,
} = require("../controller/achievements");

const router = express.Router();

router.route("/").get(getAchievement).post(createAchievement);

module.exports = router;
