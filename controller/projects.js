const Project = require("../models/projects");

const getProject = async (req, res) => {
	try {
		const project = await Project.findOne({});
		res.status(200).json(project);
	} catch (error) {
		res.status(500).json(error);
	}
};

const createProject = async (req, res) => {
	try {
		const project = await Project.create(req.body);
		res.status(200).json(project);
	} catch (error) {
		res.status(500).json(error);
	}
};

module.exports = {
	getProject,
	createProject,
};
