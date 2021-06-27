import "./index.scss";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import TextField from "@material-ui/core/TextField";
import axios from "../../axios";
import dataAction from "../../redux/action/dataAction";
import { withStyles } from "@material-ui/core/styles";

const AchievementInfo = () => {
	const dispatch = useDispatch();
	const theme = useSelector((state) => state.changeTheme);
	const [data, setData] = useState([]);

	useEffect(() => {
		axios.get("/achievement").then((req) => {
			setData(req.data.achievement);
			dispatch(dataAction("ACHIEVEMENT", req.data.achievement));
		});
	}, [dispatch]);

	const CustomTextField = withStyles({
		root: {
			"& label.Mui-focused": {
				color: theme.text,
			},
			"& .MuiInput-underline:after": {
				borderBottomColor: theme.text,
			},
			"& .MuiOutlinedInput-root": {
				"&.Mui-focused fieldset": {
					borderColor: "green",
				},
			},
			"& .MuiInputBase-input": {
				color: theme.text,
			},
		},
	})(TextField);

	const handleChange = (e) => {};

	return (
		<div>
			{data.map((achievement) => {
				return <p>{achievement}</p>;
			})}
		</div>
	);
};

export default AchievementInfo;
