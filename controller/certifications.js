const Certificates = require("../models/certifications.js");

const getCertificates = async (req, res) => {
	try {
		const certificate = await Certificates.find({});
		res.status(200).json(certificate);
	} catch (error) {
		res.status(500).json(error);
	}
};

const createCertificates = async (req, res) => {
	try {
		const certificate = await Certificates.create(req.body);
		res.status(200).json(certificate);
	} catch (error) {
		res.status(500).json(error);
	}
};

module.exports = {
	getCertificates,
	createCertificates,
};
