import React from "react";
import "../../styles/home.scss";

export class Form extends React.Component {
	render() {
		return (
			<div className="text-justify mt-5">
				<div className="container ">
					<form>
						<div className="form-row">
							<div className="col-md-4 mb-3">
								<label htmlFor="validationDefault01">First name</label>
								<input
									type="text"
									className="form-control"
									id="validationDefault01"
									placeholder="First name"
									value="First name"
									required
								/>
							</div>
							<div className="col-md-4 mb-3">
								<label htmlFor="validationDefault02">Last name</label>
								<input
									type="text"
									className="form-control"
									id="validationDefault02"
									placeholder="Last name"
									value="Last name"
									required
								/>
							</div>
							<div className="col-md-4 mb-3">
								<label htmlFor="validationDefaultUsername">Username</label>
								<div className="input-group">
									<div className="input-group-prepend">
										<span className="input-group-text" id="inputGroupPrepend2">
											@
										</span>
									</div>
									<input
										type="text"
										className="form-control"
										id="validationDefaultUsername"
										placeholder="Username"
										aria-describedby="inputGroupPrepend2"
										required
									/>
								</div>
							</div>
						</div>
						<div className="form-group">
							<label htmlFor="inputAddress">Address</label>
							<input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
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
									Apt.
								</label>
							</div>
							<div className="custom-control custom-checkbox">
								<input
									type="checkbox"
									className="custom-control-input"
									id="customCheck1"
									defaultChecked
								/>
								<label className="custom-control-label" htmlFor="customCheck1">
									Ste.
								</label>
							</div>
							<div className="custom-control custom-checkbox">
								<input
									type="checkbox"
									className="custom-control-input"
									id="customCheck1"
									defaultChecked
								/>
								<label className="custom-control-label" htmlFor="customCheck1">
									Flr.
								</label>
							</div>
						</div>

						<div className="form-group">
							<label htmlFor="inputAddress2">Address 2</label>
							<input
								type="text"
								className="form-control"
								id="inputAddress2"
								placeholder="Apartment, studio, or floor"
							/>
						</div>

						<div className="form-row">
							<div className="col-md-6 mb-3">
								<label htmlFor="validationDefault03">City</label>
								<input
									type="text"
									className="form-control"
									id="validationDefault03"
									placeholder="City"
									required
								/>
							</div>
							<div className="col-md-3 mb-3">
								<label htmlFor="inputState">State</label>
								<select id="inputState" className="form-control required">
									<option selected>Choose...</option>
									<option>...</option> required
								</select>
							</div>
							<div className="col-md-3 mb-3">
								<label htmlFor="validationDefault05">Zip</label>
								<input
									type="text"
									className="form-control"
									id="validationDefault05"
									placeholder="Zip"
									required
								/>
							</div>
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
						</div>
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
