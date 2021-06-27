import "./index.scss";

import React, { useState } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import EducationModal from "../EducationModal";
import { useSelector } from "react-redux";

const EducationCard = ({ education }) => {
	const { branch, id, image, pointer, timeline, location, name } = education;
	const theme = useSelector((state) => state.changeTheme);
	const [show, setShow] = useState(false);
	show ? disableBodyScroll(document) : enableBodyScroll(document);

	return (
		<>
			<Card
				className="education-cards"
				style={{ color: theme.text }}
				onClick={() => setShow(true)}
			>
				<CardActionArea className="education-cards-area">
					<h2>{name}</h2>
					<h4>{branch}</h4>
					<p>{location}</p>
					<div>
						<small>{timeline}</small>
						<small>{pointer}</small>
					</div>
				</CardActionArea>
			</Card>
			{show && (
				<EducationModal
					theme={theme}
					education={education}
					show={show}
					onClose={() => setShow(false)}
				/>
			)}
		</>
	);
};

export default EducationCard;
