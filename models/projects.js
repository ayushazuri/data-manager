const mongoose = require("mongoose");

const detailSchema = mongoose.Schema({
	id: Number,
	name: String,
	githubLink: String,
	image: String,
	description: String,
	timeline: String,
	websiteLink: String,
	technologies: Array,
});

const projectSchema = mongoose.Schema({
	description: String,
	limit: String,
	projects: [detailSchema],
});

module.exports = mongoose.model("project", projectSchema);
