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
										<div className="form-group">
											<div className="form-row">
												<div className="col-md-7 mb-3">
													<label htmlFor="inputEmail">Email Address</label>
													<input
														type="email"
														className="form-control"
														id="inputEmail"
														placeholder="email"
														required
													/>
												</div>

												<div className="col-md mb-3">
													<label htmlFor="inputPassword3">Password</label>

													<input
														type="password"
														className="form-control"
														id="inputPassword3"
														placeholder="Password"
													/>
												</div>
											</div>
											<div className="form-row">
												<div className="col-md-7 mb-3">
													<label htmlFor="inputEmail">Email Address (again)</label>
													<input
														type="email"
														className="form-control"
														id="inputEmail"
														placeholder="email"
														required
													/>
												</div>

												<div className="col-md mb-3">
													<label htmlFor="inputPassword3">Password (again)</label>

													<input
														type="password"
														className="form-control"
														id="inputPassword3"
														placeholder="Password"
													/>
												</div>
											</div>

											<hr />
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
												<div className="col-md-6 mb-3">
													<label htmlFor="inputAddress">U.S. Mailing Address</label>
													<input
														type="text"
														className="form-control"
														id="inputAddress"
														placeholder="Number, Street name"
													/>
												</div>

												<div className="form-inline col-md">
													<div className="form-check form-check-inline">
														<input
															className="form-check-input"
															type="checkbox"
															name="inlinecheckboxOptions"
															id="inlinecheckbox1"
															value="option1"
														/>
														<label className="form-check-label" htmlFor="inlinecheckbox1">
															Apartment
														</label>
													</div>
													<div className="form-check form-check-inline">
														<input
															className="form-check-input"
															type="checkbox"
															name="inlinecheckboxOptions"
															id="inlinecheckbox2"
															value="option2"
														/>
														<label
															className="form-check-label col-md"
															htmlFor="inlinecheckbox2">
															Suite
														</label>
													</div>
													<div className="form-check form-check-inline">
														<input
															className="form-check-input"
															type="checkbox"
															name="inlinecheckboxOptions"
															id="inlinecheckbox3"
															value="option3"
														/>
														<label
															className="form-check-label col-md"
															htmlFor="inlinecheckbox3">
															Floor
														</label>
													</div>
													<input
														type="text"
														className="form-control col-sm"
														placeholder="#"
													/>
												</div>
											</div>
											<div className="form-row">
												<div className="col-md-6 mb-3">
													<label htmlFor="validationDefault03">City/Town</label>
													<input
														type="text"
														className="form-control"
														id="validationDefault03"
														required
													/>
												</div>

												<div className="col-md-3 mb-3">
													<label htmlFor="inputState">State</label>
													<select id="inputState" className="form-control required">
														<option selected>Choose...</option>
														<option value="AL">AL</option>
														<option value="AK">AK</option>
														<option value="AZ">AZ</option>
														<option value="AR">AR</option>
														<option value="CA">CA</option>
														<option value="CO">CO</option>
														<option value="CT">CT</option>
														<option value="DE">DE</option>
														<option value="DC">DC</option>
														<option value="FL">FL</option>
														<option value="GA">GA</option>
														<option value="HI">HI</option>
														<option value="ID">ID</option>
														<option value="IL">IL</option>
														<option value="IN">IN</option>
														<option value="IA">IA</option>
														<option value="KS">KS</option>
														<option value="KY">KY</option>
														<option value="LA">LA</option>
														<option value="ME">ME</option>
														<option value="MD">MD</option>
														<option value="MA">MA</option>
														<option value="MI">MI</option>
														<option value="MN">MN</option>
														<option value="MS">MS</option>
														<option value="MO">MO</option>
														<option value="MT">MT</option>
														<option value="NE">NE</option>
														<option value="NV">NV</option>
														<option value="NH">NH</option>
														<option value="NJ">NJ</option>
														<option value="NM">NM</option>
														<option value="NY">NY</option>
														<option value="NC">NC</option>
														<option value="ND">ND</option>
														<option value="OH">OH</option>
														<option value="OK">OK</option>
														<option value="OR">OR</option>
														<option value="PA">PA</option>
														<option value="RI">RI</option>
														<option value="SC">SC</option>
														<option value="SD">SD</option>
														<option value="TN">TN</option>
														<option value="TX">TX</option>
														<option value="UT">UT</option>
														<option value="VT">VT</option>
														<option value="VA">VA</option>
														<option value="WA">WA</option>
														<option value="WV">WV</option>
														<option value="WI">WI</option>
														<option value="WY">WY</option>
														<option>...</option> required
													</select>
												</div>
												<div className="col-md-3 mb-3">
													<label htmlFor="validationDefault05">Zip code</label>
													<input
														type="number"
														className="form-control"
														id="validationDefault05"
														placeholder="Zip"
														maxLength="5"
														required
													/>
												</div>
											</div>
											<div className="form-row">
												<div className="form-inline col-sm">
													<div className="form-check form-check-inline">
														<h>Sex &nbsp;</h>
														<input
															className="form-check-input"
															type="checkbox"
															name="inlinecheckboxOptions"
															id="inlinecheckbox1"
															value="option1"
														/>
														<label className="form-check-label" htmlFor="inlinecheckbox1">
															Male
														</label>
													</div>

													<div className="form-check form-check-inline">
														<input
															className="form-check-input"
															type="checkbox"
															name="inlinecheckboxOptions"
															id="inlinecheckbox3"
															value="option3"
														/>
														<label
															className="form-check-label col-md"
															htmlFor="inlinecheckbox3">
															Femail
														</label>
													</div>
												</div>
												<div className="col-md mb-3">
													<label htmlFor="validationDefault03">Date of Birth</label>
													<input
														type="date"
														className="form-control"
														id="validationDefault03"
														placeholder="MM/DD/YYYY"
														required
													/>
												</div>
												<div className="col-md mb-3">
													<label htmlFor="validationDefault03">Country of Birth</label>
													<input
														type="text"
														className="form-control"
														id="validationDefault03"
														placeholder="Country of birth"
														required
													/>
												</div>
												<div className="col-md mb-3">
													<label htmlFor="validationDefault03">
														Country of Nationality/Citizenship
													</label>
													<input
														type="text"
														className="form-control"
														id="validationDefault03"
														placeholder="Nationality/Citizenship"
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
										</div>
										<div className="form-group row">
											<div className="col-sm-10">
												<button type="submit" className="btn btn-primary">
													Create user
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
