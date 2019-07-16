import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { RegisterMain } from "../views/registerMain.js";
import PropTypes from "prop-types";

import "../../styles/demo.scss";

export class LoginRegister extends React.Component {
	render() {
		return (
			<div className="card bg-light mx-auto ">
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<div className="card text-white text-center bg-primary mb-3">
								<div className="card-body">
									<h4 className="card-title">If you are existing customer please LOG IN</h4>
									<hr />
									<div className="form-group">
										<input
											name="username"
											type="text"
											className="form-control"
											placeholder="Username"
										/>
									</div>

									<div className="form-group">
										<input name="email" type="text" className="form-control" placeholder="Email" />
									</div>

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

				<div className="card text-white bg-primary mb-3">
					<div className="card-body text-center">
						<h4 className="card-title">If you are a new customer please</h4>
						<hr />
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

// <div className="card bg-light mb-3 mx-auto ">
