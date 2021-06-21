const Experience = require("../models/experience");

const getExperience = async (req, res) => {
	try {
		const experience = await Experience.findOne({});
		res.status(200).json(experience);
	} catch (error) {
		res.status(500).json(error);
	}
};
const createExperience = async (req, res) => {
	try {
		const experience = await Experience.create(req.body);
		res.status(200).json(experience);
	} catch (error) {
		res.status(500).json(error);
	}
};

module.exports = {
	getExperience,
	createExperience,
};
