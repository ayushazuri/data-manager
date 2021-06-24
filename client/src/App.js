import "./App.scss";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Main from "./container/Main";
import axios from "./axios";
import dataAction from "./redux/action/dataAction";

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		axios
			.get("/aboutme")
			.then((req) => dispatch(dataAction("ABOUT_ME", req.data)));
		axios.get("/skill").then((req) => dispatch(dataAction("SKILL", req.data)));
		axios
			.get("/project")
			.then((req) => dispatch(dataAction("PROJECT", req.data)));
		axios
			.get("/education")
			.then((req) => dispatch(dataAction("EDUCATION", req.data)));
		axios
			.get("/certification")
			.then((req) => dispatch(dataAction("CERTIFICATION", req.data)));
		axios
			.get("/experience")
			.then((req) => dispatch(dataAction("EXPERIENCE", req.data)));
		axios
			.get("/achievement")
			.then((req) => dispatch(dataAction("ACHIEVEMENT", req.data)));
	}, [dispatch]);
	const theme = useSelector((state) => state.changeTheme);
	return (
		<div
			className="App"
			style={{ backgroundColor: theme.body, color: theme.text }}
		>
			<Main />
		</div>
	);
}

export default App;
