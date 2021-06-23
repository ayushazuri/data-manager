import "./index.scss";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import { NavLink } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";

const InfoCards = ({ section }) => {
	const theme = useSelector((state) => state.changeTheme);
	return (
		<NavLink to={section.link}>
			<Card className="info_card">
				<CardActionArea className="info_card__effects">
					<h3 style={{ color: theme.text }}>{section.name}</h3>
				</CardActionArea>
			</Card>
		</NavLink>
	);
};

export default InfoCards;
