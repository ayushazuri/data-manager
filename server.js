const express = require("express");
const connectDB = require("./db/connector.js");
require("dotenv").config();
const aboutMe = require("./routes/aboutMe");
const education = require("./routes/education");
const certification = require("./routes/certification");
const competitiveLinks = require("./routes/link");
const achievement = require("./routes/achievements");
const socialLinks = require("./routes/socialLinks");
const experience = require("./routes/experience");
const projects = require("./routes/projects");
const skills = require("./routes/skills");

var morgan = require("morgan");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(morgan("tiny"));
app.use(express.json());
app.use("/api/v1/aboutMe", aboutMe);
app.use("/api/v1/competitiveLink", competitiveLinks);
app.use("/api/v1/education", education);
app.use("/api/v1/certification", certification);
app.use("/api/v1/achievement", achievement);
app.use("/api/v1/socialLink", socialLinks);
app.use("/api/v1/experience", experience);
app.use("/api/v1/project", projects);
app.use("/api/v1/skill", skills);

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URL);
		app.listen(PORT, () => {
			console.log(`Server is listening to ${PORT}`);
		});
	} catch (error) {
		console.log(error);
	}
};
start();
