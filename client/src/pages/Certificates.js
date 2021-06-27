import CertificationInfo from "../container/CertificationInfo";
import DetailsPage from "../container/DetailsPage";
import Layout from "../Layout/Layout";
import React from "react";

const Certificates = () => {
	return (
		<Layout>
			<DetailsPage name="Certficates" />
			<CertificationInfo />
		</Layout>
	);
};

export default Certificates;
