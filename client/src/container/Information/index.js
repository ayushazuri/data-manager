import "./index.scss";

import InfoCards from "../../components/InfoCards";
import React from "react";

const Information = () => {
	const sections = [
		{ name: "About Me", link: "/aboutme" },
		{ name: "Projects", link: "/project" },
		{ name: "Experience", link: "/experience" },
		{ name: "Skills", link: "/skill" },
		{ name: "Education", link: "/education" },
		{ name: "Certificates", link: "/certification" },
		{ name: "Achievements", link: "/achievement" },
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
