import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar sticky-top navbar-light bg-light mb-3">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">DIY Immigration</span>

					<img
						src="C:\Users\Natalie\Documents\Desktop\Imm_zoom_logo.jpg/"
						alt="Stickman"
						width="24"
						height="39"
					/>
				</Link>
				<div className="ml-auto">
					<Link to="/modalf1">
						<button className="btn btn-primary">Languages</button>
					</Link>
					<Link to="/form">
						<button className="btn btn-primary">Form</button>
					</Link>
					<Link to="/demo">
						<button className="btn btn-primary m-3">Login/Register</button>
					</Link>
				</div>
			</nav>
		);
	}
}
