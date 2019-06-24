import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import { Register_2 } from "../views/register_2.js";

import "../../styles/demo.scss";

export class LoginRegister extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="card-deck">
					<div className="card">
						<div className="card-body">
							<h6 className="card-title">
								<u>If you are existing customer please LOG IN</u>
							</h6>
							<p className="card-text">
								<ul className="list-group">
									<Context.Consumer>
										{({ store, actions }) => {
											return (
												<div>
													<div className="form-group row">
														<label
															htmlFor="inputEmail3"
															className="col-sm-3 col-form-label">
															Username
														</label>
														<div className="col-sm-10">
															<input
																name="username"
																type="username"
																className="form-control"
																id="inputEmail3"
																placeholder="Username"
															/>
														</div>
													</div>
													<div className="form-group row">
														<label
															htmlFor="inputPassword3"
															className="col-sm-3 col-form-label">
															Password
														</label>
														<div className="col-sm-10">
															<input
																name="password"
																type="password"
																className="form-control"
																id="inputPassword3"
																placeholder="Password"
															/>
														</div>
													</div>
													<div className="form-group row">
														<div className="input-group mb-3">
															<button
																onClick={() =>
																	actions.addPerson(
																		document.querySelector("[name=username]").value
																	)(document.querySelector("[name=password]").value)
																}
																className="btn btn-secondary">
																{" "}
																Log in
															</button>
														</div>
													</div>
												</div>
											);
										}}
									</Context.Consumer>
								</ul>
							</p>
						</div>
					</div>

					<div className="card">
						<div className="card-body">
							<h6 className="card-title">
								<u>If you are new customer please REGISTER</u>
							</h6>

							<Link to="/Register_2">
								<button id="button1" className="btn btn-primary">
									Registration
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
