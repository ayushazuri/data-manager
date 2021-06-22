import React from "react";
import IntroductionImg from "./IntroductionImg";
import "./index.scss";
import { Button } from "@material-ui/core";
import { useSelector } from "react-redux";

const Introduction = () => {
	const theme = useSelector((state) => state.changeTheme);

	return (
		<div className="intro">
			<div className="intro__left">
				<h1>Data Manager</h1>
				<p>A place to store all of your information</p>
				<Button variant="contained" color="primary">
					View Source Code
				</Button>
			</div>
			<div className="intro__right">
				<IntroductionImg />
			</div>
		</div>
	);
};

export default Introduction;
