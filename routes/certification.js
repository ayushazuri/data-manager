const express = require("express");
const {
	getCertificates,
	createCertificates,
} = require("../controller/certifications");

const router = express.Router();

router.route("/").get(getCertificates).post(createCertificates);

module.exports = router;
