import "./index.scss";

import React, { useEffect, useState } from "react";

import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import TextField from "@material-ui/core/TextField";
import { useSelector } from "react-redux";
import { withStyles } from "@material-ui/core/styles";

const AboutInfo = () => {
	const theme = useSelector((state) => state.changeTheme);
	const aboutMeData = useSelector((state) => state.aboutMe);
	console.log("1");
	const [view, setView] = useState(false);
	const [data, setData] = useState({});
	console.log(aboutMeData);

	useEffect(() => {
		setData(aboutMeData);
		console.log("object");
	}, [aboutMeData]);

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

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setData({ ...data, [name]: value });
		console.log(name, value);
		console.log(data.profilePhoto);
	};

	const handleSaveButton = () => {
		console.log(data);
	};

	return (
		<div className="about">
			<form noValidate className="about__form" style={{ color: theme.text }}>
				{/* <input
					accept="image/*"
					id="contained-button-file"
					multiple
					type="file"
					name="profilePhoto"
					value={data.profilePhoto}
					onChange={handleChange}
				/>
				<label htmlFor="contained-button-file">
					<Button variant="contained" color="primary" component="span">
						Upload
					</Button>
				</label> */}
				<CustomTextField
					name="name"
					label="Name"
					value={data.name}
					variant="outlined"
					onChange={(e) => handleChange(e)}
				/>
				<CustomTextField
					name="email"
					label="Email"
					value={data.email}
					variant="outlined"
					onChange={(e) => handleChange(e)}
				/>
				<CustomTextField
					name="phone"
					label="Phone Number"
					value={data.phone}
					variant="outlined"
					onChange={(e) => handleChange(e)}
				/>
				<CustomTextField
					name="address"
					label="Address"
					value={data.address}
					variant="outlined"
					onChange={(e) => handleChange(e)}
				/>
				<CustomTextField
					name="resumeLink"
					label="Resume Link"
					value={data.resumeLink}
					variant="outlined"
					onChange={(e) => handleChange(e)}
				/>
				<CustomTextField
					name="subTitle"
					label="Description"
					value={data.subTitle}
					variant="outlined"
					onChange={(e) => handleChange(e)}
					multiline
				/>
				<CustomTextField
					name="linkedin"
					label="Linkedin Link"
					value={data.linkedin}
					variant="outlined"
					onChange={(e) => handleChange(e)}
				/>
				<CustomTextField
					name="githubLink"
					label="Github Link"
					value={data.githubLink}
					variant="outlined"
					onChange={(e) => handleChange(e)}
				/>

				{view && (
					<CustomTextField
						name="portfolio_repository"
						label="Portfolio Repository Link"
						value={data.portfolio_repository}
						variant="outlined"
						onChange={(e) => handleChange(e)}
					/>
				)}
				{view && (
					<CustomTextField
						name="message"
						label="Message"
						value={data.message}
						variant="outlined"
						onChange={(e) => handleChange(e)}
					/>
				)}
				{view && (
					<RadioGroup
						aria-label="gender"
						name="openForOpportunity"
						value={data.openForOpportunity}
						onChange={handleChange}
						class="about__radio"
					>
						<FormLabel component="legend" style={{ color: theme.text }}>
							Open For Opportunity
						</FormLabel>
						<FormControlLabel
							value="Yes"
							control={<Radio />}
							label="Yes"
							style={{ color: theme.text }}
						/>
						<FormControlLabel
							value="No"
							control={<Radio />}
							label="No"
							style={{ color: theme.text }}
						/>
					</RadioGroup>
				)}

				<div className="about__buttons">
					<CustomButton
						variant="contained"
						size="large"
						color="primary"
						className="buttons"
						onClick={() => setView(!view)}
					>
						View More
					</CustomButton>
					<CustomButton
						variant="contained"
						size="large"
						color="primary"
						className="buttons"
						onClick={() => handleSaveButton}
					>
						Save Changes
					</CustomButton>
				</div>
			</form>
		</div>
	);
};

export default AboutInfo;
