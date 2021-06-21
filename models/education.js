const mongoose = require("mongoose");

const educationSchema = mongoose.Schema({
	name: String,
	id: Number,
	timeline: String,
	pointer: String,
	branch: String,
	location: String,
	image: String,
});

module.exports = mongoose.model("education", educationSchema);
