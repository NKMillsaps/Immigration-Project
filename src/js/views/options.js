import React from "react";
import { Context } from "../store/appContext";
// import "../../styles/options.scss";
import { Link } from "react-router-dom";

export class Options extends React.Component {
	render() {
		return (
			<div>
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<React.Fragment>
								<div className="card-deck">
									<div className="card">
										<div className="card-header text-center">
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

										<div className="card-footer text-center mt-5">
											{store.tempLoggedUser ? (
												<Link to="/green_card_list_selection">
													<button className="btn btn-primary">
														Continue your application
													</button>
												</Link>
											) : (
												<Link to="/loginregister">
													<button1
														className="btn btn-primary"
														onClick={() => actions.addApplication()}>
														Apply for a {"green card"}
													</button1>
												</Link>
											)}
										</div>
									</div>

									<div className="card">
										<div className="card-header text-center">
											<h4>Application To Extend/Change Nonimmigrant Status (I-539)</h4>
										</div>
										<div className="card-body">
											<p className="card-text">
												You should use this application if you wish to apply for an extension of
												stay or a change to another nonimmigrant status. You may also use this
												application if you are a nonimmigrant F-1 or M-1 student applying for
												reinstatement.
											</p>
										</div>
										<div className="card-footer text-center mt-5">
											<Link to="/form_i539">
												<button1 className="btn btn-primary">Apply Here</button1>
											</Link>
										</div>
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
