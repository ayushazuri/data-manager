import axios from "./axios";

const getAboutMe = async () => {
	try {
		const aboutMe = await axios.get("/aboutme");
		// dispatch(aboutme(aboutMe.data));

		return aboutMe.data;
	} catch (error) {
		console.log(error);
	}
};
const getSkill = async () => {
	try {
		const skill = await axios.get("/skill");
		console.log(skill);
	} catch (error) {
		console.log(error);
	}
};
const getProject = async () => {
	try {
		const project = await axios.get("/project");
		console.log(project);
	} catch (error) {
		console.log(error);
	}
};
const getEducation = async () => {
	try {
		const education = await axios.get("/education");
		console.log(education);
	} catch (error) {
		console.log(error);
	}
};
const getExperience = async () => {
	try {
		const experience = await axios.get("/experience");
		console.log(experience);
	} catch (error) {
		console.log(error);
	}
};
const getCertification = async () => {
	try {
		const certification = await axios.get("/certification");
		console.log(certification);
	} catch (error) {
		console.log(error);
	}
};
const getAchievement = async () => {
	try {
		const achievement = await axios.get("/achievement");
		console.log(achievement);
	} catch (error) {
		console.log(error);
	}
};

export {
	getAboutMe,
	getEducation,
	getExperience,
	getProject,
	getSkill,
	getCertification,
	getAchievement,
};
