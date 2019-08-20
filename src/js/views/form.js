import React from "react";
import "../../styles/form.scss";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export class Form extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					let name = this.props.match.params.formname;
					let user = store.tempLoggedUser;
					let form = store.forms.find(item => {
						return item.forms_name === name;
					});

					console.log(name);
					console.log(form);
					return (
						<div className="card bg-secondary  mx-auto p-2">
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
											<label htmlFor="validationDefault01">Last Name</label>
											<input
												type="text"
												name="lastname"
												className="form-control"
												placeholder="Last name"
												defaultValue={user.lastname}
											/>
										</div>
									</div>
									<div className="form-row">
										<div className="col-md mb-3">
											<label htmlFor="validationDefault02">First Name</label>
											<input
												type="text"
												className="form-control"
												placeholder="First name"
												defaultValue={user.firstname}
												name="firstname"
											/>
										</div>
										<div className="col-md mb-3">
											<label htmlFor="validationDefault03">Middle Name (Patronimic)</label>
											<input
												type="text"
												className="form-control"
												placeholder="Middle name"
												defaultValue={user.middlename}
												name="middlename"
											/>
										</div>
									</div>

									<div className="form-row">
										<div className="col-md mb-3">
											<label htmlFor="validationDefault04">Daytime Phone Number</label>
											<input
												type="tel"
												className="form-control"
												placeholder="123-456-7890"
												defaultValue={user.dayPhone}
												name="dayPhone"
											/>
										</div>
										<div className="col-md mb-3">
											<label htmlFor="validationDefault05">Mobile Phone Number</label>
											<input
												type="tel"
												className="form-control"
												placeholder="123-456-7890"
												defaultValue={user.mobile}
												name="mobile"
											/>
										</div>
									</div>
									<div className="form-row">
										<div className="col-md mb-3">
											<label htmlFor="inputEmail">Email Address (if any)</label>
											<input
												type="text"
												name="email"
												className="form-control"
												id="inputEmail"
												placeholder="email"
												defaultValue={user.email}
											/>
										</div>
									</div>
									<hr />
									<div className="form-row">
										<h3>
											Additional Information. Please provide other names you used in the past (if
											any)
										</h3>
									</div>

									<div className="form-row">
										<div className="col-md mb-3">
											<label htmlFor="validationDefault01">Last Name</label>
											<input
												type="text"
												name="lastname1"
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
												className="form-control"
												placeholder="First name"
												name="firstname1"
											/>
										</div>
										<div className="col-md mb-3">
											<label htmlFor="validationDefault03">Middle Name (Patronimic)</label>
											<input
												type="text"
												className="form-control"
												placeholder="Middle name"
												name="middlename1"
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
												placeholder="Number, Street name"
												defaultValue={user.address}
												name="address"
											/>
										</div>
									</div>

									<div className="form-row">
										<div className="col-md-2 mb-3">
											<label htmlFor="validationDefault06">Apt/Ste/Flr</label>
											<input
												type="text"
												name="apartment"
												className="form-control"
												placeholder="Apt/Ste/Flr #"
												defaultValue={user.apartment}
											/>
										</div>

										<div className="col-md mb-3">
											<label htmlFor="validationDefault07">City/Town</label>
											<input
												type="text"
												name="city"
												className="form-control"
												placeholder="City/Town"
												defaultValue={user.city}
											/>
										</div>
									</div>
									<div className="form-row">
										<div className="col-md mb-3">
											<label htmlFor="inputState">State</label>
											<input
												type="text"
												name="state"
												className="form-control"
												placeholder="State"
												defaultValue={user.state}
											/>
										</div>
										<div className="col-md mb-3">
											<label htmlFor="validationDefault08">Zip code</label>
											<input
												type="number"
												name="zipCode"
												className="form-control"
												placeholder="Zip"
												defaultValue={user.zipCode}
											/>
										</div>
									</div>
									<div className="form-row">
										<h3>Part IV. Last address outside of the USA</h3>
									</div>

									<div className="form-row">
										<div className="col-md mb-3">
											<label htmlFor="inputAddress">Number and Street Name</label>
											<input
												type="text"
												className="form-control"
												placeholder="Number, Street name"
												name="address1"
											/>
										</div>
									</div>

									<div className="form-row">
										<div className="col-md-2 mb-3">
											<label htmlFor="validationDefault06">Apt/Ste/Flr</label>
											<input
												type="text"
												name="apartment1"
												className="form-control"
												placeholder="Apt/Ste/Flr #"
											/>
										</div>

										<div className="col-md mb-3">
											<label htmlFor="validationDefault07">City/Town</label>
											<input
												type="text"
												name="city1"
												className="form-control"
												placeholder="City/Town"
											/>
										</div>
									</div>
									<div className="form-row">
										<div className="col-md mb-3">
											<label htmlFor="inputState">State/Territory/Province</label>
											<input
												type="text"
												name="state"
												className="form-control"
												placeholder="State1"
											/>
										</div>
										<div className="col-md mb-3">
											<label htmlFor="validationDefault08">Zip/Postal code</label>
											<input
												type="number"
												name="zipCode1"
												className="form-control"
												placeholder="Zip"
											/>
										</div>
									</div>
									<hr />

									<div className="form-row">
										<h3>Part III. Information About Your Spouse</h3>
									</div>
									<div className="form-row">
										<div className="col-md mb-3">
											<label htmlFor="validationDefault10">Spouse Last Name (Family name)</label>
											<input
												type="text"
												className="form-control"
												placeholder="Last name"
												defaultValue={user.spouse.spouseLastname}
												name="spouseLastname"
											/>
										</div>
									</div>
									<div className="form-row">
										<div className="col-md mb-3">
											<label htmlFor="validationDefault11">Spouse First Name</label>
											<input
												type="text"
												className="form-control"
												placeholder="First name"
												defaultValue={user.spouse.spouseFirstname}
												name="spouseFirstname"
											/>
										</div>

										<div className="col-md mb-3">
											<label htmlFor="validationDefault12">Spouse Middle Name (Patronimic)</label>
											<input
												type="text"
												className="form-control"
												placeholder="Middle name"
												defaultValue={user.spouse.spouseMiddlename}
												name="spouseMiddlename"
											/>
										</div>
									</div>
									<div className="form-row">
										<div className="col-md mb-3">
											<label htmlFor="validationDefault13">Spouse Daytime Phone Number</label>
											<input
												type="text"
												className="form-control"
												placeholder="123-456-7890"
												defaultValue={user.spouse.spouseDayPhone}
												name="spouseDayPhone"
											/>
										</div>

										<div className="col-md mb-3">
											<label htmlFor="validationDefault14">Spouse Mobile Phone Number</label>
											<input
												type="text"
												className="form-control"
												placeholder="123-456-7890"
												defaultValue={user.spouse.spouseMobile}
												name="spouseMobile"
											/>
										</div>
									</div>
									<div className="form-row">
										<div className="col-md mb-3">
											<label htmlFor="inputEmail">Spouse Email Address</label>
											<input
												type="text"
												className="form-control"
												placeholder="Email"
												defaultValue={user.spouse.spouseEmail}
												name="spouseEmail"
											/>
										</div>
									</div>
									<hr />
									<div className="form-row">
										<h3>Part IV. Employement History</h3>
									</div>
									<div className="form-row">
										<div className="col-md mb-3">
											<label htmlFor="validationDefault15">
												Name of Employer/Company/Organization
											</label>
											<input
												type="text"
												name="employerName"
												className="form-control"
												placeholder="Employer"
												defaultValue={user.employerName}
											/>
										</div>
									</div>
									<div className="form-row">
										<div className="col-md mb-3">
											<label htmlFor="inputAddress">Infornation about your employement</label>
											<input
												type="text"
												name="employerAddress"
												className="form-control"
												placeholder="Number, Street name"
												defaultValue={user.employerAddress}
											/>
										</div>

										<div className="col-md-2 mb-3">
											<label htmlFor="inputAddress">Suite</label>
											<input
												type="text"
												name="employerApartment"
												className="form-control"
												placeholder="Suite #"
												defaultValue={user.employerApartment}
											/>
										</div>
									</div>
									<div className="form-row">
										<div className="col-md mb-3">
											<label htmlFor="validationDefault16">City/Town</label>
											<input
												type="text"
												className="form-control"
												name="employerCity"
												defaultValue={user.employerCity}
											/>
										</div>

										<div className="col-md mb-3">
											<label htmlFor="validationDefault17">Province/Teritory/Region/Area</label>
											<input
												type="text"
												className="form-control"
												name="employerState"
												defaultValue={user.employerState}
											/>
										</div>
									</div>
									<div className="form-row">
										<div className="col-md mb-3">
											<label htmlFor="validationDefault17">Zip code/Postal code</label>
											<input
												type="number"
												className="form-control"
												placeholder="Zip"
												name="employerZipCode"
												maxLength="5"
												defaultValue={user.employerZipCode}
											/>
										</div>
										<div className="col-md mb-3">
											<label htmlFor="validationDefault18">Country</label>
											<input
												type="text"
												className="form-control"
												name="employerCountry"
												defaultValue={user.employerCountry}
											/>
										</div>
									</div>
									<div className="form-row">
										<div className="col-md mb-3">
											<label htmlFor="validationDefault19">Your Ocupation/Position</label>
											<input
												type="text"
												name="employerOccupation"
												className="form-control"
												placeholder="Name"
												defaultValue={user.employerOccupation}
											/>
										</div>
									</div>
								</form>

								<div className="card-footer text-right">
									<Link to="/green_card_list_selection">
										<button className="btn btn-primary float-left">Back</button>
									</Link>

									<div className="form-row">
										<Link to="/">
											<button className="btn btn-primary float-left mx-auto p-2">Home</button>
										</Link>
										<div className="text-right">
											<button
												className="btn btn-warning text-right mx-auto p-2"
												onClick={() =>
													actions.updateForm(
														document.querySelector("[name=email]").value,
														document.querySelector("[name=username]").value,
														document.querySelector("[name=lastname]").value,
														document.querySelector("[name=firstname]").value,
														document.querySelector("[name=middlename]").value,
														document.querySelector("[name=dayPhone]").value,
														document.querySelector("[name=mobile]").value,

														document.querySelector("[name=lastname1]").value,
														document.querySelector("[name=firstname1]").value,
														document.querySelector("[name=middlename1]").value,

														document.querySelector("[name=address]").value,
														document.querySelector("[name=apartment]").value,
														document.querySelector("[name=zipCode]").value,
														document.querySelector("[name=city]").value,
														document.querySelector("[name=state]").value,
														document.querySelector("[name=country]").value,

														document.querySelector("[name=address1]").value,
														document.querySelector("[name=apartment1]").value,
														document.querySelector("[name=zipCode1]").value,
														document.querySelector("[name=city1]").value,
														document.querySelector("[name=state1]").value,
														document.querySelector("[name=country1]").value,

														document.querySelector("[name=spouseLastname]").value,
														document.querySelector("[name=spouseFirstname]").value,
														document.querySelector("[name=spouseMiddlename]").value,
														document.querySelector("[name=spouseDayPhone]").value,
														document.querySelector("[name=spouseMobile]").value,
														document.querySelector("[name=spouseEmail]").value,

														document.querySelector("[name=employerName]").value,
														document.querySelector("[name=employerAddress]").value,
														document.querySelector("[name=employerApartment]").value,
														document.querySelector("[name=employerCity]").value,
														document.querySelector("[name=employerState]").value,
														document.querySelector("[name=employerZipCode]").value,
														document.querySelector("[name=employerCountry]").value,
														document.querySelector("[name=employerOccupation]").value,

														this.props
													)
												}>
												{" "}
												Submit
											</button>
										</div>
									</div>

									<Link to="/green_card_list_selection">
										<button className="btn btn-primary">To list selection</button>
									</Link>
								</div>
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

// onClick={() =>
// 										actions.submitForm(
// 											document.querySelector("[name=email]").value,
// 											document.querySelector("[name=lastname]").value,
// 											document.querySelector("[name=firstname]").value,
// 											document.querySelector("[name=middlename]").value,
// 											document.querySelector("[name=dayPhone]").value,
// 											document.querySelector("[name=mobile]").value,

// 											document.querySelector("[name=address]").value,
// 											document.querySelector("[name=apartment]").value,
// 											document.querySelector("[name=zipCode]").value,
// 											document.querySelector("[name=city]").value,
// 											document.querySelector("[name=state]").value,
// 											document.querySelector("[name=country]").value,

// 											document.querySelector("[name=employerName]").value,
// 											document.querySelector("[name=employerAddress]").value,
// 											document.querySelector("[name=employerApartment]").value,
// 											document.querySelector("[name=employerZipCode]").value,
// 											document.querySelector("[name=employerCity]").value,
// 											document.querySelector("[name=employerState]").value,
// 											document.querySelector("[name=employerCountry]").value,
// 											document.querySelector("[name=employerOccupation]").value
// 										)
// 									}
