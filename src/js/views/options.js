import React from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

export class Options extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<React.Fragment>
							<div className="text-center mt-5">
								<div className="card-deck">
									<div className="card">
										<div className="card-header">
											<h4>
												Application to Register Permanent Residence or Adjust Status (I-485)
											</h4>
										</div>
										<div className="card-body">
											<p>
												{" "}
												Register Permanent Residence or Adjust Status, is used by a person in
												the United States to apply for lawful permanent resident status.
											</p>
										</div>

										<div className="card-footer">
											{store.tempLoggedUser ? (
												<Link to="/green_card_list_selection">
													<button className="btn btn-primary">
														Continue your application
													</button>
												</Link>
											) : (
												<Link to="/loginregister">
													<button
														className="btn btn-primary"
														onClick={() => actions.addApplication()}>
														Apply for a {"green card"}
													</button>
												</Link>
											)}
										</div>
									</div>

									<div className="card">
										<div className="card-header">
											<h4>Application To Extend/Change Nonimmigrant Status (I-539)</h4>
										</div>
										<div className="card-body">
											<p className="card-text">
												You should use this application if you are one of the nonimmigrants
												listed below and wish to apply to U.S. Citizenship and Immigration
												Services (USCIS) for an extension of stay or a change to another
												nonimmigrant status. In certain situations, you may use this application
												to apply for an initial nonimmigrant status. You may also use this
												application if you are a nonimmigrant F-1 or M-1 student applying for
												reinstatement.
											</p>
										</div>
										<div className="card-footer">
											<Link to="/form">
												<button className="btn btn-primary">Apply Here</button>
											</Link>
										</div>
									</div>
								</div>
							</div>
						</React.Fragment>
					);
				}}
			</Context.Consumer>
		);
	}
}
