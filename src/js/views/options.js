import React from "react";

import "../../styles/home.scss";
import { Link } from "react-router-dom";

export class Options extends React.Component {
	render() {
		return (
			<div className="text-center mt-5">
				<div className="card-deck">
					<div className="card">
						<div className="card-body">
							<h2 className="card-title">
								<u>Application to Register Permanent Residence or Adjust Status (I-485)</u>
							</h2>
							<p className="card-text">
								Form I-485, Application to Register Permanent Residence or Adjust Status, is used by a
								person in the United States to apply for lawful permanent resident status.
							</p>
							<p className="text-center">
								<Link to="/green_card_list_selection">
									<button className="btn btn-primary">Apply for a {"green card"}</button>
								</Link>
							</p>
						</div>
					</div>

					<div className="card">
						<div className="card-body">
							<h2 className="card-title">
								<u>Application To Extend/Change Nonimmigrant Status (I-539)</u>
							</h2>
							<p className="card-text">
								You should use this application if you are one of the nonimmigrants listed below and
								wish to apply to U.S. Citizenship and Immigration Services (USCIS) for an extension of
								stay or a change to another nonimmigrant status. In certain situations, you may use this
								application to apply for an initial nonimmigrant status. You may also use this
								application if you are a nonimmigrant F-1 or M-1 student applying for reinstatement.
							</p>
							<p className="text-center">
								<Link to="/form">
									<button className="btn btn-primary">Apply for Student Visa</button>
								</Link>
							</p>{" "}
						</div>
					</div>
				</div>
				<a href="#" className="btn btn-dangerfloat-right">
					Continue
				</a>
			</div>
		);
	}
}
