const mongoose = require("mongoose");

const detailSchema = mongoose.Schema({
	id: Number,
	name: String,
	style: { color: String, backgroundColor: String },
});
const proficiencySchema = mongoose.Schema({
	id: Number,
	skills: String,
	proficiency: String,
});

const skillSchema = mongoose.Schema({
	description: Array,
	skills: [detailSchema],
	proficiency: [proficiencySchema],
});

module.exports = mongoose.model("skill", skillSchema);
