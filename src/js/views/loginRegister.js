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
									<div className="form-group row">
										<label htmlFor="inputEmail3" className="col-sm-3 col-form-label">
											Email
										</label>
										<div className="col-sm-10">
											<input
												type="email"
												className="form-control"
												id="inputEmail3"
												placeholder="Email"
											/>
										</div>
									</div>
									<div className="form-group row">
										<label htmlFor="inputPassword3" className="col-sm-3 col-form-label">
											Password
										</label>
										<div className="col-sm-10">
											<input
												type="password"
												className="form-control"
												id="inputPassword3"
												placeholder="Password"
											/>
										</div>
									</div>
									<div className="form-group row">
										<div className="col-sm-10 ">
											<button type="submit" className="btn btn-primary">
												Log in
											</button>
											<Context.Consumer>
												{({ store, actions }) => {
													return (
														<div>
															<div className="input-group mb-3">
																<input
																	name="LoginRegister"
																	type="text"
																	className="form-control"
																	placeholder="Recipient's username"
																	aria-label="Recipient's username"
																	aria-describedby="button-addon2"
																/>
															</div>
															<button
																onClick={() =>
																	actions.addPerson(
																		document.querySelector("[name=person]").value
																	)
																}
																className="btn btn-secondary">
																{" "}
																Add task
															</button>
														</div>
													);
												}}
											</Context.Consumer>
										</div>
									</div>
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

				<br />
			</div>
		);
	}
}
