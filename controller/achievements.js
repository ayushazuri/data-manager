const Achievement = require("../models/achievements");

const getAchievement = async (req, res) => {
	try {
		const achievement = await Achievement.findOne({});
		res.status(200).json(achievement);
	} catch (error) {
		res.status(500).json(error);
	}
};

const createAchievement = async (req, res) => {
	try {
		const achievement = await Achievement.create(req.body);
		res.status(201).json(achievement);
	} catch (error) {
		res.status(500).json(error);
	}
};

module.exports = {
	getAchievement,
	createAchievement,
};
