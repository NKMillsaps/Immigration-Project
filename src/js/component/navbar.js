import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logozoom2.png";
import "../../styles/navbar.scss";
import { Context } from "../store/appContext";

export class Navbar extends React.Component {
	render() {
		return (
			<div className="navbar sticky-top text-white navbar-expand-lg navbar-dark bg-primary">
				<a className="navbar-brand" href="#">
					<Link to="/">
						<img src={logo} />
					</Link>
				</a>
				<div className="float-right">
					<ul className="navbar-nav">
						<li className="nav-item active">
							<a className="nav-link active" href="##how-it-works">
								Contacts
							</a>
						</li>
						<li className="nav-item active">
							<Link className="nav-link" to="/doctors">
								Doctors
							</Link>
						</li>
						<li className="nav-item active">
							<a className="nav-link" href="#">
								Translation Agencies
							</a>
						</li>
						<li className="nav-item active">
							<a className="nav-link" href="https://www.uscis.gov">
								USCIS{" "}
							</a>
						</li>
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								data-toggle="dropdown"
								href="#"
								role="button"
								aria-haspopup="true"
								aria-expanded="false">
								Language
							</a>
							<div className="dropdown-menu" x-placement="bottom-start">
								<a className="dropdown-item" href="#">
									Spanish
								</a>
								<a className="dropdown-item" href="#">
									Russian
								</a>
							</div>
						</li>

						<li className="nav-item active">
							<a className="nav-link" href="/docs/4.0/about/overview/">
								About
							</a>
						</li>
					</ul>
				</div>
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<ul className="navbar-nav ml-auto float-right">
								<form className="form-inline ">
									{!store.token ? (
										<Link to="/loginRegister">
											<button className="btn btn-secondary text-dark m-3">Login/Register</button>
										</Link>
									) : (
										<Link to="/loginRegister">
											<button
												className="btn btn-secondary m-3"
												onClick={() => actions.logoutUser()}>
												Logout
											</button>
										</Link>
									)}
								</form>
							</ul>
						);
					}}
				</Context.Consumer>
			</div>
		);
	}
}
