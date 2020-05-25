import React, { Component } from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Company from "../pages/company/Company";
import Internship from "../pages/internship/Internship";
import Vacancy from "../pages/vacancy/Vacancy";

export default class Main extends Component {
	render() {
		return (
			<div>
				<HashRouter basename="/home">
					<Switch>
						<Route path="/home" component={Home} />
						<Route path="/company" component={Company} />
						<Route path="/internship" component={Internship} />
						<Route path="/vacancy" component={Vacancy} />

					</Switch>
				</HashRouter>
			</div>
		);
	}
}
