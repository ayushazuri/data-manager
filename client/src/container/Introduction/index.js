import "./index.scss";

import { Button } from "@material-ui/core";
import IntroductionImg from "./IntroductionImg";
import React from "react";
import { useSelector } from "react-redux";
import { withStyles } from "@material-ui/core/styles";

const Introduction = () => {
	const theme = useSelector((state) => state.changeTheme);
	const CustomButton = withStyles({
		root: {
			textTransform: "none",
			fontSize: 16,
			backgroundColor: theme.text,
			"&:hover": {
				backgroundColor: theme.text,
				borderColor: theme.text,
			},
			"&:active": {
				backgroundColor: theme.jacketColor,
				borderColor: theme.jacketColor,
			},
		},
	})(Button);
	return (
		<div className="intro">
			<div className="intro__left">
				<h1>Data Manager</h1>
				<p>A place to store all of your information</p>
				<CustomButton
					variant="contained"
					color="primary"
					className="info__button"
				>
					View Source Code
				</CustomButton>
			</div>
			<div className="intro__right">
				<IntroductionImg />
			</div>
		</div>
	);
};

export default Introduction;
