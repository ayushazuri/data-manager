import "./index.scss";

import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import TextField from "@material-ui/core/TextField";
import { useSelector } from "react-redux";

const AboutInfo = () => {
	const theme = useSelector((state) => state.changeTheme);
	const [view, setView] = useState(false);

	const [data, setData] = useState({
		name: "Ayush Singh",
		email: "ayushazuri@gmail.com",
		phone: "+91 9892770647",
		address: "Maple Leaf, Raheja Vihar, Powai, Mumbai, 400072.",
		resumeLink:
			"https://drive.google.com/file/d/1bYDCMPMB4hCKcbRuVN68vyAwplwqU1n0/view?usp=sharing",
		openForOpportunity: "Yes", //
		message:
			"My inbox is open for all. Feel free to reach out to me any time. ", //
		subTitle:
			"A Passionate Software Developer having an experience of building web applications using various technologies along with good programming and Problem-Solving Skills. Interested to learn new technologies with a receptive mind and diligence.",
		portfolio_repository: "https://github.com/ayushazuri/Portfolio-Website", //
		linkedin: "https://www.linkedin.com/in/ayush-singh1998/",
		githubLink: "https://github.com/ayushazuri",
		profilePhoto: "",
	});

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setData({ ...data, [name]: value });
		console.log(name, value);
	};

	const handleSaveButton = () => {
		console.log(data);
	};

	return (
		<div className="about">
			<form
				noValidate
				className="about__form"
				autoComplete="off"
				style={{ color: theme.text }}
			>
				<TextField
					name="name"
					label="Name"
					value={data.name}
					variant="outlined"
					onChange={(e) => handleChange(e)}
				/>
				<TextField
					name="email"
					label="Email"
					value={data.email}
					variant="outlined"
					onChange={(e) => handleChange(e)}
				/>
				<TextField
					name="phone"
					label="Phone Number"
					value={data.phone}
					variant="outlined"
					onChange={(e) => handleChange(e)}
				/>
				<TextField
					name="address"
					label="Address"
					value={data.address}
					variant="outlined"
					onChange={(e) => handleChange(e)}
				/>
				<TextField
					name="resumeLink"
					label="Resume Link"
					value={data.resumeLink}
					variant="outlined"
					onChange={(e) => handleChange(e)}
				/>
				<TextField
					name="subTitle"
					label="Description"
					value={data.subTitle}
					variant="outlined"
					onChange={(e) => handleChange(e)}
					multiline
				/>
				<TextField
					name="linkedin"
					label="Linkedin Link"
					value={data.linkedin}
					variant="outlined"
					onChange={(e) => handleChange(e)}
				/>
				<TextField
					name="githubLink"
					label="Github Link"
					value={data.githubLink}
					variant="outlined"
					onChange={(e) => handleChange(e)}
				/>

				{view && (
					<TextField
						name="portfolio_repository"
						label="Portfolio Repository Link"
						value={data.portfolio_repository}
						variant="outlined"
						onChange={(e) => handleChange(e)}
					/>
				)}
				{view && (
					<TextField
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
						<FormLabel component="legend">Open For Opportunity</FormLabel>
						<FormControlLabel value="Yes" control={<Radio />} label="Yes" />
						<FormControlLabel value="No" control={<Radio />} label="No" />
					</RadioGroup>
				)}

				<div className="about__buttons">
					<Button
						variant="contained"
						size="large"
						color="primary"
						className="buttons"
						onClick={() => setView(!view)}
					>
						View More
					</Button>
					<Button
						variant="contained"
						size="large"
						color="primary"
						className="buttons"
						onClick={() => handleSaveButton}
					>
						Save Changes
					</Button>
				</div>
			</form>
		</div>
	);
};

export default AboutInfo;
