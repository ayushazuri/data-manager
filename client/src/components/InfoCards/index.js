import React from "react";
import "./index.scss";
import Card from "@material-ui/core/Card";
import { useSelector } from "react-redux";

import CardActionArea from "@material-ui/core/CardActionArea";

const InfoCards = ({ section }) => {
	const theme = useSelector((state) => state.changeTheme);
	return (
		<Card className="info_card">
			<CardActionArea className="info_card__effects">
				<h3 style={{ color: theme.text }}>{section}</h3>
			</CardActionArea>
		</Card>
	);
};

export default InfoCards;
