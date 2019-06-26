import React from "react";

import "../../styles/home.scss";
import { Link } from "react-router-dom";

export class Green_card_list_selection extends React.Component {
	render() {
		return (
			<div className="card mx-auto p-2">
				<div className="card-header text-center">
					<h3>The List of Application Forms to Register Permanent Residence </h3>
				</div>
				<ol>
					<li> I-130 Petition for Alien Relative</li>
					<li> I-130A Supplemental Information for Spouse Beneficiary </li>{" "}
					<li> I-864 Affidavit of Support</li>
					<li> I-485 Application to Register Permanent Residence Or Adjust Status</li>{" "}
					<li> I-693 Report of Medical Examination and Vaccination Record (Sealed)</li>{" "}
					<li> I-765 Application For Employment Authorization</li>
				</ol>

				<div className="card-footer text-right">
					<Link to="/green_card_list">
						<button className="btn btn-primary">Continue</button>
					</Link>
				</div>
			</div>
		);
	}
}
