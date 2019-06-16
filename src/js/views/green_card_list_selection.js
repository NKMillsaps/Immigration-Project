import React from "react";

import "../../styles/home.scss";
import { Link } from "react-router-dom";

export class Green_card_list_selection extends React.Component {
	render() {
		return (
			<div className="text mt-5">
				<div className="card-deck">
					<div className="card">
						<div className="card-body">
							<h2 className="card-title" align="center">
								The List of Application Forms to Register Permanent Residence
							</h2>

							<ol>
								<li> Form G1145 E-Notification of Application/Petition Acceptance </li>
								<li> I-130 Petition for Alien Relative</li>
								<li> I-130A Supplemental Information for Spouse Beneficiary </li>{" "}
								<li> I-864 Affidavit of Support</li>
								<li> I-485 Application to Register Permanent Residence Or Adjust Status</li>{" "}
								<li> I-693 Report of Medical Examination and Vaccination Record (Sealed)</li>{" "}
								<li> I-765 Application For Employment Authorization</li>
							</ol>

							<p className="text-right">
								<Link to="/green_card_list">
									<button className="btn btn-primary">Continue</button>
								</Link>
							</p>
						</div>
					</div>
				</div>
				<a href="#" className="btn btn-success float-right">
					Continue
				</a>
			</div>
		);
	}
}
