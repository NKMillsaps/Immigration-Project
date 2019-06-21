import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logozoom2.png";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar sticky-top navbar-light bg-light mb-3">
				<Link to="/">
					<img src={logo} />
				</Link>

				<div className="ml-auto">
					{/*<Link to="/modalf1">
						<select className="custom-select">
							<option selected>Languages</option>
							<option value={1}>Spanish</option>
							<option value={2}>Russian</option>
						</select>
					</Link>*/}

					<Link to="/loginRegister">
						<button className="btn btn-primary m-3">Login/Register</button>
					</Link>
				</div>
			</nav>
		);
	}
}
