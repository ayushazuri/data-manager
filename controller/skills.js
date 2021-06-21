const Skill = require("../models/skills");

const getSkill = async (req, res) => {
	try {
		const skill = await Skill.findOne({});
		res.status(200).json(skill);
	} catch (error) {
		res.status(500).json(error);
	}
};

const createSkill = async (req, res) => {
	try {
		const skill = await Skill.create(req.body);
		res.status(200).json(skill);
	} catch (error) {
		res.status(500).json(error);
	}
};

module.exports = {
	getSkill,
	createSkill,
};
