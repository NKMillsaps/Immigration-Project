import React from "react";
import "../../styles/home.scss";

export class Form extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="text-justify mt-5">
					<form>
						<div className="form-row">
							<h2>Part 1</h2>
						</div>
						<div className="form-row">
							<div className="col-md mb-3">
								<label htmlFor="validationDefault03">A-Number (if any)</label>
								<input
									type="text/number"
									className="form-control"
									id="validationDefault03"
									placeholder="A-Number"
									maxLength="11"
								/>
							</div>
							<div className="col-md mb-3">
								<label htmlFor="validationDefault03">USCIS Online Account Number (if any)</label>
								<input
									type="text/number"
									className="form-control"
									id="validationDefault03"
									placeholder="USCIS Acct #"
								/>
							</div>
							<div className="col-md mb-3">
								<label htmlFor="validationDefault03">U.S.Social Security Number (if any)</label>
								<input
									type="number"
									className="form-control"
									id="validationDefault03"
									placeholder="SSN"
									maxLength="11"
								/>
							</div>
						</div>
						<hr />
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
								/>
							</div>
						</div>
						<div className="form-row">
							<p>Please provide other names you ever used (if any)</p>
						</div>
						<div className="form-row">
							<div className="col-md-4 mb-3">
								<label htmlFor="validationDefault01">Last Name (Family name)</label>
								<input
									type="text"
									className="form-control"
									id="validationDefault01"
									placeholder="Last name"
								/>
							</div>
							<div className="col-md-4 mb-3">
								<label htmlFor="validationDefault02">First Name</label>
								<input
									type="text"
									className="form-control"
									id="validationDefault02"
									placeholder="First name"
								/>
							</div>
							<div className="col-md-4 mb-3">
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
							<div className="col-md-4 mb-3">
								<label htmlFor="validationDefault01">Last Name (Family name)</label>
								<input
									type="text"
									className="form-control"
									id="validationDefault01"
									placeholder="Last name"
								/>
							</div>
							<div className="col-md-4 mb-3">
								<label htmlFor="validationDefault02">First Name</label>
								<input
									type="text"
									className="form-control"
									id="validationDefault02"
									placeholder="First name"
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
								<label htmlFor="validationDefault01">Last Name (Family name)</label>
								<input
									type="text"
									className="form-control"
									id="validationDefault01"
									placeholder="Last name"
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
									<label className="form-check-label col-md" htmlFor="inlinecheckbox3">
										Floor
									</label>
								</div>
								<input type="text" className="form-control col-sm" placeholder="#" />
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
							<div className="col-md-6 mb-3">
								<label htmlFor="inputAddress">U.S. Physical Address</label>
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
									<label className="form-check-label col-md" htmlFor="inlinecheckbox3">
										Floor
									</label>
								</div>
								<input type="text" className="form-control col-sm" placeholder="#" />
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
									<label className="form-check-label col-md" htmlFor="inlinecheckbox3">
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
								<label htmlFor="validationDefault03">
									Nonimmigrant Visa Number from your Passport (if any)
								</label>
								<input
									type="number"
									className="form-control"
									id="validationDefault03"
									placeholder="XXXXXXXXXXXXXX"
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
							<div className="col-md-6 mb-3">
								<label htmlFor="inputAddress">U.S. Physical Address</label>
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
									<label className="form-check-label col-md" htmlFor="inlinecheckbox3">
										Floor
									</label>
								</div>
								<input type="text" className="form-control col-sm" placeholder="#" />
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
									type="checkbox"
									name="gridcheckboxs"
									id="gridcheckboxs1"
									value="option1"
									checked
								/>
								<label className="form-check-label" htmlFor="gridcheckboxs1">
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
							The total number of people (incl uding me) in this application is: <input Number />{" "}
							(Complete the supplement for each co-applicant.)&nbsp;
						</div>
						<div className="form-row">
							<div className="col-md-6 mb-3">
								<label htmlFor="validationDefault03">
									1. I/We request that my/our current or requested status (Visa) be extended until
								</label>
								<input
									type="date"
									className="form-control-sm"
									id="validationDefault03"
									placeholder="MM/DD/YYYY"
									maxLength="4"
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
										type="checkbox"
										name="gridcheckboxs"
										id="gridcheckboxs1"
										value="option1"
										checked
									/>
									<label className="form-check-label" htmlFor="gridcheckboxs1">
										Yes
									</label>
								</div>
								<div className="form-check">
									<input
										className="form-check-input"
										type="checkbox"
										name="gridcheckboxs"
										id="gridcheckboxs2"
										value="option2"
									/>
									<label className="form-check-label" htmlFor="gridcheckboxs2">
										No
									</label>
								</div>
							</div>
						</div>
						<div className="form-row">
							<div className="col-md mb-3">
								<label htmlFor="validationDefault01">
									2.b. If you answered {"YES"} provide USCIS Receipt Number
								</label>
								<input type="number" className="form-control" id="validationDefault01" required />
							</div>
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
										type="checkbox"
										name="gridcheckboxs"
										id="gridcheckboxs1"
										value="option1"
										checked
									/>
									<label className="form-check-label" htmlFor="gridcheckboxs1">
										Yes, filed with this Form I-539
									</label>
								</div>
								<div className="form-check">
									<input
										className="form-check-input"
										type="checkbox"
										name="gridcheckboxs"
										id="gridcheckboxs2"
										value="option2"
									/>
									<label className="form-check-label" htmlFor="gridcheckboxs2">
										Yes, filed preiously and pending with USCIS
									</label>
								</div>
								<div className="form-check">
									<input
										className="form-check-input"
										type="checkbox"
										name="gridcheckboxs"
										id="gridcheckboxs2"
										value="option2"
									/>
									<label className="form-check-label" htmlFor="gridcheckboxs2">
										No
									</label>
								</div>
							</div>
						</div>
						<div className="form-row">
							<div className="col-md mb-3">
								<label htmlFor="validationDefault01">
									3.b. If you answered {"YES"} provide USCIS Receipt Number
								</label>
								<input type="number" className="form-control" id="validationDefault01" required />
							</div>
							<div className="col-md mb-3">
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

						<div className="form-row">
							If the petition or application is pending with USCIS, also provide the following information
						</div>
						<div className="form-row">
							<div>
								{" "}
								<h2>Part 3. Emplyment History</h2>
							</div>
						</div>

						<div className="form-row">
							Provide your employment history for the last 5 (five) years inside or outside of the U.S.
							Provide the most recent emplyment first.
						</div>
						<div className="form-row">Employer 1 (current/most recent).</div>
						<div className="form-row">
							<div className="col-md-4 mb-3">
								<label htmlFor="validationDefault02">Name of Employer/Company/Organization</label>
								<input
									type="text"
									className="form-control"
									id="validationDefault02"
									placeholder="Employer"
								/>
							</div>
						</div>

						<div className="form-row">
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
									<label className="form-check-label col-md" htmlFor="inlinecheckbox3">
										Floor
									</label>
								</div>
								<input type="text" className="form-control col-sm" placeholder="#" />
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

						<div className="form-row">another row</div>

						<div className="form-row">
							<div className="form-row">
								<h2>Part 3</h2>
							</div>

							<div className="form-row">another row</div>
							<div className="form-row">another row</div>
							<div className="form-row">
								<h2>Part X</h2>
							</div>
						</div>
					</form>
				</div>
			</div>
		);
	}
}
