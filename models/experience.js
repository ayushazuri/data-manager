const mongoose = require("mongoose");

const workSchema = mongoose.Schema({
	id: Number,
	name: String,
	role: String,
	image: String,
	tasks: Array,
	link: String,
	timeline: String,
	location: String,
	technologies: Array,
});

const experienceSchema = mongoose.Schema({
	descriptions: Array,
	works: [workSchema],
	internships: [workSchema],
});

module.exports = mongoose.model("experience", experienceSchema);
