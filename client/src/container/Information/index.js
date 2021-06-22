import React from "react";
import "./index.scss";
import InfoCards from "../../components/InfoCards";

const Information = () => {
	const sections = [
		"About Me",
		"Projects",
		"Experience",
		"Skills",
		"Education",
		"Certificates",
		"Achievements",
	];
	return (
		<div className="information">
			<h1>Information</h1>
			<div className="information__cards">
				{sections.map((section, index) => {
					return <InfoCards section={section} />;
				})}
			</div>
		</div>
	);
};

export default Information;
