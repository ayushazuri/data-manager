const AboutMe = require("../models/aboutMe.js");

const getAboutMe = async (req, res) => {
	try {
		const aboutMe = await AboutMe.findOne({});
		res.status(200).json(aboutMe);
	} catch (error) {
		res.status(500).json(error);
	}
};

const createAboutMe = async (req, res) => {
	try {
		const aboutMe = await AboutMe.create(req.body);
		res.status(201).json(aboutMe);
	} catch (error) {
		res.status(500).json(error);
	}
};

module.exports = {
	getAboutMe,
	createAboutMe,
};
