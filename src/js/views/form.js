import React from "react";
import "../../styles/home.scss";

export class Form extends React.Component {
	render() {
		return (
			<div className="text-justify mt-5">
				<div className="container ">
					<form>
						<p>Part 1</p>
						<div className="form-row">
							<div className="col-md-4 mb-3">
								<label htmlFor="validationDefault01">Last Name (Family name)</label>
								<input
									type="text"
									className="form-control"
									id="validationDefault01"
									placeholder="Last name"
									required
								/>
							</div>
							<div className="col-md-4 mb-3">
								<label htmlFor="validationDefault02">First Name</label>
								<input
									type="text"
									className="form-control"
									id="validationDefault02"
									placeholder="First name"
									required
								/>
							</div>
							<div className="col-md-4 mb-3">
								<label htmlFor="validationDefault02">Middle Name (Patronimic)</label>
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
							<div className="col-md-4 mb-3">
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
							<div className="col-md mb-3">
								<label htmlFor="inputEmail">Email Address (if any)</label>
								<input type="email" className="form-control" id="inputEmail" placeholder="email" />
							</div>
						</div>

						<div className="form-group">
							<label htmlFor="inputAddress">U.S. Mailing Address</label>
							<input
								type="text"
								className="form-control"
								id="inputAddress"
								placeholder="Number, Street name"
							/>
						</div>
						<div className="form-group">
							<form>
								<div className="checkbox-inline">
									<label>
										<input type="checkbox" value="" />
										{"  "}
										Apartment <input type="apt" className="form-control" id="apartment" />
									</label>
								</div>
								<div className="checkbox-inline">
									<label>
										{" "}
										<input type="checkbox" value="" />
										{"  "}
										Suite <input type="ste" className="form-control" id="suite" />
									</label>
								</div>
								<div className="checkbox-inline">
									<label>
										<input type="checkbox" value="" />
										{"  "}
										Floor <input type="floor" className="form-control" id="floor" />
									</label>
								</div>
							</form>
						</div>
						<div className="form-row">
							<div className="col-md-6 mb-3">
								<label htmlFor="validationDefault03">City/Town</label>
								<input type="text" className="form-control" id="validationDefault03" required />
							</div>

							<div className="col-md-3 mb-3">
								<label htmlFor="inputState">State</label>
								<select id="inputState" className="form-control required">
									<option selected>Choose...</option>
									<option value="AL">AL</option>
									<option value="AK">Alaska</option>
									<option value="AZ">Arizona</option>
									<option value="AR">Arkansas</option>
									<option value="CA">California</option>
									<option value="CO">Colorado</option>
									<option value="CT">Connecticut</option>
									<option value="DE">Delaware</option>
									<option value="DC">District Of Columbia</option>
									<option value="FL">Florida</option>
									<option value="GA">Georgia</option>
									<option value="HI">HI</option>
									<option value="ID">Idaho</option>
									<option value="IL">Illinois</option>
									<option value="IN">Indiana</option>
									<option value="IA">IA</option>
									<option value="KS">Kansas</option>
									<option value="KY">Kentucky</option>
									<option value="LA">Louisiana</option>
									<option value="ME">Maine</option>
									<option value="MD">Maryland</option>
									<option value="MA">Massachusetts</option>
									<option value="MI">Michigan</option>
									<option value="MN">Minnesota</option>
									<option value="MS">Mississippi</option>
									<option value="MO">Missouri</option>
									<option value="MT">Montana</option>
									<option value="NE">Nebraska</option>
									<option value="NV">Nevada</option>
									<option value="NH">New Hampshire</option>
									<option value="NJ">New Jersey</option>
									<option value="NM">New Mexico</option>
									<option value="NY">New York</option>
									<option value="NC">NC</option>
									<option value="ND">North Dakota</option>
									<option value="OH">Ohio</option>
									<option value="OK">Oklahoma</option>
									<option value="OR">Oregon</option>
									<option value="PA">Pennsylvania</option>
									<option value="RI">Rhode Island</option>
									<option value="SC">South Carolina</option>
									<option value="SD">South Dakota</option>
									<option value="TN">Tennessee</option>
									<option value="TX">Vermontxas</option>
									<option value="UT">Utah</option>
									<option value="VT">VT</option>
									<option value="VA">VA</option>
									<option value="WA">Washington</option>
									<option value="WV">WV</option>
									<option value="WI">Wisconsin</option>
									<option value="WY">Wyoming</option>
									<option>...</option> required
								</select>
							</div>
							<div className="col-md-3 mb-3">
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
						</div>
						<div className="form-group">
							<label htmlFor="inputAddress">U.S. Physical address</label>
							<input
								type="text"
								className="form-control"
								id="inputAddress"
								placeholder="Number, Street name"
							/>
						</div>
						<div className="form-group">
							<form>
								<div className="checkbox-inline">
									<label>
										<input type="checkbox" value="" />
										{"  "}
										Apartment
										<input type="apt" className="form-control" id="apartment" />
									</label>
								</div>
								<div className="checkbox-inline">
									<label>
										<input type="checkbox" value="" />
										{"  "}
										Suite
										<input type="ste" className="form-control" id="suite" />
									</label>
								</div>
								<div className="checkbox-inline">
									<label>
										<input type="checkbox" value="" />
										{"  "}
										Floor
										<input type="floor" className="form-control" id="floor" />
									</label>
								</div>
							</form>
						</div>

						<div className="form-row">
							<div className="col-md-6 mb-3">
								<label htmlFor="validationDefault03">City/Town</label>
								<input type="text" className="form-control" id="validationDefault03" required />
							</div>

							<div className="col-md-3 mb-3">
								<label htmlFor="inputState">State</label>
								<select id="inputState" className="form-control required">
									<option selected>Choose...</option>
									<option value="AL">Alabama</option>
									<option value="AK">Alaska</option>
									<option value="AZ">Arizona</option>
									<option value="AR">Arkansas</option>
									<option value="CA">California</option>
									<option value="CO">Colorado</option>
									<option value="CT">Connecticut</option>
									<option value="DE">Delaware</option>
									<option value="DC">District Of Columbia</option>
									<option value="FL">Florida</option>
									<option value="GA">Georgia</option>
									<option value="HI">Hawaii</option>
									<option value="ID">Idaho</option>
									<option value="IL">Illinois</option>
									<option value="IN">Indiana</option>
									<option value="IA">Iowa</option>
									<option value="KS">Kansas</option>
									<option value="KY">Kentucky</option>
									<option value="LA">Louisiana</option>
									<option value="ME">Maine</option>
									<option value="MD">Maryland</option>
									<option value="MA">Massachusetts</option>
									<option value="MI">Michigan</option>
									<option value="MN">Minnesota</option>
									<option value="MS">Mississippi</option>
									<option value="MO">Missouri</option>
									<option value="MT">Montana</option>
									<option value="NE">Nebraska</option>
									<option value="NV">Nevada</option>
									<option value="NH">New Hampshire</option>
									<option value="NJ">New Jersey</option>
									<option value="NM">New Mexico</option>
									<option value="NY">New York</option>
									<option value="NC">North Carolina</option>
									<option value="ND">North Dakota</option>
									<option value="OH">Ohio</option>
									<option value="OK">Oklahoma</option>
									<option value="OR">Oregon</option>
									<option value="PA">Pennsylvania</option>
									<option value="RI">Rhode Island</option>
									<option value="SC">South Carolina</option>
									<option value="SD">South Dakota</option>
									<option value="TN">Tennessee</option>
									<option value="TX">Texas</option>
									<option value="UT">Utah</option>
									<option value="VT">Vermont</option>
									<option value="VA">Virginia</option>
									<option value="WA">Washington</option>
									<option value="WV">West Virginia</option>
									<option value="WI">Wisconsin</option>
									<option value="WY">Wyoming</option>
									<option>...</option> required
								</select>
							</div>
							<div className="col-md-3 mb-3">
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
						</div>
						<div className="form-row">
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
								<label htmlFor="validationDefault03">Country of Nationality/Citizenship</label>
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
								<label htmlFor="validationDefault03">Passport/Travel Document Series/Number</label>
								<input
									type="text/number"
									className="form-control"
									id="validationDefault03"
									placeholder="Passport/Travel Document"
									required
								/>
							</div>
							<div className="col-md mb-3">
								<label htmlFor="validationDefault03">Country of Passport Issuance</label>
								<input
									type="text"
									className="form-control"
									id="validationDefault03"
									placeholder="Country of Issuance"
									required
								/>
							</div>
							<div className="col-md mb-3">
								<label htmlFor="validationDefault03">Passport Expiration Date</label>
								<input
									type="date"
									className="form-control"
									id="validationDefault03"
									placeholder="MM/DD/YYYY"
									required
								/>
							</div>
						</div>
						<div className="form-row">
							<div className="col-md mb-3">
								<label htmlFor="validationDefault03">Date of your last arrival to the U.S.</label>
								<input
									type="date"
									className="form-control"
									id="validationDefault03"
									placeholder="MM/DD/YYYY"
									required
								/>
							</div>

							<div className="col-md mb-3">
								<label htmlFor="validationDefault03">
									I-94 Number (You can get the copy of I-94{" "}
									<a
										href="https://i94.cbp.dhs.gov/I94/#/recent-search"
										target="_blank"
										rel="noopener noreferrer">
										<u>here</u>
									</a>
									.)
								</label>
								<input
									type="number"
									className="form-control"
									id="validationDefault03"
									placeholder="I-94"
									required
								/>
							</div>
						</div>
						<div className="form-row">
							<div className="col-md mb-3">
								<label htmlFor="validationDefault03">Current Type of Visa</label>
								<input
									type="text"
									className="form-control"
									id="validationDefault03"
									placeholder="B1/B2, F1/F2, M1/M2, J1/J2"
									required
								/>
							</div>
							<div className="col-md mb-3">
								<label htmlFor="validationDefault03">Visa Expiration Date</label>
								<input
									type="date"
									className="form-control"
									id="validationDefault03"
									placeholder="MM/DD/YYYY"
									required
								/>
							</div>
						</div>

						<div className="form-group">
							<label htmlFor="inputAddress">Physical Address in Your Home Country</label>
							<input type="text" className="form-control" id="inputAddress" placeholder="Address" />
						</div>

						<form className="row">
							<div className="col-md-6 mb-3">
								{" "}
								<div className="checkbox-inline">
									<label>
										<input type="checkbox" value="" />
										{"  "}
										Apartment <input type="apt" className="form-control" id="apartment" />
									</label>
								</div>
								<div className="checkbox-inline">
									<label>
										<input type="checkbox" value="" />
										{"  "}
										Suite
										<input type="ste" className="form-control" id="suite" />
									</label>
								</div>
								<div className="checkbox-inline">
									<label>
										<input type="checkbox" value="" />
										{"  "}
										Floor <input type="floor" className="form-control" id="floor" />
									</label>
								</div>
							</div>{" "}
						</form>
						<div className="form-row">
							<div className="col-md mb-3">
								<label htmlFor="validationDefault03">City/Town/Village</label>
								<input type="text" className="form-control" id="validationDefault03" required />
							</div>

							<div className="col-md mb-3">
								<label htmlFor="validationDefault03">Region/Distric/Area/Province</label>
								<input
									type="number"
									className="form-control"
									id="validationDefault03"
									placeholder="Region"
									required
								/>
							</div>
							<div className="form-row">
								<div className="col-md mb-3">
									<label htmlFor="validationDefault05">Postal code</label>
									<input
										type="text/number"
										className="form-control"
										id="validationDefault05"
										placeholder="Postal code"
										required
									/>
								</div>
								<div className="col-md mb-3">
									<label htmlFor="validationDefault03">Country</label>
									<input
										type="text"
										className="form-control"
										id="validationDefault03"
										placeholder="Country"
										required
									/>
								</div>
							</div>
						</div>
						<form>
							<p>PART 4</p>
							<fieldset className="form-group">
								<div className="row">
									<legend className="col-form-label  pt-0">
										3. Are you, or any other person included on the application, an applicant for an
										immigration visa?
									</legend>
									<div className="col-md-10">
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												name="gridRadios"
												id="gridRadios1"
												value="option1"
												checked
											/>
											<label className="form-check-label" htmlFor="gridRadios1">
												Yes
											</label>
										</div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												name="gridRadios"
												id="gridRadios2"
												value="option2"
											/>
											<label className="form-check-label" htmlFor="gridRadios2">
												No
											</label>
										</div>
									</div>
								</div>
								<div className="row">
									<legend className="col-form-label  pt-0">
										4. Has an immigrant petition EVER been filed for you or for any other person
										included in this application?
									</legend>
									<div className="col-md-10">
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												name="gridRadios"
												id="gridRadios1"
												value="option1"
												checked
											/>
											<label className="form-check-label" htmlFor="gridRadios1">
												Yes
											</label>
										</div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												name="gridRadios"
												id="gridRadios2"
												value="option2"
											/>
											<label className="form-check-label" htmlFor="gridRadios2">
												No
											</label>
										</div>
									</div>
								</div>
								<div className="row">
									<legend className="col-form-label  pt-0">
										5. Has Form I-485 EVER been filed by you or by any other person in this
										application?
									</legend>
									<div className="col-md-10">
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												name="gridRadios"
												id="gridRadios1"
												value="option1"
												checked
											/>
											<label className="form-check-label" htmlFor="gridRadios1">
												Yes
											</label>
										</div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												name="gridRadios"
												id="gridRadios2"
												value="option2"
											/>
											<label className="form-check-label" htmlFor="gridRadios2">
												No
											</label>
										</div>
									</div>
								</div>{" "}
								<div className="row">
									<legend className="col-form-label  pt-0">
										6. Have you, or any other person included in this application, EVER been
										arrested or convicted of any crime offense since last entering the United
										States?
									</legend>
									<div className="col-md-10">
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												name="gridRadios"
												id="gridRadios1"
												value="option1"
												checked
											/>
											<label className="form-check-label" htmlFor="gridRadios1">
												Yes
											</label>
										</div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												name="gridRadios"
												id="gridRadios2"
												value="option2"
											/>
											<label className="form-check-label" htmlFor="gridRadios2">
												No
											</label>
										</div>
									</div>
								</div>{" "}
								<div className="row">
									<legend className="col-form-label  pt-0">
										7. Have you, or other person included in this application, EVER ordered,
										incited, called for, committed, assisted, helped with, or otherwise participated
										in any of the following:
									</legend>
								</div>
								<div className="row">
									<legend className="col-form-label  pt-0">
										7.a. Acts involving torture or genocide?
									</legend>
									<div className="col-md-10">
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												name="gridRadios"
												id="gridRadios1"
												value="option1"
												checked
											/>
											<label className="form-check-label" htmlFor="gridRadios1">
												Yes
											</label>
										</div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												name="gridRadios"
												id="gridRadios2"
												value="option2"
											/>
											<label className="form-check-label" htmlFor="gridRadios2">
												No
											</label>
										</div>
									</div>
								</div>{" "}
								<div className="row">
									<legend className="col-form-label  pt-0">7.b. Killing any person?</legend>
									<div className="col-md-10">
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												name="gridRadios"
												id="gridRadios1"
												value="option1"
												checked
											/>
											<label className="form-check-label" htmlFor="gridRadios1">
												Yes
											</label>
										</div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												name="gridRadios"
												id="gridRadios2"
												value="option2"
											/>
											<label className="form-check-label" htmlFor="gridRadios2">
												No
											</label>
										</div>
									</div>
								</div>{" "}
								<div className="row">
									<legend className="col-form-label  pt-0">
										7.c. Intentionally and severely injuring any person?
									</legend>
									<div className="col-md-10">
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												name="gridRadios"
												id="gridRadios1"
												value="option1"
												checked
											/>
											<label className="form-check-label" htmlFor="gridRadios1">
												Yes
											</label>
										</div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												name="gridRadios"
												id="gridRadios2"
												value="option2"
											/>
											<label className="form-check-label" htmlFor="gridRadios2">
												No
											</label>
										</div>
									</div>
								</div>{" "}
								<div className="row">
									<legend className="col-form-label  pt-0">
										7.d. Engaging in any kind of sexual contact or relations with any person who did
										not consent or was unable to consent, or was beaing forced or threatened?
									</legend>
									<div className="col-md-10">
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												name="gridRadios"
												id="gridRadios1"
												value="option1"
												checked
											/>
											<label className="form-check-label" htmlFor="gridRadios1">
												Yes
											</label>
										</div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												name="gridRadios"
												id="gridRadios2"
												value="option2"
											/>
											<label className="form-check-label" htmlFor="gridRadios2">
												No
											</label>
										</div>
									</div>
								</div>{" "}
								<div className="row">
									<legend className="col-form-label  pt-0">
										7.e. Limiting or denying any person&#39;s ability to exercise religious beliefs?
									</legend>
									<div className="col-md-10">
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												name="gridRadios"
												id="gridRadios1"
												value="option1"
												checked
											/>
											<label className="form-check-label" htmlFor="gridRadios1">
												Yes
											</label>
										</div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												name="gridRadios"
												id="gridRadios2"
												value="option2"
											/>
											<label className="form-check-label" htmlFor="gridRadios2">
												No
											</label>
										</div>
									</div>
								</div>{" "}
								<div className="row">
									<legend className="col-form-label  pt-0">
										8. Have you, or other person included on this application, EVER:
									</legend>
								</div>
								<div className="row">
									<legend className="col-form-label  pt-0">
										8.a. Served in, been a member of, assisted, or participated in any military
										unit, police unit, self-defence unit, vigilante unit, rebel group, guerilla
										group, militia, insurgent organization, or any other armed group?
									</legend>
									<div className="col-md-10">
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												name="gridRadios"
												id="gridRadios1"
												value="option1"
												checked
											/>
											<label className="form-check-label" htmlFor="gridRadios1">
												Yes
											</label>
										</div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												name="gridRadios"
												id="gridRadios2"
												value="option2"
											/>
											<label className="form-check-label" htmlFor="gridRadios2">
												No
											</label>
										</div>
									</div>
								</div>{" "}
								<div className="row">
									<legend className="col-form-label  pt-0">
										8.b. Worked, volunteered, or otherwise served in any person, jail, prison camp,
										detention facility, labor camp, or any other situation that involved detaining
										people?
									</legend>
									<div className="col-md-10">
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												name="gridRadios"
												id="gridRadios1"
												value="option1"
												checked
											/>
											<label className="form-check-label" htmlFor="gridRadios1">
												Yes
											</label>
										</div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												name="gridRadios"
												id="gridRadios2"
												value="option2"
											/>
											<label className="form-check-label" htmlFor="gridRadios2">
												No
											</label>
										</div>
									</div>
								</div>{" "}
								<div className="row">
									<legend className="col-form-label  pt-0">
										9. Have you, or other person included in this application, EVER been a member
										of, assisted, or participated in any group, unit, or organization of any kind in
										which you or other person used type of weapon against people or threatened to do
										so?
									</legend>
									<div className="col-md-10">
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												name="gridRadios"
												id="gridRadios1"
												value="option1"
												checked
											/>
											<label className="form-check-label" htmlFor="gridRadios1">
												Yes
											</label>
										</div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												name="gridRadios"
												id="gridRadios2"
												value="option2"
											/>
											<label className="form-check-label" htmlFor="gridRadios2">
												No
											</label>
										</div>
									</div>
								</div>{" "}
								<div className="row">
									<legend className="col-form-label  pt-0">
										10. Have you, or other person inculded in this application, EVER assisted or
										participated in selling, providing, or transporting weapons to any person who,
										to your knowledge, used them against another people?
									</legend>
									<div className="col-md-10">
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												name="gridRadios"
												id="gridRadios1"
												value="option1"
												checked
											/>
											<label className="form-check-label" htmlFor="gridRadios1">
												Yes
											</label>
										</div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												name="gridRadios"
												id="gridRadios2"
												value="option2"
											/>
											<label className="form-check-label" htmlFor="gridRadios2">
												No
											</label>
										</div>
									</div>
								</div>{" "}
								<div className="row">
									<legend className="col-form-label  pt-0">
										11. Have you, or other person inculded in this application, EVER recieved any
										type of military, paramilitary, or weapons training?
									</legend>
									<div className="col-md-10">
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												name="gridRadios"
												id="gridRadios1"
												value="option1"
												checked
											/>
											<label className="form-check-label" htmlFor="gridRadios1">
												Yes
											</label>
										</div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												name="gridRadios"
												id="gridRadios2"
												value="option2"
											/>
											<label className="form-check-label" htmlFor="gridRadios2">
												No
											</label>
										</div>
									</div>
								</div>{" "}
								<div className="row">
									<legend className="col-form-label  pt-0">
										12. Have you, or other person included in this application, done anything that
										violated the terms of the nonimmigrant status you now hold?
									</legend>
									<div className="col-md-10">
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												name="gridRadios"
												id="gridRadios1"
												value="option1"
												checked
											/>
											<label className="form-check-label" htmlFor="gridRadios1">
												Yes
											</label>
										</div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												name="gridRadios"
												id="gridRadios2"
												value="option2"
											/>
											<label className="form-check-label" htmlFor="gridRadios2">
												No
											</label>
										</div>
									</div>
								</div>{" "}
								<div className="row">
									<legend className="col-form-label  pt-0">
										13. Are you, or other person included in this application, now in removal
										proceedings?
									</legend>
									<div className="col-md-10">
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												name="gridRadios"
												id="gridRadios1"
												value="option1"
												checked
											/>
											<label className="form-check-label" htmlFor="gridRadios1">
												Yes
											</label>
										</div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												name="gridRadios"
												id="gridRadios2"
												value="option2"
											/>
											<label className="form-check-label" htmlFor="gridRadios2">
												No
											</label>
										</div>
									</div>
								</div>{" "}
								<div className="row">
									<legend className="col-form-label  pt-0">
										Part 8. Additional Information. If you answered {'"YES"'} to Number 13, provide
										the name of the person in removal proceedings and information on jurisdiction,
										date proceedings began, and status of proceedings.
										<div className="col-form-label  pt-0">
											<label htmlFor="exampleFormControlTextarea1" />
											<textarea
												className="form-control"
												id="exampleFormControlTextarea1"
												rows={5}
												defaultValue={""}
											/>
										</div>
									</legend>
								</div>
								<div className="row">
									<legend className="col-form-label pt-0">
										14. Have you, or other person included in this application, been employed in the
										United States since last admited or granted an extension or change of status?
									</legend>
									<div className="col-md-10">
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												name="gridRadios"
												id="gridRadios1"
												value="option1"
												checked
											/>
											<label className="form-check-label" htmlFor="gridRadios1">
												Yes
											</label>
										</div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												name="gridRadios"
												id="gridRadios2"
												value="option2"
											/>
											<label className="form-check-label" htmlFor="gridRadios2">
												No
											</label>
										</div>
									</div>
								</div>{" "}
								<div className="row">
									<legend className="col-form-label  pt-0">
										Additional Information. If you answered {'"NO"'} fully describe how you are
										supported yourself, including documentary evidence of the source, amount earned,
										and basis of any income.
										<div className="col-form-label  pt-0">
											<label htmlFor="exampleFormControlTextarea1" />
											<textarea
												className="form-control"
												id="exampleFormControlTextarea1"
												rows={5}
												defaultValue={""}
											/>
										</div>
									</legend>

									<legend className="col-form-label  pt-0">
										Additional Information. If you answered {'"YES"'} fully describe your
										employment, including the name of the person employed, name and address of the
										employer, weekly income, and whether the employer was specifically authorized by
										USCIS.
										<div className="col-form-label  pt-0">
											<label htmlFor="exampleFormControlTextarea1" />
											<textarea
												className="form-control"
												id="exampleFormControlTextarea1"
												rows={5}
												defaultValue={""}
											/>
										</div>
									</legend>
								</div>
								<div className="row">
									<legend className="col-form-label  pt-0">
										15. Are you, or other person included on the application, currently or have you
										ever been a J-1 exchange visitor or a J-2 dependant of a J-1 exchange visitor?
									</legend>
									<div className="col-md-10">
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												name="gridRadios"
												id="gridRadios1"
												value="option1"
												checked
											/>
											<label className="form-check-label" htmlFor="gridRadios1">
												Yes
											</label>
										</div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												name="gridRadios"
												id="gridRadios2"
												value="option2"
											/>
											<label className="form-check-label" htmlFor="gridRadios2">
												No
											</label>
										</div>
									</div>
								</div>{" "}
								<div className="col-md-10">
									<p>
										If you answered {'"YES"'} you must provide the dates you maintained a J-1/J-2
										status.
									</p>
								</div>
								<div className="row">
									Part 5.
									<legend className="col-form-label  pt-0"> 1.a.</legend>
									<div className="col-md">
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												name="gridRadios"
												id="gridRadios1"
												value="option1"
												checked
											/>
											<label className="form-check-label" htmlFor="gridRadios1">
												I can read and understand English, and I have read and understand every
												question and instruction on this application and my answer to every
												question.
											</label>
										</div>{" "}
										<legend className="col-form-label  pt-0"> 1.b.</legend>
										<div className="col-md">
											<div className="form-check">
												<input
													className="form-check-input"
													type="radio"
													name="gridRadios"
													id="gridRadios2"
													value="option2"
												/>
												<label className="form-check-label" htmlFor="gridRadios2">
													The interpreter read to me every question and instruction on this
													application and my answer to every question in {"   "}
													<input Language /> a language in which I am fluent, and I understand
													everything.
												</label>
											</div>
											<div className="form-row">
												<div className="col-md mb-3">
													<label htmlFor="validationDefault01">
														Interpreter&#39;s Last Name
													</label>
													<input
														type="text"
														className="form-control"
														id="validationDefault01"
														placeholder="Last name"
														required
													/>
												</div>
												<div className="col-md mb-3">
													<label htmlFor="validationDefault02">
														Interpreter&#39;s First Name
													</label>
													<input
														type="text"
														className="form-control"
														id="validationDefault02"
														placeholder="First name"
														required
													/>
												</div>
												<div className="col-md mb-3">
													<label htmlFor="validationDefault02">
														Interpreter&#39;s Business/Organization Name
													</label>
													<input
														type="text"
														className="form-control"
														id="validationDefault02"
														placeholder="Business name"
														required
													/>
												</div>
											</div>
											<div className="form-row">
												<div className="col-md-4 mb-3">
													<label htmlFor="validationDefault01">
														Interpreter&#39;s Daytime Phone Number
													</label>
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
													<label htmlFor="validationDefault02">
														Interpreter&#39;s Mobile Phone Number
													</label>
													<input
														type="tel"
														className="form-control"
														id="validationDefault02"
														placeholder="123-456-7890"
														maxLength="12"
													/>
												</div>
												<div className="col-md mb-3">
													<label htmlFor="inputEmail">Interpreter&#39;s Email Address</label>
													<input
														type="email"
														className="form-control"
														id="inputEmail"
														placeholder="email"
													/>
												</div>
											</div>

											<div className="form-group">
												<label htmlFor="inputAddress">Interpreter&#39;s Mailing Address</label>
												<input
													type="text"
													className="form-control"
													id="inputAddress"
													placeholder="Number, Street name"
												/>
											</div>
											<div className="form-group">
												<form>
													<div className="checkbox-inline">
														<label>
															<input type="checkbox" value="" />
															{"  "}
															Apartment{" "}
															<input type="apt" className="form-control" id="apartment" />
														</label>
													</div>
													<div className="checkbox-inline">
														<label>
															{" "}
															<input type="checkbox" value="" />
															{"  "}
															Suite{" "}
															<input type="ste" className="form-control" id="suite" />
														</label>
													</div>
													<div className="checkbox-inline">
														<label>
															<input type="checkbox" value="" />
															{"  "}
															Floor{" "}
															<input type="floor" className="form-control" id="floor" />
														</label>
													</div>
												</form>
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
														<option value="AK">Alaska</option>
														<option value="AZ">Arizona</option>
														<option value="AR">Arkansas</option>
														<option value="CA">California</option>
														<option value="CO">Colorado</option>
														<option value="CT">Connecticut</option>
														<option value="DE">Delaware</option>
														<option value="DC">District Of Columbia</option>
														<option value="FL">Florida</option>
														<option value="GA">Georgia</option>
														<option value="HI">HI</option>
														<option value="ID">Idaho</option>
														<option value="IL">Illinois</option>
														<option value="IN">Indiana</option>
														<option value="IA">IA</option>
														<option value="KS">Kansas</option>
														<option value="KY">Kentucky</option>
														<option value="LA">Louisiana</option>
														<option value="ME">Maine</option>
														<option value="MD">Maryland</option>
														<option value="MA">Massachusetts</option>
														<option value="MI">Michigan</option>
														<option value="MN">Minnesota</option>
														<option value="MS">Mississippi</option>
														<option value="MO">Missouri</option>
														<option value="MT">Montana</option>
														<option value="NE">Nebraska</option>
														<option value="NV">Nevada</option>
														<option value="NH">New Hampshire</option>
														<option value="NJ">New Jersey</option>
														<option value="NM">New Mexico</option>
														<option value="NY">New York</option>
														<option value="NC">NC</option>
														<option value="ND">North Dakota</option>
														<option value="OH">Ohio</option>
														<option value="OK">Oklahoma</option>
														<option value="OR">Oregon</option>
														<option value="PA">Pennsylvania</option>
														<option value="RI">Rhode Island</option>
														<option value="SC">South Carolina</option>
														<option value="SD">South Dakota</option>
														<option value="TN">Tennessee</option>
														<option value="TX">Vermontxas</option>
														<option value="UT">Utah</option>
														<option value="VT">VT</option>
														<option value="VA">VA</option>
														<option value="WA">Washington</option>
														<option value="WV">WV</option>
														<option value="WI">Wisconsin</option>
														<option value="WY">Wyoming</option>
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
										</div>
										<legend className="col-form-label  pt-0"> 2.</legend>
										<div className="col-md">
											<div className="form-check">
												<input
													className="form-check-input"
													type="radio"
													name="gridRadios"
													id="gridRadios2"
													value="option2"
												/>
												<label className="form-check-label" htmlFor="gridRadios2">
													At my request, the preparer named {"   "}
													<input Name /> prepared this application for me based only upon
													information I provided or authorized.
												</label>
											</div>
											<div className="form-row">
												<div className="col-md mb-3">
													<label htmlFor="validationDefault01">
														Preparer&#39;s Last Name
													</label>
													<input
														type="text"
														className="form-control"
														id="validationDefault01"
														placeholder="Last name"
														required
													/>
												</div>
												<div className="col-md mb-3">
													<label htmlFor="validationDefault02">
														Preparer&#39;s First Name
													</label>
													<input
														type="text"
														className="form-control"
														id="validationDefault02"
														placeholder="First name"
														required
													/>
												</div>
												<div className="col-md mb-3">
													<label htmlFor="validationDefault02">
														Preparer&#39;s Business/Organization Name
													</label>
													<input
														type="text"
														className="form-control"
														id="validationDefault02"
														placeholder="Business name"
														required
													/>
												</div>
											</div>
											<div className="form-row">
												<div className="col-md-4 mb-3">
													<label htmlFor="validationDefault01">
														Preparer&#39;s Daytime Phone Number
													</label>
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
													<label htmlFor="validationDefault02">
														Preparer&#39;s Mobile Phone Number
													</label>
													<input
														type="tel"
														className="form-control"
														id="validationDefault02"
														placeholder="123-456-7890"
														maxLength="12"
													/>
												</div>
												<div className="col-md mb-3">
													<label htmlFor="inputEmail">Preparer&#39;s Email Address</label>
													<input
														type="email"
														className="form-control"
														id="inputEmail"
														placeholder="email"
													/>
												</div>
											</div>

											<div className="form-group">
												<label htmlFor="inputAddress">Preparer&#39;s Mailing Address</label>
												<input
													type="text"
													className="form-control"
													id="inputAddress"
													placeholder="Number, Street name"
												/>
											</div>
											<div className="form-group">
												<form>
													<div className="checkbox-inline">
														<label>
															<input type="checkbox" value="" />
															{"  "}
															Apartment{" "}
															<input type="apt" className="form-control" id="apartment" />
														</label>
													</div>
													<div className="checkbox-inline">
														<label>
															{" "}
															<input type="checkbox" value="" />
															{"  "}
															Suite{" "}
															<input type="ste" className="form-control" id="suite" />
														</label>
													</div>
													<div className="checkbox-inline">
														<label>
															<input type="checkbox" value="" />
															{"  "}
															Floor{" "}
															<input type="floor" className="form-control" id="floor" />
														</label>
													</div>
												</form>
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
														<option value="AK">Alaska</option>
														<option value="AZ">Arizona</option>
														<option value="AR">Arkansas</option>
														<option value="CA">California</option>
														<option value="CO">Colorado</option>
														<option value="CT">Connecticut</option>
														<option value="DE">Delaware</option>
														<option value="DC">District Of Columbia</option>
														<option value="FL">Florida</option>
														<option value="GA">Georgia</option>
														<option value="HI">HI</option>
														<option value="ID">Idaho</option>
														<option value="IL">Illinois</option>
														<option value="IN">Indiana</option>
														<option value="IA">IA</option>
														<option value="KS">Kansas</option>
														<option value="KY">Kentucky</option>
														<option value="LA">Louisiana</option>
														<option value="ME">Maine</option>
														<option value="MD">Maryland</option>
														<option value="MA">Massachusetts</option>
														<option value="MI">Michigan</option>
														<option value="MN">Minnesota</option>
														<option value="MS">Mississippi</option>
														<option value="MO">Missouri</option>
														<option value="MT">Montana</option>
														<option value="NE">Nebraska</option>
														<option value="NV">Nevada</option>
														<option value="NH">New Hampshire</option>
														<option value="NJ">New Jersey</option>
														<option value="NM">New Mexico</option>
														<option value="NY">New York</option>
														<option value="NC">NC</option>
														<option value="ND">North Dakota</option>
														<option value="OH">Ohio</option>
														<option value="OK">Oklahoma</option>
														<option value="OR">Oregon</option>
														<option value="PA">Pennsylvania</option>
														<option value="RI">Rhode Island</option>
														<option value="SC">South Carolina</option>
														<option value="SD">South Dakota</option>
														<option value="TN">Tennessee</option>
														<option value="TX">Vermontxas</option>
														<option value="UT">Utah</option>
														<option value="VT">VT</option>
														<option value="VA">VA</option>
														<option value="WA">Washington</option>
														<option value="WV">WV</option>
														<option value="WI">Wisconsin</option>
														<option value="WY">Wyoming</option>
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
										</div>
										<legend className="col-form-label  pt-0"> 2.</legend>
										<div className="col-md">
											<div className="form-check">
												<input
													className="form-check-input"
													type="radio"
													name="gridRadios"
													id="gridRadios2"
													value="option2"
												/>
												<label className="form-check-label" htmlFor="gridRadios2">
													At my request, the preparer named {"   "}
													<input Name /> prepared this application for me based only upon
													information I provided or authorized.
												</label>
											</div>
										</div>
									</div>
								</div>
								<div className="row">
									<legend className="col-form-label  pt-0">
										Are you, or any other person included on the application, an applicant for an
										immigration visa?
									</legend>
									<div className="col-md-10">
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												name="gridRadios"
												id="gridRadios1"
												value="option1"
												checked
											/>
											<label className="form-check-label" htmlFor="gridRadios1">
												Yes
											</label>
										</div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												name="gridRadios"
												id="gridRadios2"
												value="option2"
											/>
											<label className="form-check-label" htmlFor="gridRadios2">
												No
											</label>
										</div>
									</div>
								</div>
								<div className="row">
									<legend className="col-form-label  pt-0">
										Are you, or any other person included on the application, an applicant for an
										immigration visa?
									</legend>
									<div className="col-md-10">
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												name="gridRadios"
												id="gridRadios1"
												value="option1"
												checked
											/>
											<label className="form-check-label" htmlFor="gridRadios1">
												Yes
											</label>
										</div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												name="gridRadios"
												id="gridRadios2"
												value="option2"
											/>
											<label className="form-check-label" htmlFor="gridRadios2">
												No
											</label>
										</div>
									</div>
								</div>
								<div className="row">
									<legend className="col-form-label  pt-0">
										Are you, or any other person included on the application, an applicant for an
										immigration visa?
									</legend>
									<div className="col-md-10">
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												name="gridRadios"
												id="gridRadios1"
												value="option1"
												checked
											/>
											<label className="form-check-label" htmlFor="gridRadios1">
												Yes
											</label>
										</div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												name="gridRadios"
												id="gridRadios2"
												value="option2"
											/>
											<label className="form-check-label" htmlFor="gridRadios2">
												No
											</label>
										</div>
									</div>
								</div>
								<div className="row">
									<legend className="col-form-label  pt-0">
										Are you, or any other person included on the application, an applicant for an
										immigration visa?
									</legend>
									<div className="col-md-10">
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												name="gridRadios"
												id="gridRadios1"
												value="option1"
												checked
											/>
											<label className="form-check-label" htmlFor="gridRadios1">
												Yes
											</label>
										</div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												name="gridRadios"
												id="gridRadios2"
												value="option2"
											/>
											<label className="form-check-label" htmlFor="gridRadios2">
												No
											</label>
										</div>
									</div>
								</div>
								<div className="row">
									<legend className="col-form-label  pt-0">
										Are you, or any other person included on the application, an applicant for an
										immigration visa?
									</legend>
									<div className="col-md-10">
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												name="gridRadios"
												id="gridRadios1"
												value="option1"
												checked
											/>
											<label className="form-check-label" htmlFor="gridRadios1">
												Yes
											</label>
										</div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												name="gridRadios"
												id="gridRadios2"
												value="option2"
											/>
											<label className="form-check-label" htmlFor="gridRadios2">
												No
											</label>
										</div>
									</div>
								</div>
								<div className="row">
									<legend className="col-form-label  pt-0">
										Are you, or any other person included on the application, an applicant for an
										immigration visa?
									</legend>
									<div className="col-md-10">
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												name="gridRadios"
												id="gridRadios1"
												value="option1"
												checked
											/>
											<label className="form-check-label" htmlFor="gridRadios1">
												Yes
											</label>
										</div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												name="gridRadios"
												id="gridRadios2"
												value="option2"
											/>
											<label className="form-check-label" htmlFor="gridRadios2">
												No
											</label>
										</div>
									</div>
								</div>
								<div className="row">
									<legend className="col-form-label  pt-0">
										Are you, or any other person included on the application, an applicant for an
										immigration visa?
									</legend>
									<div className="col-md-10">
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												name="gridRadios"
												id="gridRadios1"
												value="option1"
												checked
											/>
											<label className="form-check-label" htmlFor="gridRadios1">
												Yes
											</label>
										</div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												name="gridRadios"
												id="gridRadios2"
												value="option2"
											/>
											<label className="form-check-label" htmlFor="gridRadios2">
												No
											</label>
										</div>
									</div>
								</div>
								<div className="row">
									<legend className="col-form-label  pt-0">
										Are you, or any other person included on the application, an applicant for an
										immigration visa?
									</legend>
									<div className="col-md-10">
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												name="gridRadios"
												id="gridRadios1"
												value="option1"
												checked
											/>
											<label className="form-check-label" htmlFor="gridRadios1">
												Yes
											</label>
										</div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												name="gridRadios"
												id="gridRadios2"
												value="option2"
											/>
											<label className="form-check-label" htmlFor="gridRadios2">
												No
											</label>
										</div>
									</div>
								</div>
								<div className="row">
									<legend className="col-form-label  pt-0">
										Are you, or any other person included on the application, an applicant for an
										immigration visa?
									</legend>
									<div className="col-md-10">
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												name="gridRadios"
												id="gridRadios1"
												value="option1"
												checked
											/>
											<label className="form-check-label" htmlFor="gridRadios1">
												Yes
											</label>
										</div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												name="gridRadios"
												id="gridRadios2"
												value="option2"
											/>
											<label className="form-check-label" htmlFor="gridRadios2">
												No
											</label>
										</div>
									</div>
								</div>
							</fieldset>
						</form>

						<div className="form-row">
							<div className="form-group col-md-6">
								<label htmlFor="inputEmail4">Email</label>
								<input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="inputPassword4">Password</label>
								<input
									type="password"
									className="form-control"
									id="inputPassword4"
									placeholder="Password"
								/>
							</div>
						</div>
						<div className="form-group">
							<div className="form-check">
								<input className="form-check-input" type="checkbox" id="gridCheck" />
								<label className="form-check-label" htmlFor="gridCheck">
									Check me out
								</label>
							</div>
						</div>
						<button type="submit" className="btn btn-primary">
							Sign in
						</button>
						<div className="form row">
							<div className="col-lg-6">
								<div className="bs-component">
									<form>
										<fieldset>
											<legend>Legend</legend>
											<div className="form-group row">
												<label htmlFor="staticEmail" className="col-sm-2 col-form-label">
													Email
												</label>
												<div className="col-sm-10">
													<input
														type="text"
														readOnly
														className="form-control-plaintext"
														id="staticEmail"
														defaultValue="email@example.com"
													/>
												</div>
											</div>
											<div className="form-group">
												<label htmlFor="exampleInputEmail1">Email address</label>
												<input
													type="email"
													className="form-control"
													id="exampleInputEmail1"
													aria-describedby="emailHelp"
													placeholder="Enter email"
												/>
												<small id="emailHelp" className="form-text text-muted">
													We&#39;ll never share your email with anyone else.
												</small>
											</div>
											<div className="form-group">
												<label htmlFor="exampleInputPassword1">Password</label>
												<input
													type="password"
													className="form-control"
													id="exampleInputPassword1"
													placeholder="Password"
												/>
											</div>
											<div className="form-group">
												<label htmlFor="exampleSelect1">Example select</label>
												<select className="form-control" id="exampleSelect1">
													<option>1</option>
													<option>2</option>
													<option>3</option>
													<option>4</option>
													<option>5</option>
												</select>
											</div>
											<div className="form-group">
												<label htmlFor="exampleSelect2">Example multiple select</label>
												<select multiple className="form-control" id="exampleSelect2">
													<option>1</option>
													<option>2</option>
													<option>3</option>
													<option>4</option>
													<option>5</option>
												</select>
											</div>
											<div className="form-group">
												<label htmlFor="exampleTextarea">Example textarea</label>
												<textarea
													className="form-control"
													id="exampleTextarea"
													rows={3}
													defaultValue={""}
												/>
											</div>
											<div className="form-group">
												<label htmlFor="exampleInputFile">File input</label>
												<input
													type="file"
													className="form-control-file"
													id="exampleInputFile"
													aria-describedby="fileHelp"
												/>
												<small id="fileHelp" className="form-text text-muted">
													This is some placeholder block-level help text for the above input.
													It&#39;s a bit lighter and easily wraps to a new line.
												</small>
											</div>
											<fieldset className="form-group">
												<legend>Radio buttons</legend>
												<div className="form-check">
													<label className="form-check-label">
														<input
															type="radio"
															className="form-check-input"
															name="optionsRadios"
															id="optionsRadios1"
															defaultValue="option1"
															defaultChecked
														/>
														Option one is this and that—be sure to include why it&#39;s
														great
													</label>
												</div>
												<div className="form-check">
													<label className="form-check-label">
														<input
															type="radio"
															className="form-check-input"
															name="optionsRadios"
															id="optionsRadios2"
															defaultValue="option2"
														/>
														Option two can be something else and selecting it will deselect
														option one
													</label>
												</div>
												<div className="form-check disabled">
													<label className="form-check-label">
														<input
															type="radio"
															className="form-check-input"
															name="optionsRadios"
															id="optionsRadios3"
															defaultValue="option3"
															disabled
														/>
														Option three is disabled
													</label>
												</div>
											</fieldset>
											<fieldset className="form-group">
												<legend>Checkboxes</legend>
												<div className="form-check">
													<label className="form-check-label">
														<input
															className="form-check-input"
															type="checkbox"
															defaultValue
															defaultChecked
														/>
														Option one is this and that—be sure to include why itcl&#39;s
														great
													</label>
												</div>
												<div className="form-check disabled">
													<label className="form-check-label">
														<input
															className="form-check-input"
															type="checkbox"
															defaultValue
															disabled
														/>
														Option two is disabled
													</label>
												</div>
											</fieldset>
											<button type="submit" className="btn btn-primary">
												Submit
											</button>
										</fieldset>
									</form>
								</div>
							</div>
							<div className="col-lg-4 offset-lg-1">
								<form className="bs-component">
									<div className="form-group">
										<fieldset disabled>
											<label className="control-label" htmlFor="disabledInput">
												Disabled input
											</label>
											<input
												className="form-control"
												id="disabledInput"
												type="text"
												placeholder="Disabled input here..."
												disabled
											/>
										</fieldset>
									</div>
									<div className="form-group">
										<fieldset>
											<label className="control-label" htmlFor="readOnlyInput">
												Readonly input
											</label>
											<input
												className="form-control"
												id="readOnlyInput"
												type="text"
												placeholder="Readonly input here…"
												readOnly
											/>
										</fieldset>
									</div>
									<div className="form-group has-success">
										<label className="form-control-label" htmlFor="inputSuccess1">
											Valid input
										</label>
										<input
											type="text"
											defaultValue="correct value"
											className="form-control is-valid"
											id="inputValid"
										/>
										<div className="valid-feedback">Success! Youcl&#39;ve done it.</div>
									</div>
									<div className="form-group has-danger">
										<label className="form-control-label" htmlFor="inputDanger1">
											Invalid input
										</label>
										<input
											type="text"
											defaultValue="wrong value"
											className="form-control is-invalid"
											id="inputInvalid"
										/>
										<div className="invalid-feedback">
											Sorry, that usernamecl&#39;s taken. Try another?
										</div>
									</div>
									<div className="form-group">
										<label className="col-form-label col-form-label-lg" htmlFor="inputLarge">
											Large input
										</label>
										<input
											className="form-control form-control-lg"
											type="text"
											placeholder=".form-control-lg"
											id="inputLarge"
										/>
									</div>
									<div className="form-group">
										<label className="col-form-label" htmlFor="inputDefault">
											Default input
										</label>
										<input
											type="text"
											className="form-control"
											placeholder="Default input"
											id="inputDefault"
										/>
									</div>
									<div className="form-group">
										<label className="col-form-label col-form-label-sm" htmlFor="inputSmall">
											Small input
										</label>
										<input
											className="form-control form-control-sm"
											type="text"
											placeholder=".form-control-sm"
											id="inputSmall"
										/>
									</div>
									<div className="form-group">
										<label className="control-label">Input addons</label>
										<div className="form-group">
											<div className="input-group mb-3">
												<div className="input-group-prepend">
													<span className="input-group-text">$</span>
												</div>
												<input
													type="text"
													className="form-control"
													aria-label="Amount (to the nearest dollar)"
												/>
												<div className="input-group-append">
													<span className="input-group-text">.00</span>
												</div>
											</div>
										</div>
									</div>
								</form>
								<div className="bs-component">
									<fieldset>
										<legend>Custom forms</legend>
										<div className="form-group">
											<div className="custom-control custom-radio">
												<input
													type="radio"
													id="customRadio1"
													name="customRadio"
													className="custom-control-input"
													defaultChecked
												/>
												<label className="custom-control-label" htmlFor="customRadio1">
													Toggle this custom radio
												</label>
											</div>
											<div className="custom-control custom-radio">
												<input
													type="radio"
													id="customRadio2"
													name="customRadio"
													className="custom-control-input"
												/>
												<label className="custom-control-label" htmlFor="customRadio2">
													Or toggle this other custom radio
												</label>
											</div>
											<div className="custom-control custom-radio">
												<input
													type="radio"
													id="customRadio3"
													name="customRadio"
													className="custom-control-input"
													disabled
												/>
												<label className="custom-control-label" htmlFor="customRadio3">
													Disabled custom radio
												</label>
											</div>
										</div>
										<div className="form-group">
											<div className="custom-control custom-checkbox">
												<input
													type="checkbox"
													className="custom-control-input"
													id="customCheck1"
													defaultChecked
												/>
												<label className="custom-control-label" htmlFor="customCheck1">
													Check this custom checkbox
												</label>
											</div>
											<div className="custom-control custom-checkbox">
												<input
													type="checkbox"
													className="custom-control-input"
													id="customCheck2"
													disabled
												/>
												<label className="custom-control-label" htmlFor="customCheck2">
													Disabled custom checkbox
												</label>
											</div>
										</div>
										<div className="form-group">
											<div className="custom-control custom-switch">
												<input
													type="checkbox"
													className="custom-control-input"
													id="customSwitch1"
													defaultChecked
												/>
												<label className="custom-control-label" htmlFor="customSwitch1">
													Toggle this switch element
												</label>
											</div>
											<div className="custom-control custom-switch">
												<input
													type="checkbox"
													className="custom-control-input"
													disabled
													id="customSwitch2"
												/>
												<label className="custom-control-label" htmlFor="customSwitch2">
													Disabled switch element
												</label>
											</div>
										</div>
										<div className="form-group">
											<select className="custom-select">
												<option selected>Open this select menu</option>
												<option value={1}>One</option>
												<option value={2}>Two</option>
												<option value={3}>Three</option>
											</select>
										</div>
										<div className="form-group">
											<div className="input-group mb-3">
												<div className="custom-file">
													<input
														type="file"
														className="custom-file-input"
														id="inputGroupFile02"
													/>
													<label className="custom-file-label" htmlFor="inputGroupFile02">
														Choose file
													</label>
												</div>
												<div className="input-group-append">
													<span className="input-group-text" id>
														Upload
													</span>
												</div>
											</div>
										</div>
									</fieldset>
								</div>
							</div>
						</div>
						<div className="form-group">
							<div className="form-check">
								<input
									className="form-check-input"
									type="checkbox"
									value=""
									id="invalidCheck2"
									required
								/>
								<label className="form-check-label" htmlFor="invalidCheck2">
									Agree to terms and conditions
								</label>
							</div>
						</div>
						<button className="btn btn-primary" type="submit">
							Submit form
						</button>
					</form>
				</div>
			</div>
		);
	}
}
