import "./index.scss";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "@material-ui/core/Button";
import EducationCard from "../../components/EducationCard";
import EducationModal from "../../components/EducationModal";
import axios from "../../axios";
import dataAction from "../../redux/action/dataAction";
import { withStyles } from "@material-ui/core/styles";

const EducationInfo = () => {
	const dispatch = useDispatch();
	const [data, setData] = useState([]);
	const theme = useSelector((state) => state.changeTheme);
	const [show, setShow] = useState(false);
	const addEducation = true;

	useEffect(() => {
		axios.get("/education").then((req) => {
			setData(req.data);
			dispatch(dataAction("ABOUT_ME", req.data));
		});
	}, [dispatch]);
	const CustomButton = withStyles({
		root: {
			textTransform: "none",
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
		<div className="education">
			{data.map((education) => {
				return <EducationCard key={education.id} education={education} />;
			})}
			<div className="buttons">
				<CustomButton
					variant="contained"
					size="large"
					color="primary"
					className="buttons"
					onClick={() => setShow(true)}
				>
					Add
				</CustomButton>
			</div>
			{show && (
				<EducationModal
					theme={theme}
					addEducation={addEducation}
					show={show}
					length={data.length}
					onClose={() => setShow(false)}
				/>
			)}
		</div>
	);
};

export default EducationInfo;
