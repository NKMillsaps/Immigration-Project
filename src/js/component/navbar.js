import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logozoom2.png";
import "../../styles/navbar.scss";
import { Context } from "../store/appContext";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<Link to="/">
						<img src={logo} />
					</Link>

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
								<div className="tops">
									<ul className="navbar-nav mr-auto">
										<li className="nav-item">
											<a className="nav-link active text-primary" href="##how-it-works">
												Contacts
											</a>
										</li>
										<li className="nav-item">
											<Link className="nav-link text-primary" to="/doctors">
												Doctors
											</Link>
										</li>
										<li className="nav-item">
											<a className="nav-link text-primary" href="#">
												Translation Agencies
											</a>
										</li>
										<li className="nav-item">
											<a className="nav-link text-primary" href="https://www.uscis.gov">
												USCIS{" "}
											</a>
										</li>
										<li className="nav-item dropdown">
											<a
												className="nav-link dropdown-toggle"
												href="#"
												id="navbarDropdown"
												role="button"
												data-toggle="dropdown"
												aria-haspopup="true"
												aria-expanded="false">
												Language
											</a>
											<div className="dropdown-menu" aria-labelledby="navbarDropdown">
												<a className="dropdown-item" href="#">
													Spanish
												</a>
												<a className="dropdown-item" href="#">
													Russian
												</a>
											</div>
										</li>

										<li className="nav-item">
											<a className="nav-link text-primary" href="/docs/4.0/about/overview/">
												About
											</a>
										</li>
										<form className="form-inline my-2 my-lg-0">
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
										</form>
									</ul>
								</div>
							);
						}}
					</Context.Consumer>
				</div>
			</nav>
		);
	}
}
