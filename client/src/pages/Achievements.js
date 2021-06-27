import AchievementInfo from "../container/AchievementInfo";
import DetailsPage from "../container/DetailsPage";
import Layout from "../Layout/Layout";
import React from "react";

const Achievements = () => {
	return (
		<Layout>
			<DetailsPage name="Achievements" />
			<AchievementInfo />
		</Layout>
	);
};

export default Achievements;
