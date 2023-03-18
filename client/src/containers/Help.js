import React, { Component } from "react";
import Navbar from "../components/Navbar";
import StaticComponent from "../components/StaticComponent";

class Help extends Component {
	render() {
		return (
			<>
				<Navbar menubuttons={false} />
				<StaticComponent type="help" />
			</>
		);
	}
}

export default Help;
