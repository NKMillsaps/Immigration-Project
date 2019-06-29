import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export class AddressForm extends React.Component {
	render() {
		return (
			<div className="container">
				<Context.Consumer>
					{({ actions }) => {
						return (
							<React.Fragment>
								<div className="form-group mx-auto p-2">
									<div className="card-header text-center">
										<h4>Address Information</h4>
									</div>

									<div className="form-row">
										<div className="col-md mb-3">
											<label htmlFor="inputaddress">Address</label>

											<input
												type="text"
												name="address"
												className="form-control"
												placeholder="Address"
											/>
										</div>
									</div>

									<div className="form-row">
										<div className="col-md mb-3">
											<label htmlFor="validationDefault01">Apartment</label>
											<input
												type="text"
												name="apartment"
												className="form-control"
												placeholder="Apartment"
											/>
										</div>
										<div className="col-md mb-3">
											<label htmlFor="validationDefault02">Zip Code</label>
											<input
												type="text"
												name="zipCode"
												className="form-control"
												placeholder="Zip Code"
											/>
										</div>
									</div>

									<div className="form-row">
										<div className="col-md mb-3">
											<label htmlFor="validationDefault03">City</label>
											<input
												type="text"
												name="city"
												className="form-control"
												placeholder="City"
											/>
										</div>
										<div className="col-md mb-3">
											<label htmlFor="validationDefault04">State</label>
											<input
												type="text"
												name="state"
												className="form-control"
												placeholder="State"
											/>
										</div>
									</div>

									<div className="form-row">
										<div className="col-md mb-3">
											<label htmlFor="validationDefault05">Country</label>
											<input
												type="text"
												name="country"
												className="form-control"
												placeholder="Country"
											/>
										</div>
									</div>
									<div className="form-row">
										<button
											onClick={() =>
												actions.updatePersonAddress(
													document.querySelector("[name=address]").value,
													document.querySelector("[name=apartment]").value,
													document.querySelector("[name=zipCode]").value,
													document.querySelector("[name=city]").value,
													document.querySelector("[name=state]").value,
													document.querySelector("[name=country]").value,
													this.props
												)
											}
											className="btn btn-primary mx-auto p-2">
											Update Info
										</button>
									</div>
								</div>
							</React.Fragment>
						);
					}}
				</Context.Consumer>
			</div>
		);
	}
}
AddressForm.propTypes = {
	history: PropTypes.object
};
