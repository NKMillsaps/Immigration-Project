import React from "react";

import "../../styles/home.scss";
import { Link } from "react-router-dom";

export class Green_card_list extends React.Component {
	render() {
		return (
			<div className="text-center mt-5">
				<div className="card-deck">
					<div className="card">
						<div className="card-body">
							<h2 className="card-title">
								<u>Application to Register Permanent Residence or Adjust Status (I-485)</u>
							</h2>

							<ol>
								The Full List of Document required by USCIS.
								<li> I-130 (Petition for Alien Relative),</li>
								<li>
									{" "}
									I-130A (Supplemental Information for Spouse Beneficiary), I-864 (Affidavit of
									Support), I-485 (Application to Register Permanent Residence or Adjust Status),{" "}
								</li>
								<li>I-693 (Report of Medical Examination and Vaccination Record (SEALED)</li>
								<li> I-765 (Application for Employment Authorization).</li>
								Contents include:
								<li> Form G1145 E-Notification of Application/Petition Acceptance </li>
								<li> Check in the amount of US $ 535.00 for form I-130 </li>{" "}
								<li> Check in the amount of US $ 1225.00 for form I-485 </li>{" "}
								<li> I-130 Petition for Alien Relative</li>
								<li> Copy of Petitioners( US Citizen) passport</li>
								<li> Copy of Marriage Certificate </li>
								<li>Copy of Termination of Previous Marriage </li> <li> Two photos</li>{" "}
								<li>Affidavits sworn or affirmed by third parties </li>{" "}
								<li> G-1145 e-Notification of Application </li>
								<li> I-130A Supplemental Information for Spouse Beneficiary </li>•{" "}
								<li>Copy of Beneficiary&#39;s (Alien Spouse) passport</li> <li>Two photos</li>{" "}
								<li> Copy of I-94</li> <li> Copy of I-797C (Notice of Action)</li>{" "}
								<li>G-1145 e-Notification of Application</li> <li> I-864 Affidavit of Support</li>{" "}
								<li>Copy of the passport</li> <li> Copy of W2 2016</li>{" "}
								<li> Copy of U.S. Individual Income Tax Return 2016 </li>
								<li> I-485 Application to Register Permanent Residence Or Adjust Status</li> •{" "}
								<li>Copy of the Passport</li> •<li>Copy of Marriage Certificate</li> •{" "}
								<li>Two photos</li> • <li>Copy of I-94</li> • <li>Copy of I-797C (Notice of Action)</li>{" "}
								• <li>Copy of the Visa</li>{" "}
								<li> Copy of Birth Certificate with certified translation </li>
								<li>Affidavits sworn or affirmed by third parties </li>
								<li> Joint Bank Account Statement</li>{" "}
								<li> G-1145 e-Notification of Application (optional)</li>{" "}
								<li> I-693 Report of Medical Examination and Vaccination Record (Sealed)</li>{" "}
								<li> I-765 Application For Employment Authorization</li> <li> Copy of the Passport </li>
								<li>Copy of the Visa</li> <li>Copy of I-94</li> <li>Two photos</li>{" "}
								<li>Copy of Birth Certificate with certified translation</li>
							</ol>

							<p className="text-center">
								<Link to="/i130apetition">
									<button className="btn btn-primary">Apply for a {"green card"}</button>
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
