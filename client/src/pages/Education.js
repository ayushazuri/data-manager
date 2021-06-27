import DetailsPage from "../container/DetailsPage";
import EducationInfo from "../container/EducationInfo";
import Layout from "../Layout/Layout";
import React from "react";

const Education = () => {
	return (
		<Layout>
			<DetailsPage name="Education" />
			<EducationInfo />
		</Layout>
	);
};
export default Education;
