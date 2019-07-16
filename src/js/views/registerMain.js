import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export class RegisterMain extends React.Component {
	render() {
		return (
			<div className="container ">
				<Context.Consumer>
					{({ actions }) => {
						return (
							<React.Fragment>
								<div className="form-group text-white bg-dark mx-auto p-2">
									<div className="card-header text-white text-center">
										<h4 className="card-title text-white">Registration Form</h4>
									</div>
									<div className="form-row">
										<div className="col-md mb-3">
											<label htmlFor="inputEmail">Email Address</label>
											<input
												type="text"
												className="form-control"
												name="email"
												placeholder="Email"
											/>
										</div>
									</div>

									<div className="form-row">
										<div className="col-md mb-3">
											<label htmlFor="inputUsername3">Username</label>

											<input
												type="text"
												name="username"
												className="form-control"
												placeholder="Username"
											/>
										</div>
									</div>

									<div className="form-row">
										<div className="col-md mb-3">
											<label htmlFor="validationDefault01">Last Name (Family name)</label>
											<input
												type="text"
												name="lastname"
												className="form-control"
												placeholder="Last name"
											/>
										</div>
									</div>

									<div className="form-row">
										<div className="col-md mb-3">
											<label htmlFor="validationDefault02">First Name</label>
											<input
												type="text"
												name="firstname"
												className="form-control"
												placeholder="First name"
											/>
										</div>
										<div className="col-md mb-3">
											<label htmlFor="validationDefault02">Middle Name (Patronimic)</label>
											<input
												type="text"
												name="middlename"
												className="form-control"
												placeholder="Middle name"
											/>
										</div>
									</div>

									<div className="form-row">
										<div className="col-md mb-3">
											<label htmlFor="validationDefault01">Daytime Phone Number</label>
											<input
												type="text"
												name="dayPhone"
												className="form-control"
												placeholder="123-456-7890"
												maxLength="12"
											/>
										</div>
										<div className="col-md mb-3">
											<label htmlFor="validationDefault02">Mobile Phone Number</label>
											<input
												type="text"
												name="mobile"
												className="form-control"
												placeholder="123-456-7890"
												maxLength="12"
											/>
										</div>
									</div>
									<hr />
									<div className="form-row">
										<button
											onClick={() =>
												actions.registerPerson(
													document.querySelector("[name=email]").value,
													document.querySelector("[name=username]").value,
													document.querySelector("[name=lastname]").value,
													document.querySelector("[name=firstname]").value,
													document.querySelector("[name=middlename]").value,
													document.querySelector("[name=dayPhone]").value,
													document.querySelector("[name=mobile]").value,
													this.props
												)
											}
											className="btn btn-secondary mx-auto p-2">
											Create User
										</button>
									</div>
								</div>
							</React.Fragment>
						);
					}}
				</Context.Consumer>
			</div>
		);
	}
}
RegisterMain.propTypes = {
	history: PropTypes.object
};
// document.querySelector("[name=email]").value,

// 															document.querySelector("[name=lastname]").value,
// 															document.querySelector("[name=firstname]").value,
// 															document.querySelector("[name=lastname]").value,
// 															document.querySelector("[name=US_Address]").value,
// 															document.querySelector("[name=city]").value,

// 															document.querySelector("[name=zip]").value,

// 															document.querySelector("[name=countryOfBirth]").value,
// 															document.querySelector("[name=citizenship]").value,
// 															document.querySelector("[name=mobile]").value onClick={() =>
// 	actions.addPerson(
// 		document.querySelector("[name=email]").value,
// 		document.querySelector("[name=password]").value,
// 		document.querySelector("[name=username]").value,
// 		document.querySelector("[name=lastname]").value,
// 		document.querySelector("[name=firstname]").value,
// 		document.querySelector("[name=middlename]").value,
// 		document.querySelector("[name=dayPhone]").value,
// 		document.querySelector("[name=mobile]").value
// 	)
// }

// onCLick={() =>
// 												actions.registerPerson(
// document.querySelector("[name=username]").value,
// document.querySelector("[name=email]").value,
// document.querySelector("[name=lastname]").value,
// document.querySelector("[name=firstname]").value,
// document.querySelector("[name=middlename]").value,
// document.querySelector("[name=dayPhone]").value,
// document.querySelector("[name=mobile]").value
// 												)
// 											}

// <button className="btn btn-primary mx-auto p-2" onCLick={() => actions.tryMethod()}>
// 									Create User
// 								</button>

// <div className="form-row">
// 										<button
// 											className="btn btn-primary mx-auto p-2"
// 											onCLick={() => actions.tryMethod()}>
// 											Create User
// 										</button>
// 									</div>
// 								</div>
