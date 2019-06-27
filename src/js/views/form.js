import React from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export class Form extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					let name = this.props.match.params.formname;
					let form = store.forms.find(item => {
						return item.forms_name === name;
					});

					console.log(name);
					console.log(form);
					return (
						<div className="container">
							<div className="row">
								<div className="col card-header">
									<h1>{form.forms_name}</h1>
								</div>
							</div>
							<div className="text-justify mt-5">
								<form>
									<div className="form-row">
										<h3>Part I. General Information</h3>
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
												required
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
										<div className="col-md mb-3">
											<label htmlFor="validationDefault02">Middle Name (Patronimic)</label>
											<input
												type="text"
												className="form-control"
												id="validationDefault02"
												placeholder="Middle name"
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
												required
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
											<label htmlFor="inputEmail">Email Address (if any)</label>
											<input
												type="email"
												className="form-control"
												id="inputEmail"
												placeholder="email"
											/>
										</div>
									</div>
									<hr />
									<div className="form-row">
										<h3>Part II. Physical Address in USA</h3>
									</div>

									<div className="form-row">
										<div className="col-md mb-3">
											<label htmlFor="inputAddress">Number and Street Name</label>
											<input
												type="text"
												className="form-control"
												id="inputAddress"
												placeholder="Number, Street name"
											/>
										</div>
									</div>

									<div className="form-row">
										<div className="form-inline col-sm-3">
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
												<label className="form-check-label col-md" htmlFor="inlinecheckbox2">
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
												<label className="form-check-label col-sm" htmlFor="inlinecheckbox3">
													Floor
												</label>
											</div>
											<input type="text" className="form-control col-sm" placeholder="#" />
										</div>

										<div className="col-md mb-3">
											<label htmlFor="validationDefault03">City/Town</label>
											<input
												type="text"
												className="form-control"
												id="validationDefault03"
												required
											/>
										</div>
									</div>
									<div className="form-row">
										<div className="col-md mb-3">
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
										<div className="col-md mb-3">
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

									<hr />
									<div className="form-row">
										<h3>Part III. Information About Your Spouse</h3>
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
										<div className="col-md mb-3">
											<label htmlFor="inputEmail">Spouse Email Address</label>
											<input
												type="text"
												className="form-control"
												name="email"
												placeholder="Email"
											/>
										</div>
									</div>
									<hr />
									<div className="form-row">
										<h3>Part IV. Employement History</h3>
									</div>

									<div className="form-row">
										<div className="col-md mb-3">
											<label htmlFor="validationDefault02">
												Name of Employer/Company/Organization
											</label>
											<input
												type="text"
												className="form-control"
												id="validationDefault02"
												placeholder="Employer"
											/>
										</div>
									</div>

									<div className="form-row">
										<div className="col-md-7 mb-3">
											<label htmlFor="inputAddress">Employer Address</label>
											<input
												type="text"
												className="form-control"
												id="inputAddress"
												placeholder="Number, Street name"
											/>
										</div>

										<div className="form-inline col-sm">
											<div className="form-check form-check-inline float-right">
												<input
													className="form-check-input"
													type="checkbox"
													name="suite"
													value="option2"
												/>
												<label className="form-check-label col-sm" htmlFor="inlinecheckbox2">
													Suite
												</label>

												<input type="text" className="form-control col-sm" placeholder="#" />
											</div>
										</div>
									</div>
									<div className="form-row">
										<div className="col-md mb-3">
											<label htmlFor="validationDefault03">City/Town</label>
											<input
												type="text"
												className="form-control"
												id="validationDefault03"
												required
											/>
										</div>

										<div className="col-md mb-3">
											<label htmlFor="validationDefault03">Province/Teritory/Region/Area</label>
											<input
												type="text"
												className="form-control"
												id="validationDefault03"
												required
											/>
										</div>
									</div>
									<div className="form-row">
										<div className="col-md mb-3">
											<label htmlFor="validationDefault05">Zip code/Postal code</label>
											<input
												type="number"
												className="form-control"
												id="validationDefault05"
												placeholder="Zip"
												maxLength="5"
												required
											/>
										</div>
										<div className="col-md mb-3">
											<label htmlFor="validationDefault03">Country</label>
											<input
												type="text"
												className="form-control"
												id="validationDefault03"
												required
											/>
										</div>
									</div>
									<div className="form-row">
										<div className="col-md mb-3">
											<label htmlFor="validationDefault02">Your Ocupation/Position</label>
											<input
												type="text"
												className="form-control"
												id="validationDefault02"
												placeholder="Name"
												required
											/>
										</div>
									</div>
								</form>
							</div>
							<div className="card-footer text-right">
								<Link to="/">
									<button className="btn btn-primary float-left">Back</button>
								</Link>
								<button className="btn btn-primary">Submit</button>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
Form.propTypes = {
	match: PropTypes.object
};
