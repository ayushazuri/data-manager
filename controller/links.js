const Links = require("../models/competitiveLinks");
const socialLinks = require("../models/socialLinks");

const getLinks = async (req, res) => {
	try {
		const links = await Links.find({});
		res.status(200).json(links);
	} catch (error) {
		res.status(500).json(error);
	}
};
const getSocialLinks = async (req, res) => {
	try {
		const links = await socialLinks.find({});
		res.status(200).json(links);
	} catch (error) {
		res.status(500).json(error);
	}
};

const createLinks = async (req, res) => {
	try {
		const links = await Links.create(req.body);
		res.status(201).json(links);
	} catch (error) {
		res.status(500).json(error);
	}
};
const createSocialLinks = async (req, res) => {
	try {
		const links = await socialLinks.create(req.body);
		res.status(201).json(links);
	} catch (error) {
		res.status(500).json(error);
	}
};

module.exports = {
	getLinks,
	createLinks,
	getSocialLinks,
	createSocialLinks,
};
