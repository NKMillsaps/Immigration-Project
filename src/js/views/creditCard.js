import React from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export class CreditCard extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<h2 CREDIT CARD PAYMENT />
				<form className="needs-validation" noValidate>
					<div className="card w-75 m-auto">
						<div className="card-header text-center h1 ">PAYMENT FORM </div>
						<div className="card-body">
							<div className="alert alert-danger h3 rounded border border-danger p-2" role="alert">
								{" "}
								Some fields are missing
								<a href="#" className="alert-link">
									{" "}
								</a>
							</div>

							<form>
								<div className="form-row">
									<div className="form-group col-md-5">
										<label htmlFor="validationCustomCard#">Card #</label>
										<input
											type="number"
											className="form-control"
											id="choose"
											placeholder="0000-0000-0000-0000"
											required
											maxLength="16"
										/>
										<div className="invalid-feedback">
											Please provide a valid credit card number
										</div>
									</div>
									<div className="form-group col-md-3">
										<label htmlFor="validaionCustomCVC#">CVC # </label>
										<input
											type="number"
											className="form-control"
											id="validationCustomCVC#"
											placeholder="000"
											required
											maxLength="3"
										/>
										<div className="invalid-feedback">Please provide CVC #</div>
									</div>
									<div className="form-group col-md-4">
										<label htmlFor="validationCustomLastName">Amount $ </label>
										<input
											type="number"
											className="form-control"
											id="validationCustomFirstName"
											placeholder="Amount"
											required
										/>
									</div>
								</div>

								<div className="form-row">
									<div className="form-group col-md-6">
										<label htmlFor="validationCustom01">First Name </label>
										<input
											type="text"
											className="form-control"
											id="validationCustom01"
											placeholder="FirstName"
											required
										/>
										<div className="invalid-feedback">Please provide your First Name</div>
										<div className="valid-feedback">Looks good!</div>
									</div>

									<div className="form-group col-md-6">
										<label htmlFor="validationCustom02">Last Name</label>
										<input
											type="text"
											className="form-control"
											id="validationCustom02"
											placeholder="LastName"
											required
										/>
										<div className="invalid-feedback">Please provide your Last Name</div>
										<div className="valid-feedback">Looks good!</div>
									</div>
								</div>

								<div className="form-row">
									<div className="form-group col-md-6">
										<label htmlFor="validationCustom03">City </label>
										<input type="text" className="form-control" id="validationCustom03" required />
										<div className="invalid-feedback">Please provide a Valid City</div>
									</div>

									<div className="form-group col-md-3">
										<label htmlFor="validationCustom04">State</label>

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
										</select>
										<div className="invalid-feedback">Please provide a valid state. </div>
									</div>

									<div className="form-group col-md-3">
										<label htmlFor="validationCustom05">Zip</label>
										<input
											type="number"
											className="form-control"
											id="validationCustom05"
											required
											maxLength="5"
										/>
										<div className="invalid-feedback">Please provide a Zip Code</div>
									</div>
								</div>

								<div className="form-row">
									<div className="form-group col-md-6">
										<p>We accept:</p>
									</div>
									<div className="form-group col-md-6">
										<p>Message:</p>
									</div>
								</div>

								<div className="form-row">
									<div className="form-group col-md-6">
										<div className="form-group form-check-inline">
											<div className="form-check">
												<input
													name="creditCard"
													className="form-check-input classOnly"
													type="radio"
													id="gridCheck"
													required
												/>
												<label className="form-check-label" htmlFor="gridCheck">
													<i className="fab fa-cc-mastercard fa-2x" />
												</label>
											</div>

											<div className="form-check">
												<input
													name="creditCard"
													className="form-check-input classOnly"
													type="radio"
													id="gridCheck2"
													required
												/>
												<label className="form-check-label" htmlFor="gridCheck">
													<i className="fab fa-cc-visa fa-2x" />
												</label>
											</div>
											<div className="form-check">
												<input
													name="creditCard"
													className="form-check-input classOnly"
													type="radio"
													id="gridCheck"
													required
												/>
												<label className="form-check-label" htmlFor="gridCheck">
													<i className="fab fa-cc-diners-club fa-2x" />
												</label>
											</div>

											<div className="form-check">
												<input
													name="creditCard"
													className="form-check-input classOnly"
													type="radio"
													id="gridCheck"
													required
												/>
												<label className="form-check-label" htmlFor="gridCheck">
													<i className="fab fa-cc-amex fa-2x" />
												</label>
											</div>
										</div>
									</div>

									<div className="form-group col-md-6">
										<textarea className="form-control" id="exampleFormControlTextarea1" rows="3" />
										<p className="text-left">Add your notes here</p>
									</div>
								</div>
								<Context.Consumer>
									{({ store }) => {
										return (
											<div className="card-footer text-right">
												<button type="reset" className="btn btn-secondary btn-lg">
													Cancel
												</button>
												<button
													className="btn btn-primary mx-auto p-2"
													onCLick={() => actions.tryMethod()}>
													Submit Payment
												</button>
											</div>
										);
									}}
								</Context.Consumer>
							</form>
						</div>
					</div>
				</form>
			</div>
		);
	}
}
