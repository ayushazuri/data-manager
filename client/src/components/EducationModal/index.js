import "./index.scss";

import React, { useEffect, useState } from "react";

import Button from "@material-ui/core/Button";
import { CSSTransition } from "react-transition-group";
import TextField from "@material-ui/core/TextField";
import axios from "../../axios";
import { useDispatch } from "react-redux";
import { withStyles } from "@material-ui/core/styles";

// import { makeStyles } from "@material-ui/core/styles";

const EducationModal = ({
	addEducation,
	theme,
	show,
	onClose,
	education = {},
	length,
}) => {
	const [data, setData] = useState(education);

	const closeOnEscapeKeyDown = (e) => {
		if ((e.charCode || e.keyCode) === 27) onClose();
	};

	useEffect(() => {
		document.body.addEventListener("keydown", closeOnEscapeKeyDown);
		return function cleanup() {
			document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
		};
	});

	const dispatch = useDispatch();
	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setData({ ...data, [name]: value });
		console.log(name, value);
	};
	const handleSaveChanges = () => {
		console.log(data);
		onClose();
		if (addEducation) {
			axios.post("/education", { ...data, id: length + 1 });
		}
	};

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
		<CSSTransition in={show} unmountOnExit timeout={{ enter: 100, exit: 300 }}>
			<div className={`modal ${show ? "modal__show" : ""}`} onClick={onClose}>
				<div
					className="modal__content"
					style={{ backgroundColor: theme.body }}
					onClick={(e) => e.stopPropagation()}
				>
					<div onClick={onClose}>
						<i className="fas fa-times modal__close" size="lg"></i>
					</div>
					<div
						className="modal__header"
						style={{ backgroundColor: theme.headerColor }}
					>
						<p>Education {data.id}</p>
					</div>
					<div className="modal__body">
						<form
							noValidate
							className="modal__body modal__form"
							style={{ color: theme.text }}
						>
							<CustomTextField
								name="name"
								label="Name"
								value={data.name}
								variant="outlined"
								size="small"
								onChange={(e) => handleChange(e)}
							/>
							<CustomTextField
								name="branch"
								label="Branch"
								value={data.branch}
								variant="outlined"
								size="small"
								onChange={(e) => handleChange(e)}
								// multiline
							/>
							<CustomTextField
								name="location"
								label="Location"
								value={data.location}
								variant="outlined"
								size="small"
								onChange={(e) => handleChange(e)}
							/>
							<CustomTextField
								name="timelime"
								label="Timeline"
								value={data.timeline}
								variant="outlined"
								size="small"
								onChange={(e) => handleChange(e)}
							/>
							<CustomTextField
								name="pointer"
								label="Pointer/Percentage"
								value={data.pointer}
								variant="outlined"
								size="small"
								onChange={(e) => handleChange(e)}
							/>
						</form>
						<div className="buttons">
							<CustomButton
								variant="contained"
								size="large"
								color="primary"
								className="buttons"
								onClick={handleSaveChanges}
							>
								Save changes
							</CustomButton>
						</div>
					</div>
				</div>
			</div>
		</CSSTransition>
	);
};

export default EducationModal;
