import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export class SpouseForm extends React.Component {
	render() {
		return (
			<div className="container">
				<Context.Consumer>
					{({ actions }) => {
						return (
							<React.Fragment>
								<div className="form-group mx-auto p-2">
									<div className="card-header text-center">
										<h4>Spouse Information</h4>
									</div>
									<div className="form-row">
										<div className="col-md mb-3">
											<label htmlFor="inputEmail">Spouse Email Address</label>
											<input
												type="text"
												className="form-control"
												name="spouseEmail"
												placeholder="Email"

											/>
										</div>
									</div>

									<div className="form-row">
										<div className="col-md mb-3">
											<label htmlFor="validationDefault01">Spouse Last Name (Family name)</label>
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
											<label htmlFor="validationDefault02">Spouse First Name</label>
											<input
												type="text"
												name="firstname"
												className="form-control"
												placeholder="First name"
											/>
										</div>
									</div>
									<div className="form-row">
										<div className="col-md mb-3">
											<label htmlFor="validationDefault02">Spouse Middle Name (Patronimic)</label>
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
											<label htmlFor="validationDefault01">Spouse Daytime Phone Number</label>
											<input
												type="text"
												name="dayPhone"
												className="form-control"
												placeholder="123-456-7890"
												maxLength="12"
											/>
										</div>
									</div>
									<div className="form-row">
										<div className="col-md mb-3">
											<label htmlFor="validationDefault02">Spouse Mobile Phone Number</label>
											<input
												type="text"
												name="mobile"
												className="form-control"
												placeholder="123-456-7890"
												maxLength="12"
											/>
										</div>
									</div>

									<div className="form-row">
										<Link to="/">
											<button className="btn btn-primary float-left mx-auto p-2">Back</button>
										</Link>
										<div className="text-right">
											<button
												className="btn btn-primary text-right mx-auto p-2"
												onClick={() =>
													actions.addSpouse(
														document.querySelector("[name=spouseEmail]").value,

														this.props
													)
												}>
												Submit
											</button>
										</div>
									</div>
								</div>
							</React.Fragment>
						);
					}}
				</Context.Consumer>
			</div>
		);
		SpouseForm.propTypes = {
			match: PropTypes.object
		};


// {defaultValue={user.spouse[0].spouseEmail}










// // 	document.querySelector("[name=spouseLastname]").value,
// // 												document.querySelector("[name=spouseFirstname]").value,
// // 												document.querySelector("[name=spouseMiddlename]").value,
// // 												document.querySelector("[name=spouseDayPhone]").value,
// // 												document.querySelector("[name=spouseMobile]").value,

// // document.querySelector("[name=email]").value,

// // 															document.querySelector("[name=lastname]").value,
// // 															document.querySelector("[name=firstname]").value,
// // 															document.querySelector("[name=lastname]").value,
// // 															document.querySelector("[name=US_Address]").value,
// // 															document.querySelector("[name=city]").value,

// // 															document.querySelector("[name=zip]").value,

// // 															document.querySelector("[name=countryOfBirth]").value,
// // 															document.querySelector("[name=citizenship]").value,
// // 															document.querySelector("[name=mobile]").value onClick={() =>
// // 	actions.addPerson(
// // document.querySelector("[name=email]").value,
// // document.querySelector("[name=password]").value,
// // document.querySelector("[name=username]").value,
// // document.querySelector("[name=lastname]").value,
// // document.querySelector("[name=firstname]").value,
// // document.querySelector("[name=middlename]").value,
// // document.querySelector("[name=dayPhone]").value,
// // document.querySelector("[name=mobile]").value
// // 	)
// // }

// // onCLick={() =>
// // 												actions.registerPerson(
// // document.querySelector("[name=username]").value,
// // document.querySelector("[name=email]").value,
// // document.querySelector("[name=lastname]").value,
// // document.querySelector("[name=firstname]").value,
// // document.querySelector("[name=middlename]").value,
// // document.querySelector("[name=dayPhone]").value,
// // document.querySelector("[name=mobile]").value
// // 												)
// // 											}

// // <button className="btn btn-primary mx-auto p-2" onCLick={() => actions.tryMethod()}>
// // 									Create User
// // 								</button>

// <div className="form-row">
// <button
// className="btn btn-primary mx-auto p-2"
// onCLick={() => actions.tryMethod()}>
// Create User
// </button>
// </div>
// </div>

