const Education = require("../models/education");

const getEducation = async (req, res) => {
	try {
		const education = await Education.find({});
		res.status(200).json(education);
	} catch (error) {
		res.status(500).json(error);
	}
};

const createEducation = async (req, res) => {
	try {
		const education = await Education.create(req.body);
		res.status(200).json(education);
	} catch (error) {
		res.status(500).json(error);
	}
};

module.exports = {
	getEducation,
	createEducation,
};
