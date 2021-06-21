const mongoose = require("mongoose");

const achievementSchema = mongoose.Schema({
	achievement: Array,
});

module.exports = mongoose.model("achievement", achievementSchema);
