import "./index.scss";

import React, { useState } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CertificateModal from "./CertificateModal";
import { useSelector } from "react-redux";

const CertificateCard = ({ certificate }) => {
	const { name, author, image, link, source } = certificate;
	const theme = useSelector((state) => state.changeTheme);
	const [show, setShow] = useState(false);
	show ? disableBodyScroll(document) : enableBodyScroll(document);

	return (
		<>
			<Card
				className="certification-card"
				style={{ color: theme.text }}
				onClick={() => setShow(true)}
			>
				<CardActionArea className="certification-card__area">
					<h1>{name}</h1>
					<h3>{author}</h3>
					<p>{source}</p>
				</CardActionArea>
			</Card>
			{show && (
				<CertificateModal
					theme={theme}
					certificate={certificate}
					show={show}
					onClose={() => setShow(false)}
				/>
			)}
		</>
	);
};

export default CertificateCard;
