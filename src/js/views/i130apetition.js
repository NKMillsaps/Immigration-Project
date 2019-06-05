import React from "react";
import "../../styles/home.scss";

export class I130apetition extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="text-justify mt-5">
					<form>
						<div className="form-row">
							<h2>Part 1</h2>
						</div>
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
						<div className="form-row">
							<div className="col-md mb-3">
								<label htmlFor="inputAddress">U.S. Mailing Address</label>
								<input
									type="text"
									className="form-control"
									id="inputAddress"
									placeholder="Number, Street name"
								/>
							</div>
						</div>
						<div className="form-row">
							<div className="form-inline col-md">
								<div className="form-check form-check-inline">
									<input
										className="form-check-input"
										type="radio"
										name="inlineRadioOptions"
										id="inlineRadio1"
										value="option1"
									/>
									<label className="form-check-label" htmlFor="inlineRadio1">
										Apartment
									</label>
								</div>
								<div className="form-check form-check-inline">
									<input
										className="form-check-input"
										type="radio"
										name="inlineRadioOptions"
										id="inlineRadio2"
										value="option2"
									/>
									<label className="form-check-label col-md" htmlFor="inlineRadio2">
										Suite
									</label>
								</div>
								<div className="form-check form-check-inline">
									<input
										className="form-check-input"
										type="radio"
										name="inlineRadioOptions"
										id="inlineRadio3"
										value="option3"
									/>
									<label className="form-check-label col-md" htmlFor="inlineRadio3">
										Floor
									</label>
								</div>
								<input type="text" className="form-control col-md" placeholder="#" />
							</div>
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
							<div className="col-md mb-3">
								<label htmlFor="inputAddress">U.S. Physical Address</label>
								<input
									type="text"
									className="form-control"
									id="inputAddress"
									placeholder="Number, Street name"
								/>
							</div>
						</div>
						<div className="form-row">
							<div className="form-inline col-md">
								<div className="form-check form-check-inline">
									<input
										className="form-check-input"
										type="radio"
										name="inlineRadioOptions"
										id="inlineRadio1"
										value="option1"
									/>
									<label className="form-check-label" htmlFor="inlineRadio1">
										Apartment
									</label>
								</div>
								<div className="form-check form-check-inline">
									<input
										className="form-check-input"
										type="radio"
										name="inlineRadioOptions"
										id="inlineRadio2"
										value="option2"
									/>
									<label className="form-check-label col-md" htmlFor="inlineRadio2">
										Suite
									</label>
								</div>
								<div className="form-check form-check-inline">
									<input
										className="form-check-input"
										type="radio"
										name="inlineRadioOptions"
										id="inlineRadio3"
										value="option3"
									/>
									<label className="form-check-label col-md" htmlFor="inlineRadio3">
										Floor
									</label>
								</div>
								<input type="text" className="form-control col-md" placeholder="#" />
							</div>
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
							<h2>Part 4</h2>
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
						<div className="form-row">
							<div className="col-md mb-3">
								<label htmlFor="inputAddress">Physical Address in Your Home Country</label>
								<input
									type="text"
									className="form-control"
									id="inputAddress"
									placeholder="Number, Street name"
								/>
							</div>
						</div>
						<div className="form-row">
							<div className="form-inline col-md">
								<div className="form-check form-check-inline">
									<input
										className="form-check-input"
										type="radio"
										name="inlineRadioOptions"
										id="inlineRadio1"
										value="option1"
									/>
									<label className="form-check-label" htmlFor="inlineRadio1">
										Apartment
									</label>
								</div>
								<div className="form-check form-check-inline">
									<input
										className="form-check-input"
										type="radio"
										name="inlineRadioOptions"
										id="inlineRadio2"
										value="option2"
									/>
									<label className="form-check-label col-md" htmlFor="inlineRadio2">
										Suite
									</label>
								</div>
								<div className="form-check form-check-inline">
									<input
										className="form-check-input"
										type="radio"
										name="inlineRadioOptions"
										id="inlineRadio3"
										value="option3"
									/>
									<label className="form-check-label col-md" htmlFor="inlineRadio3">
										Floor
									</label>
								</div>
								<input type="text" className="form-control col-md" placeholder="#" />
							</div>
						</div>
						<div className="form-row">
							<div className="col-md-6 mb-3">
								<label htmlFor="validationDefault03">City/Town/Village</label>
								<input type="text" className="form-control" id="validationDefault03" required />
							</div>

							<div className="col-md-3 mb-3">
								<label htmlFor="inputState">State/Province/Region/Area</label>
								<input type="text" className="form-control" id="validationDefault03" required />
							</div>
							<div className="col-md-3 mb-3">
								<label htmlFor="validationDefault05">Zip code/Postal Code</label>
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
							{" "}
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
									Select this box if you were granted Duration of Status (D/S).
								</label>
							</div>{" "}
						</div>

						<div className="form-row">
							<h2>Part 2</h2>
						</div>
						<div className="form-row">I am applying for (select ONLY ONE box)</div>
						<div className="form">
							<div className="form-check">
								<input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
								<label className="form-check-label" htmlFor="defaultCheck1">
									Reinstatement of student status.
								</label>
							</div>
							<div className="form-check">
								<input className="form-check-input" type="checkbox" value="" id="defaultCheck2" />
								<label className="form-check-label" htmlFor="defaultCheck2">
									An extension of stay in my current status.
								</label>
							</div>
							<div className="form-check">
								<input className="form-check-input" type="checkbox" value="" id="defaultCheck2" />
								<label className="form-check-label" htmlFor="defaultCheck2">
									A change of status.
								</label>
							</div>
						</div>
						<div className="form-row">
							<div className="col-md mb-3">
								<label htmlFor="validationDefault03">New status and effective date of change</label>
								<input
									type="date"
									className="form-control"
									id="validationDefault03"
									placeholder="MM/DD/YYYY"
									required
								/>
							</div>
							<div className="col-md mb-3">
								<label htmlFor="validationDefault03">The change of status I am requesting is:</label>
								<input
									type="text"
									className="form-control"
									id="validationDefault03"
									placeholder="B1/B2, F1/F2, M1/M2, J1/J2"
									required
								/>
							</div>
						</div>

						<div className="form-row">
							Number of people included in this application (select ONLY ONE box):
						</div>
						<div className="form">
							<div className="form-check">
								<input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
								<label className="form-check-label" htmlFor="defaultCheck1">
									I am the only applicant.
								</label>
							</div>
							<div className="form-check">
								<input className="form-check-input" type="checkbox" value="" id="defaultCheck2" />
								<label className="form-check-label" htmlFor="defaultCheck2">
									Members of my family are filing this application with me.
								</label>
							</div>
						</div>

						<div className="form-row">
							The total number of people (including me) in this application is: <input Number /> (Complete
							the supplement for each co-applicant.)&nbsp;
						</div>
						<div className="form-row">
							<div className="col-md mb-3">
								<label htmlFor="validationDefault03">
									1. I/We request that my/our current or requested status (Visa) be extended until
								</label>
								<input
									type="date"
									className="form-control-sm"
									id="validationDefault03"
									placeholder="MM/DD/YYYY"
									required
								/>
							</div>
						</div>
						<div className="form-row">
							<legend className="col-form-label  pt-0">
								2.a. Is this application based on an extension or change of status already granted to
								your spouse, child, or parent?
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
						<div className="form-row">
							2.b. If you answered {"YES"} provide USCIS Receipt Number &#32;
							<input type="number" className="form-control col-md-3" placeholder="#" />
						</div>
						<div className="form-row">
							<legend className="col-form-label  pt-0">
								3.a. Is this application based on a separate petition or application to provide your
								spouse, child, or parent an extension or change of status?
							</legend>
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
										Yes, filed with this Form I-539
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
										Yes, filed preiously and pending with USCIS
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
						<div className="form-row">
							3.b. If you answered {"YES"} provide
							<div className="col-md-4 mb-3">
								<label htmlFor="validationDefault01">USCIS Receipt Number</label>
								<input type="number" className="form-control" id="validationDefault01" required />
							</div>
							<div className="col-md-4 mb-3">
								<label htmlFor="validationDefault02">First and Last Name of Petitioner/Applicant</label>
								<input
									type="text"
									className="form-control"
									id="validationDefault02"
									placeholder="Name"
									required
								/>
							</div>
							<div className="col-md mb-3">
								<label htmlFor="validationDefault03">Date Filed</label>
								<input
									type="date"
									className="form-control"
									id="validationDefault03"
									placeholder="MM/DD/YYYY"
									required
								/>
							</div>
						</div>
						<div className="form-row">3.b. If you answered {"YES"} provide</div>
						<div className="form-row">
							USCIS Receipt Number
							<input type="number" className="form-control col-md-3" placeholder="#" />
						</div>
						<div className="form-row">
							If the petition or application is pending with USCIS, also provide the following information
						</div>

						<div className="form-row">
							<h2>Part 3</h2>
						</div>

						<div className="form-row">another row</div>
						<div className="form-row">another row</div>
						<div className="form-row">
							<h2>Part X</h2>
						</div>
					</form>
				</div>
			</div>
		);
	}
}
