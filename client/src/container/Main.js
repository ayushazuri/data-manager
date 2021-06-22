import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "../pages/Home";

const Main = () => {
	return (
		<div>
			<Router>
				<Switch>
					<Route exact path="/home">
						<Home />
					</Route>
					<Route exact path="/">
						<Home />
					</Route>
				</Switch>
			</Router>
		</div>
	);
};

export default Main;