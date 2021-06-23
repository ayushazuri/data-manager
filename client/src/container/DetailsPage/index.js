import React from "react";
import "./index.scss";
import AboutImg from "./AboutImg";
import AchievementImg from "./AchievementImg";
import CertificateImg from "./CertificateImg";
import EducationImg from "./EducationImg";
import ExperienceImg from "./ExperienceImg";
import ProjectImg from "./ProjectImg";
import SkillImg from "./SkillImg";

const getImage = (name) => {
	switch (name) {
		case "About Me":
			return <AboutImg />;
		case "Achievements":
			return <AchievementImg />;
		case "Certficates":
			return <CertificateImg />;
		case "Education":
			return <EducationImg />;
		case "Experience":
			return <ExperienceImg />;
		case "Projects":
			return <ProjectImg />;
		case "Skills":
			return <SkillImg />;
		default:
			return <AboutImg />;
	}
};

const DetailsPage = ({ name }) => {
	return (
		<div className="intropage">
			<div className="intropage__left">{getImage(name)}</div>
			<div className="intropage__right">
				<h1>{name}</h1>
			</div>
		</div>
	);
};

export default DetailsPage;
