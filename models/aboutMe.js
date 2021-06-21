const mongoose = require("mongoose");

const aboutMeSchema = mongoose.Schema({
	name: String,
	email: String,
	phone: String,
	address: String,
	profilePhoto: String,
	subTitle: String,
	resumeLink: String,
	portfolio_repository: String,
	openForOpportunity: String,
	message: String,
	linkedin: String,
	githubLink: String,
});

module.exports = mongoose.model("aboutme", aboutMeSchema);
