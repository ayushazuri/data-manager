import React from "react";
import Introduction from "../container/Introduction";
import Information from "../container/Information";
import Layout from "../Layout/Layout";

const Home = () => {
	return (
		<Layout>
			<Introduction />
			<Information />
		</Layout>
	);
};

export default Home;
