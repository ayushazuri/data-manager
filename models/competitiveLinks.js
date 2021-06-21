const mongoose = require("mongoose");

const linkSchema = mongoose.Schema({
	id: Number,
	name: String,
	link: String,
	backgroundColor: String,
});

module.exports = mongoose.model("competitiveLinks", linkSchema);
