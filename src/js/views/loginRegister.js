import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import { Register_2 } from "../views/register_2.js";

import "../../styles/demo.scss";

export class LoginRegister extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="card">
					<div className="card-header text-center">
						<h4>If you are existing customer please LOG IN</h4>
					</div>

					<Context.Consumer>
						{({ store, actions }) => {
							return (
								<div className="text-center">
									<div className="card-body">
										<div className="form-group">
											<input
												name="username"
												type="username"
												className="form-control"
												id="inputUsername3"
												placeholder="Username"
											/>
										</div>

										<div className="form-group">
											<input
												name="password"
												type="password"
												className="form-control"
												id="inputPassword3"
												placeholder="Password"
											/>
										</div>
									</div>
									<div className="card-footer text-center">
										<button
											onClick={() =>
												actions.addPerson(document.querySelector("[name=username]").value)(
													document.querySelector("[name=password]").value
												)
											}
											className="btn btn-primary">
											{" "}
											LOG IN
										</button>
									</div>
								</div>
							);
						}}
					</Context.Consumer>
				</div>
				<div className="card text-center">
					{" "}
					<h4> OR</h4>
				</div>

				<div className="card">
					<div className="card-header text-center">
						<h4 className="card-title">If you are a new customer please</h4>
					</div>

					<div className="card-footer text-center">
						<Link to="/Register_2">
							<button id="button1" className="btn btn-primary">
								REGISTER
							</button>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}
