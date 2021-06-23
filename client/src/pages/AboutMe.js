import React from "react";
import Layout from "../Layout/Layout";
import About from "../container/DetailsPage";
import AboutInfo from "../container/AboutInfo";

const AboutMe = () => {
	return (
		<Layout>
			<About name="About Me" />
			<AboutInfo />
		</Layout>
	);
};

export default AboutMe;
