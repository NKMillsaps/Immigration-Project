import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-light bg-light mb-3">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">DYI Immigration</span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary fa fa-fw fa-user m-3">Login/Register</button>
					</Link>
					<Link to="/options">
						<button className="btn btn-primary">Languages</button>
					</Link>
					<Link to="/form">
						<button className="btn btn-primary">Form</button>
					</Link>
				</div>
			</nav>
		);
	}
}
