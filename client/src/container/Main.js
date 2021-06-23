import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "../pages/Home";
import AboutMe from "../pages/AboutMe";
import Achievement from "../pages/Achievements";
import Certficates from "../pages/Certificates";
import Education from "../pages/Education";
import Experience from "../pages/Experience";
import Projects from "../pages/Projects";
import Skill from "../pages/Skills";

const Main = () => {
	return (
		<>
			<Router>
				<Switch>
					<Route exact path="/achievement">
						<Achievement />
					</Route>
					<Route exact path="/certification">
						<Certficates />
					</Route>
					<Route exact path="/education">
						<Education />
					</Route>
					<Route exact path="/experience">
						<Experience />
					</Route>
					<Route exact path="/project">
						<Projects />
					</Route>
					<Route exact path="/skill">
						<Skill />
					</Route>
					<Route exact path="/aboutme">
						<AboutMe />
					</Route>
					<Route exact path="/home">
						<Home />
					</Route>
					<Route exact path="/">
						<Home />
					</Route>
				</Switch>
			</Router>
		</>
	);
};

export default Main;
