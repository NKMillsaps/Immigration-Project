import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logozoom2.png";
import "../../styles/navbar.scss";
import { Context } from "../store/appContext";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar sticky-top mb-1 navbar-dark bg-dark">
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
					<Context.Consumer>
						{({ store, actions }) => {
							return (
								<div>
									{!store.token ? (
										<Link to="/loginRegister">
											<button className="btn btn-primary m-3">Login/Register</button>
										</Link>
									) : (
										<Link to="/loginRegister">
											<button
												className="btn btn-primary m-3"
												onClick={() => actions.logoutUser()}>
												Logout
											</button>
										</Link>
									)}
								</div>
							);
						}}
					</Context.Consumer>

					<ul className="nav bd-sidenav">
						<li className="nav-item">
							<a className="nav-link active" href="##how-it-works">
								Contacts
							</a>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/doctors">
								Doctors
							</Link>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Translation Agencies
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Spanish{" "}
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Russian{" "}
							</a>
						</li>

						<li className="nav-item">
							<a className="nav-link" href="https://www.uscis.gov">
								USCIS{" "}
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/docs/4.0/about/overview/">
								About
							</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}
