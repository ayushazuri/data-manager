const mongoose = require("mongoose");

const certificateSchema = mongoose.Schema({
	id: Number,
	name: String,
	author: String,
	source: String,
	link: String,
	image: String,
});

module.exports = mongoose.model("certificates", certificateSchema);
