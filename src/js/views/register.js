import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

// import "../../styles/demo.scss";

export class Register extends React.Component {
	render() {
		return (
			<div className="container">
				<ul className="list-group">
					<Context.Consumer>
						{({ store, actions }) => {
							return store.demo.map((item, index) => {
								return (
									<form key={index}>
										<div className="form-group">
											<div className="form-row">
												<div className="col-md mb-3">
													<label htmlFor="validationDefault01">Last Name (Family name)</label>
													<input
														type="text"
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
														className="form-control"
														id="validationDefault01"
														placeholder="123-456-7890"
														maxLength="12"
													/>
												</div>

												<div className="col-md mb-3">
													<label htmlFor="validationDefault02">Mobile Phone Number</label>
													<input
														type="tel"
														className="form-control"
														id="validationDefault02"
														placeholder="123-456-7890"
														maxLength="12"
													/>
												</div>
											</div>
											<div className="form-row">
												<div className="col-md mb-3">
													<label htmlFor="inputEmail">Email Address</label>
													<input
														type="email"
														className="form-control"
														id="inputEmail"
														placeholder="email"
														required
													/>
												</div>
											</div>
											<label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
												{item.title}
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
											<label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
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
											<div className="col-sm-10">
												<button type="submit" className="btn btn-primary">
													Sign in
												</button>
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
