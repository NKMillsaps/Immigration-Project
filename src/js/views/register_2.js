import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export class Register_2 extends React.Component {
	render() {
		return (
			<div className="container">
				<ul className="list-group">
					<Context.Consumer>
						{({ store, actions }) => {
							return store.demo.map((item, index) => {
								return (
									<form key={index}>
										<div className="form-group mx-auto p-2">
											<div className="form-row">
												<div className="col-md mb-3">
													<label htmlFor="inputEmail">Email Address</label>
													<input
														type="email"
														className="form-control"
														name="email"
														id="inputEmail"
														placeholder="email"
														required
													/>
												</div>
											</div>
											<div className="form-row">
												<div className="col-md mb-3">
													<label htmlFor="inputPassword3">Password</label>

													<input
														type="password"
														name="password"
														className="form-control"
														id="inputPassword3"
														placeholder="Password"
													/>
												</div>
											</div>
											<div className="form-row">
												<div className="col-md mb-3">
													<label htmlFor="inputUsername3">Userename</label>

													<input
														type="username"
														name="username"
														className="form-control"
														id="inputUsername3"
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
														id="validationDefault01"
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
														id="validationDefault02"
														placeholder="First name"
														required
													/>
												</div>
											</div>
											<div className="form-row">
												<div className="col-md mb-3">
													<label htmlFor="validationDefault02">
														Middle Name (Patronimic)
													</label>
													<input
														type="text"
														name="middlename"
														className="form-control"
														id="validationDefault02"
														placeholder="Middle name"
														required
													/>
												</div>
											</div>

											<div className="form-row">
												<div className="col-md mb-3">
													<label htmlFor="validationDefault01">Daytime Phone Number</label>
													<input
														type="tel"
														name="dayPhone"
														className="form-control"
														id="validationDefault01"
														placeholder="123-456-7890"
														maxLength="12"
													/>
												</div>
											</div>
											<div className="form-row">
												<div className="col-md mb-3">
													<label htmlFor="validationDefault02">Mobile Phone Number</label>
													<input
														type="tel"
														name="mobile"
														className="form-control"
														id="validationDefault02"
														placeholder="123-456-7890"
														maxLength="12"
													/>
												</div>
											</div>
											<hr />
											<div className="form-group row">
												<div className="input-group mb-3" />
											</div>
											<div className="form-row">
												<div className="col-sm-10">
													<button
														type="submit"
														className="btn btn-primary float-right"
														onClick={() =>
															actions.addPerson(
																document.querySelector("[name=email]").value
															)(document.querySelector("[name=password]").value)(
																document.querySelector("[name=username]").value
															)(document.querySelector("[name=lastname]").value)(
																document.querySelector("[name=firstname]").value
															)(document.querySelector("[name=middlename]").value)(
																document.querySelector("[name=dayPhone]").value
															)(document.querySelector("[name=mobile]").value)
														}>
														Create User
													</button>
												</div>
											</div>
										</div>
									</form>
								);
							});
						}}
					</Context.Consumer>
				</ul>
			</div>
		);
	}
}
// document.querySelector("[name=email]").value,

// 															document.querySelector("[name=lastname]").value,
// 															document.querySelector("[name=firstname]").value,
// 															document.querySelector("[name=lastname]").value,
// 															document.querySelector("[name=US_Address]").value,
// 															document.querySelector("[name=city]").value,

// 															document.querySelector("[name=zip]").value,

// 															document.querySelector("[name=countryOfBirth]").value,
// 															document.querySelector("[name=citizenship]").value,
// 															document.querySelector("[name=mobile]").value
