import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { RegisterMain } from "../views/registerMain.js";
import PropTypes from "prop-types";

import "../../styles/demo.scss";

export class LoginRegister extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="card">
					<div className="card-header text-center text-warning">
						<h4>If you are existing customer please LOG IN</h4>
					</div>

					<Context.Consumer>
						{({ store, actions }) => {
							return (
								<div className="text-center">
									<div className="card-body ">
										<div className="form-group">
											<input
												name="username"
												type="text"
												className="form-control"
												placeholder="Username"
											/>
										</div>

										<div className="form-group">
											<input
												name="email"
												type="text"
												className="form-control"
												placeholder="Email"
											/>
										</div>
									</div>
									<div className="card-footer text-center">
										<button
											onClick={() =>
												actions.loginUser(
													document.querySelector("[name=username]").value,
													document.querySelector("[name=email]").value,
													this.props
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
					<div className="card-header text-center text-warning">
						<h4 className="card-title">If you are a new customer please</h4>
					</div>

					<div className="card-footer text-center">
						<Link to="/register">
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
LoginRegister.propTypes = {
	history: PropTypes.object
};
// actions.addPerson(
// 													document.querySelector("[name=username]").value,
// 													document.querySelector("[name=password]").value
