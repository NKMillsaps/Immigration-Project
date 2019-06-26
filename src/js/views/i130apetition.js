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
							<div className="col-md mb-3">
								<label htmlFor="inputEmail">Email Address (if any)</label>
								<input type="email" className="form-control" id="inputEmail" placeholder="email" />
							</div>
						</div>
						<div className="form-row">
							<div className="col-md mb-3">
								<label htmlFor="inputAddress">
									Physical Address for the past 5 years (inside or outside USA) 1
								</label>
								<input
									type="text"
									className="form-control"
									id="inputAddress"
									placeholder="Number, Street name"
								/>
							</div>
							<div className="col-md-4 mb-3">
								<label htmlFor="validationDefault03">City/Town</label>
								<input type="text" className="form-control" id="validationDefault03" />
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
								<input type="text" className="form-control col-md-2" placeholder="#" />
							</div>

							<div className="col-md-3 mb-3">
								<label htmlFor="inputState">State/Province/Region</label>

								<input type="text" className="form-control" placeholder="Zip" />
							</div>

							<div className="col-md-3 mb-3">
								<label htmlFor="validationDefault05">Zip code</label>
								<input
									type="number"
									className="form-control"
									id="validationDefault05"
									placeholder="Zip"
									maxLength="5"
								/>
							</div>
						</div>
						<div className="form-row">
							<div className="col-md-6 mb-3">
								<label htmlFor="validationDefault03">Country</label>
								<input type="text" className="form-control" id="validationDefault03" />
							</div>

							<div className="col-md mb-3">
								<label htmlFor="validationDef">Date From</label>
								<input type="date" className="form-control" id="validationDef" />
							</div>

							<div className="col-md mb-3">
								<label htmlFor="validationDef">Date To</label>
								<input type="date" className="form-control" id="validationDef" />
							</div>
						</div>

						<div className="form-row">
							<div className="col-md mb-3">
								<label htmlFor="inputAddress">Physical Address 2</label>
								<input
									type="text"
									className="form-control"
									id="inputAddress"
									placeholder="Number, Street name"
								/>
							</div>
							<div className="col-md-4 mb-3">
								<label htmlFor="validationDefault03">City/Town</label>
								<input type="text" className="form-control" id="validationDefault03" />
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
								<input type="text" className="form-control col-md-2" placeholder="#" />
							</div>

							<div className="col-md-3 mb-3">
								<label htmlFor="inputState">State/Province/Region</label>

								<input type="text" className="form-control" placeholder="Zip" />
							</div>

							<div className="col-md-3 mb-3">
								<label htmlFor="validationDefault05">Zip code</label>
								<input
									type="number"
									className="form-control"
									id="validationDefault05"
									placeholder="Zip"
									maxLength="5"
								/>
							</div>
						</div>
						<div className="form-row">
							<div className="col-md-6 mb-3">
								<label htmlFor="validationDefault03">Country</label>
								<input type="text" className="form-control" id="validationDefault03" />
							</div>

							<div className="col-md mb-3">
								<label htmlFor="validationDef">Date From</label>
								<input type="date" className="form-control" id="validationDef" />
							</div>

							<div className="col-md mb-3">
								<label htmlFor="validationDef">Date To</label>
								<input type="date" className="form-control" id="validationDef" />
							</div>
						</div>
						<div className="form-row">
							<div className="col-md mb-3">
								<label htmlFor="inputAddress">Last Physical Address Outside USA</label>
								<input
									type="text"
									className="form-control"
									id="inputAddress"
									placeholder="Number, Street name"
								/>
							</div>
							<div className="col-md-4 mb-3">
								<label htmlFor="validationDefault03">City/Town</label>
								<input type="text" className="form-control" id="validationDefault03" />
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
								<input type="text" className="form-control col-md-2" placeholder="#" />
							</div>

							<div className="col-md-3 mb-3">
								<label htmlFor="inputState">State/Province/Region</label>

								<input type="text" className="form-control" placeholder="Zip" />
							</div>

							<div className="col-md-3 mb-3">
								<label htmlFor="validationDefault05">Zip code</label>
								<input
									type="number"
									className="form-control"
									id="validationDefault05"
									placeholder="Zip"
									maxLength="5"
								/>
							</div>
						</div>
						<div className="form-row">
							<div className="col-md-6 mb-3">
								<label htmlFor="validationDefault03">Country</label>
								<input type="text" className="form-control" id="validationDefault03" />
							</div>

							<div className="col-md mb-3">
								<label htmlFor="validationDef">Date From</label>
								<input type="date" className="form-control" id="validationDef" />
							</div>

							<div className="col-md mb-3">
								<label htmlFor="validationDef">Date To</label>
								<input type="date" className="form-control" id="validationDef" />
							</div>
						</div>

						<div className="form-row">
							<h2>Part 2. Information about your parents </h2>
						</div>

						<div className="form-row">
							<div className="col-md-4 mb-3">
								<label htmlFor="validationDefault01">PARENT I. Last Name (Family name)</label>
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
								<label htmlFor="validationDefault01">
									PARENT I Other names (if any) Last Name (Family name)
								</label>
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
							<div className="form-check form-check-inline">
								<h6>Gender &nbsp;</h6>
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

							<div className="col-md mb-3">
								<label htmlFor="validationDefault03">City/Town of Birth</label>
								<input
									type="text"
									className="form-control"
									id="validationDefault03"
									placeholder="City/Town"
								/>
							</div>
							<div className="col-md mb-3">
								<label htmlFor="validationDefault03">Country of Birth</label>
								<input
									type="text"
									className="form-control"
									id="validationDefault03"
									placeholder="Country of birth"
								/>
							</div>
						</div>

						<div className="form-row">
							<div className="col-md mb-3">
								<label htmlFor="validationDefault03">Current City/Town of Residence (if living)</label>
								<input
									type="text"
									className="form-control"
									id="validationDefault03"
									placeholder="Nationality/Citizenship"
								/>
							</div>
							<div className="col-md mb-3">
								<label htmlFor="validationDefault03">Current Country of Residence (if living)</label>
								<input
									type="text"
									className="form-control"
									id="validationDefault03"
									placeholder="Nationality/Citizenship"
								/>
							</div>
						</div>
						<div className="form-row">
							<div className="col-md mb-3">
								<label htmlFor="validationDefault01">PARENT II. Last Name (Family name)</label>
								<input
									type="text"
									className="form-control"
									id="validationDefault01"
									placeholder="Last name"
								/>
							</div>
							<div className="col-md mb-3">
								<label htmlFor="validationDefault02">First Name</label>
								<input
									type="text"
									className="form-control"
									id="validationDefault02"
									placeholder="First name"
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
							<div className="col-md-5 mb-3">
								<label htmlFor="validationDefault01">
									PARENT II. Other names (if any) Last Name (Family name)
								</label>
								<input
									type="text"
									className="form-control"
									id="validationDefault01"
									placeholder="Last name"
								/>
							</div>
							<div className="col-md mb-3">
								<label htmlFor="validationDefault02">First Name</label>
								<input
									type="text"
									className="form-control"
									id="validationDefault02"
									placeholder="First name"
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
							<div className="form-check form-check-inline">
								<h6>Gender &nbsp;</h6>
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

							<div className="col-md mb-3">
								<label htmlFor="validationDefault03">City/Town of Birth</label>
								<input
									type="text"
									className="form-control"
									id="validationDefault03"
									placeholder="City/Town"
								/>
							</div>
							<div className="col-md mb-3">
								<label htmlFor="validationDefault03">Country of Birth</label>
								<input
									type="text"
									className="form-control"
									id="validationDefault03"
									placeholder="Country of birth"
								/>
							</div>
						</div>
						<div className="form-row">
							<div className="col-md mb-3">
								<label htmlFor="validationDefault03">Current City/Town of Residence (if living)</label>
								<input
									type="text"
									className="form-control"
									id="validationDefault03"
									placeholder="Nationality/Citizenship"
								/>
							</div>
							<div className="col-md mb-3">
								<label htmlFor="validationDefault03">Current Country of Residence (if living)</label>
								<input
									type="text"
									className="form-control"
									id="validationDefault03"
									placeholder="Nationality/Citizenship"
								/>
							</div>
						</div>

						<div className="form-row">
							<div>
								{" "}
								<h2>Part 3. Employment History</h2>
							</div>
						</div>

						<div className="form-row">
							<h5>
								Provide your employment history for the last 5 (five) years inside or outside of the
								U.S. Most recent first.
							</h5>
						</div>
						<div className="form-row">Employer 1 (current/most recent).</div>
						<div className="form-row">
							<div className="col-md mb-3">
								<label htmlFor="validationDefault02">Name of Employer/Company/Organization</label>
								<input
									type="text"
									className="form-control"
									id="validationDefault02"
									placeholder="Employer"
								/>
							</div>

							<div className="col-md mb-3">
								<label htmlFor="inputAddress">Employer Mailing Address</label>
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
										type="checkbox"
										name="inlinecheckboxOptions"
										id="inlinecheckbox1"
										value="option1"
									/>
									<label className="form-check-label" htmlFor="inlinecheckbox1">
										Apt.
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

							<div className="col-md mb-3">
								<label htmlFor="validationDefault03">City/Town</label>
								<input type="text" className="form-control" id="validationDefault03" />
							</div>
						</div>
						<div className="form-row">
							<div className="col-md mb-3">
								<label htmlFor="inputState">State</label>
								<select id="inputState" className="form-control  ">
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
									<option>...</option>
								</select>
							</div>
							<div className="col-md-4 mb-3">
								<label htmlFor="validationDefault03">Province/Teritory/Region/Area</label>
								<input type="text" className="form-control" id="validationDefault03" />
							</div>
							<div className="col-md-2 mb-3">
								<label htmlFor="validationDefault05">Zip code/Postal code</label>
								<input
									type="number"
									className="form-control"
									id="validationDefault05"
									placeholder="Zip"
									maxLength="5"
								/>
							</div>
							<div className="col-md mb-3">
								<label htmlFor="validationDefault03">Country</label>
								<input type="text" className="form-control" id="validationDefault03" />
							</div>
						</div>
						<div className="form-row">
							<div className="col-md-6 mb-3">
								<label htmlFor="validationDefault02">Your Ocupation/Position</label>
								<input
									type="text"
									className="form-control"
									id="validationDefault02"
									placeholder="Name"
								/>
							</div>
							<div className="col-md mb-3">
								<label htmlFor="validationDefault03">Empolyed from (date)</label>
								<input
									type="date"
									className="form-control"
									id="validationDefault03"
									placeholder="MM/DD/YYYY"
								/>
							</div>
							<div className="col-md mb-3">
								<label htmlFor="validationDefault03">Employed untill (date)</label>
								<input
									type="date"
									className="form-control"
									id="validationDefault03"
									placeholder="MM/DD/YYYY"
								/>
							</div>
						</div>
						<div className="form-row">
							<div className="col-md mb-3">
								<label htmlFor="validationDefault03">Signature</label>
								<input
									type="text"
									className="form-control"
									id="validationDefault03"
									placeholder="MM/DD/YYYY"
								/>
							</div>{" "}
							<div className="col-md mb-3">
								<label htmlFor="validationDefault03">Date of Signature</label>
								<input
									type="date"
									className="form-control"
									id="validationDefault03"
									placeholder="MM/DD/YYYY"
								/>
							</div>
						</div>
					</form>
				</div>
			</div>
		);
	}
}
